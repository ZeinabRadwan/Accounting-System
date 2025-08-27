<?php

namespace App\Http\Controllers\API;

use Exception;
use App\Models\Purchase;
use App\Models\Supplier;
use Illuminate\Http\Request;
use App\Models\PurchaseReturn;
use App\Models\PurchasePayment;
use App\Models\NonPurchasePayment;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use JetBrains\PhpStorm\ArrayShape;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\PurchaseResource;
use App\Http\Resources\SupplierResource;
use Illuminate\Support\Facades\Validator;
use Spatie\SimpleExcel\SimpleExcelReader;
use App\Notifications\WelcomeNotification;
use App\Http\Requests\SupplierStoreRequest;
use App\Http\Resources\PurchaseListResource;
use App\Http\Resources\SupplierListResource;
use Illuminate\Support\Facades\Notification;
use Intervention\Image\Facades\Image as Image;
use App\Http\Resources\PurchasePaymentResource;
use App\Http\Resources\PurchaseReturnListResource;
use App\Http\Resources\NonPurchasePaymentListResource;
use App\Http\Resources\SupplierForPurchasePaymentResource;
use App\Http\Resources\SupplierWithNonPurchasePaymentResource;
use App\Models\ChartOfAccount;

class SupplierController extends Controller
{
    // define middleware
    public function __construct()
    {
        $this->middleware('can:supplier-list', ['only' => ['index', 'search']]);
        $this->middleware('can:supplier-create', ['only' => ['create']]);
        $this->middleware('can:supplier-view', ['only' => ['show']]);
        $this->middleware('can:supplier-edit', ['only' => ['update']]);
        $this->middleware('can:supplier-delete', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Supplier::query();

        // Filter by type if provided
        if ($request->has('type') && $request->type !== '') {
            $query->where('type', $request->type);
        }

        return SupplierListResource::collection($query->latest()->paginate($request->perPage));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SupplierStoreRequest $request)
    {
        try {
            // generate code
            $code = 1;
            $prevSupplier = Supplier::latest()->first();
            if ($prevSupplier) {
                $code = ++$prevSupplier->supplier_id;
            }

            // upload thumbnail and set the name
            $imageName = '';
            if ($request->image) {
                $imageName = time() . '.' . explode(
                    '/',
                    explode(':', substr($request->image, 0, strpos($request->image, ';')))[1]
                )[1];
                Image::make($request->image)->save(public_path('images/suppliers/') . $imageName);
            }

            // Prepare supplier data
            $supplierData = [
                'name' => $request->name,
                'supplier_id' => $code,
                'email' => $request->email,
                'company_name' => $request->companyName,
                'tax_registration_number' => $request->taxRegistrationNumber,
                'status' => $request->status,
                'image_path' => $imageName,
                'type' => $request->type,
                'chart_of_account_id' => $request->chartOfAccountId,
                
                // New fields
                'code_number' => $request->codeNumber,
                'notes' => $request->notes,
                'display_language' => $request->displayLanguage,
                'full_name' => $request->fullName,
                'business_name' => $request->businessName,
                'first_name' => $request->firstName,
                'last_name' => $request->lastName,
                'phone_number' => $request->phoneNumber,
                'street_address1' => $request->streetAddress1,
                'street_address2' => $request->streetAddress2,
                'city' => $request->city,
                'state' => $request->state,
                'postal_code' => $request->postalCode,
                'country' => $request->country,
                'neighbourhood' => $request->neighbourhood,
                'commercial_register' => $request->commercialRegister,
                'tax_card' => $request->taxCard,
                'attachments' => $request->attachments ? json_encode($request->attachments) : null,
                'is_send_email' => $request->isSendEmail,
                'is_send_sms' => $request->isSendSMS,
            ];

            // Auto-assign Chart of Account if not provided
            $supplierData = $this->autoAssignChartOfAccountForSupplier($supplierData);

            // create supplier
            $userSchema = Supplier::create($supplierData);            

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($userSchema)
                ->withProperties([
                    'name' => "",
                    'code' => '[' . $request->name . ']',
                    'event' => 'Create',
                    'slug' => $userSchema->slug,
                    'routeName' => 'suppliers.show'
                ])
                ->useLog('Supplier Created')
                ->log('Supplier Created');

            // Handle representatives if provided
            if ($request->has('representatives') && is_array($request->representatives)) {
                foreach ($request->representatives as $repData) {
                    if (!empty($repData['name'])) {
                        // If this is a primary representative, unset others
                        if (isset($repData['is_primary']) && $repData['is_primary']) {
                            $userSchema->representatives()->update(['is_primary' => false]);
                        }
                        
                        $userSchema->representatives()->create([
                            'name' => $repData['name'],
                            'email' => $repData['email'] ?? null,
                            'phone' => $repData['phone'] ?? null,
                            'position' => $repData['position'] ?? null,
                            'is_primary' => $repData['is_primary'] ?? false,
                            'notes' => $repData['notes'] ?? null,
                        ]);
                    }
                }
            }

            //send welcome notification
            try {
                if ($request->isSendEmail || $request->isSendSMS) {
                    Notification::send($userSchema, new WelcomeNotification($userSchema,[
                        'isSendEmail' => $request->isSendEmail,
                        'isSendSMS' => $request->isSendSMS,
                    ]));
                }
            } catch (Exception $e) {
                //handle email error here if necessary
                throw new Exception($e);
            }
            return $this->responseWithSuccess('Supplier added successfully');
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        try {
            $supplier = Supplier::where('slug', $slug)->first();
            
            if (!$supplier) {
                return $this->responseWithError('Supplier not found', 404);
            }
            
            $supplier->ensureChartOfAccountLoaded();
            
            return new SupplierResource($supplier);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $slug)
    {
        $supplier = Supplier::where('slug', $slug)->first();
        // validate request
        $this->validate($request, [
            'name' => 'required|string|max:255',
            'phoneNumber' => 'required|string|max:20|min:3',
            'email' => 'nullable|email|max:255|min:3|unique:users,email,' . $supplier->email,
            'companyName' => 'nullable|string|max:100|min:2',
            'type' => 'required|in:Company,Individual',
            'chartOfAccountId' => 'nullable|integer|exists:chart_of_accounts,id',
        ]);
        try {
            // upload thumbnail and set the name
            $imageName = $supplier->image_path;
            if ($request->image) {
                if ($imageName) {
                    @unlink(public_path('images/suppliers/' . $imageName));
                }
                $imageName = time() . '.' . explode(
                    '/',
                    explode(':', substr($request->image, 0, strpos($request->image, ';')))[1]
                )[1];
                Image::make($request->image)->save(public_path('images/suppliers/') . $imageName);
            }
            // Prepare update data
            $updateData = [
                'name' => $request->name,
                'email' => $request->email,
                'company_name' => $request->companyName,
                'tax_registration_number' => $request->taxRegistrationNumber,
                'type' => $request->type,
                'status' => $request->status,
                'image_path' => $imageName,
                'chart_of_account_id' => $request->chartOfAccountId,
                
                // New fields
                'code_number' => $request->codeNumber,
                'notes' => $request->notes,
                'display_language' => $request->displayLanguage,
                'full_name' => $request->fullName,
                'business_name' => $request->businessName,
                'first_name' => $request->firstName,
                'last_name' => $request->lastName,
                'phone_number' => $request->phoneNumber,
                'street_address1' => $request->streetAddress1,
                'street_address2' => $request->streetAddress2,
                'city' => $request->city,
                'state' => $request->state,
                'postal_code' => $request->postalCode,
                'country' => $request->country,
                'neighbourhood' => $request->neighbourhood,
                'commercial_register' => $request->commercialRegister,
                'tax_card' => $request->taxCard,
                'attachments' => $request->attachments ? json_encode($request->attachments) : null,
                'is_send_email' => $request->isSendEmail,
                'is_send_sms' => $request->isSendSMS,
            ];

            // Auto-assign Chart of Account if not provided
            $updateData = $this->autoAssignChartOfAccountForSupplier($updateData);

            // update supplier
            $supplier->update($updateData);

            // Handle representatives if provided
            if ($request->has('representatives') && is_array($request->representatives)) {
                // Clear existing representatives
                $supplier->representatives()->delete();
                
                // Add new representatives
                foreach ($request->representatives as $repData) {
                    if (!empty($repData['name'])) {
                        // If this is a primary representative, unset others
                        if (isset($repData['is_primary']) && $repData['is_primary']) {
                            $supplier->representatives()->update(['is_primary' => false]);
                        }
                        
                        $supplier->representatives()->create([
                            'name' => $repData['name'],
                            'email' => $repData['email'] ?? null,
                            'phone' => $repData['phone'] ?? null,
                            'position' => $repData['position'] ?? null,
                            'is_primary' => $repData['is_primary'] ?? false,
                            'notes' => $repData['notes'] ?? null,
                        ]);
                    }
                }
            }

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($supplier)
                ->withProperties([
                    'name' => "",
                    'code' => '[' . $request->name . ']',
                    'event' => 'Update',
                    'slug' => $supplier->slug,
                    'routeName' => 'suppliers.show'
                ])
                ->useLog('Supplier Updated')
                ->log('Supplier Updated');

            return $this->responseWithSuccess('Supplier updated successfully');
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($slug)
    {
        try {
            $supplier = Supplier::where('slug', $slug)->first();
            //delete image from storage
            if ($supplier->image_path) {
                @unlink(public_path('images/suppliers/' . $supplier->image_path));
            }

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($supplier)
                ->withProperties([
                    'name' => "",
                    'code' => '[' . $supplier->name . ']',
                    'event' => 'Delete'
                ])
                ->useLog('Supplier Deleted')
                ->log('Supplier Deleted');


            $supplier->delete();

            return $this->responseWithSuccess('Supplier deleted successfully');
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * search resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function search(Request $request)
    {
        $term = $request->term;
        $query = Supplier::query();

        // Filter by date range
        if ($request->startDate && $request->endDate) {
            $query = $query->whereBetween('created_at', [$request->startDate, $request->endDate]);
        }

        // ✅ Filter by type
        if ($request->has('type') && $request->type !== '') {
            $query->where('type', $request->type);
        }

        // Keyword search
        $query->where(function ($query) use ($term) {
            $query->where('name', 'Like', '%' . $term . '%')
                ->orWhere('email', 'Like', '%' . $term . '%')
                ->orWhere('phone_number', 'Like', '%' . $term . '%')
                ->orWhere('phone_legacy', 'Like', '%' . $term . '%')
                ->orWhere('company_name', 'Like', '%' . $term . '%');
        });

        return SupplierResource::collection(
            $query->latest()->paginate($request->perPage)
        );
    }

    // return all suppliers
    public function allSuppliers()
    {
        $suppliers = Supplier::where('status', 1)->latest()->get();

        return SupplierListResource::collection($suppliers);
    }

    // return all suppliers
    public function suppliersForNonPurchasePayments()
    {
        $suppliers = Supplier::where('status', 1)->latest()->get();

        return SupplierWithNonPurchasePaymentResource::collection($suppliers);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function supplierPurchases($slug)
    {
        try {
            $supplier = Supplier::where('slug', $slug)->with('purchases')->first();
            
            if (!$supplier) {
                return $this->responseWithError('Supplier not found', 404);
            }
            
            return PurchaseListResource::collection(Purchase::where('supplier_id', $supplier->id)->get());
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function filterSupplierPurchases(Request $request)
    {
        $supplier = Supplier::where('slug', $request->supplierSlug)->first();
        
        if (!$supplier) {
            return $this->responseWithError('Supplier not found', 404);
        }
        
        $products = [];
        $purchases = Purchase::with(
            'purchaseProducts.product.proSubCategory.category',
            'purchaseProducts.product.productUnit'
        );
        if (isset($request->products) && count($request->products) > 0) {
            // build the product array
            foreach ($request->products as $key => $product) {
                array_push($products, $product['id']);
            }
            // get the purchases
            $purchases = $purchases->where(
                'supplier_id',
                $supplier->id
            )->whereDoesntHave('purchaseReturn')->whereHas(
                'purchaseProducts',
                function ($secondQuery) use ($products) {
                    $secondQuery->whereIn('product_id', $products);
                }
            )->get();
        } else {
            // get the purchases
            $purchases = $purchases->where('supplier_id', $supplier->id)->whereDoesntHave('purchaseReturn')->get();
        }

        return PurchaseResource::collection($purchases);
    }

    // return client specific invoices
    public function specificSupplierPurchases($slug)
    {
        $supplier = Supplier::where('slug', $slug)->first();
        
        if (!$supplier) {
            return $this->responseWithError('Supplier not found', 404);
        }
        
        $purchases = Purchase::with('supplier', 'purchasePayments', 'purchaseTax')->where(
            'supplier_id',
            $supplier->id
        )->where('status', 1)->where('is_paid', 0)->get();

        return [
            'purchases' => PurchaseListResource::collection($purchases),
            'supplier' => new SupplierForPurchasePaymentResource($supplier),
        ];
    }

    // return purchases for a specific supplier
    public function purchasesBySupplier(Request $request, $slug)
    {
        $supplier = Supplier::where('slug', $slug)->first();
        $purchases = Purchase::with('supplier', 'purchasePayments', 'purchaseTax')->where(
            'supplier_id',
            $supplier->id
        )->with('supplier', 'user')->latest()->paginate($request->perPage);

        return PurchaseListResource::collection($purchases);
    }

    // search purchases for a specific supplier
    public function searchPurchasesBySupplier(Request $request, $slug)
    {
        $term = $request->term;

        $supplier = Supplier::where('slug', $slug)->first();

        $query = Purchase::with('supplier', 'purchasePayments', 'purchaseTax');

        if ($request->startDate && $request->endDate) {
            $query = $query->whereBetween('purchase_date', [$request->startDate, $request->endDate]);
        }

        $query->where(function ($query) use ($supplier) {
            $query->where('supplier_id', $supplier->id);
        })->where(function ($query) use ($term) {
            $query->orWhere('purchase_no', 'like', '%' . $term . '%')
                ->orWhere('sub_total', 'like', '%' . $term . '%')
                ->orWhere('transport', 'like', '%' . $term . '%')
                ->orWhere('discount', 'like', '%' . $term . '%')
                ->orWhere('po_reference', 'like', '%' . $term . '%')
                ->orWhere('payment_terms', 'like', '%' . $term . '%');
        });

        return PurchaseListResource::collection($query->latest()->paginate($request->perPage));
    }

    // return purchase returns for specific suppliers
    public function purchaseReturnsBySupplier(Request $request, $slug)
    {
        $supplier = Supplier::where('slug', $slug)->first();
        $returns = PurchaseReturn::with('purchase.supplier')->whereHas(
            'purchase',
            function ($newQuery) use ($supplier) {
                $newQuery->where('supplier_id', $supplier->id);
            }
        )->latest()->paginate($request->perPage);

        return PurchaseReturnListResource::collection($returns);
    }

    // search supplier purchase returns
    public function searchPurchaseReturnsBySupplier(Request $request, $slug)
    {
        $supplier = Supplier::where('slug', $slug)->first();

        $term = $request->term;
        $query = PurchaseReturn::with('purchase.supplier', 'user');

        if ($request->startDate && $request->endDate) {
            $query = $query->whereBetween('date', [$request->startDate, $request->endDate]);
        }

        $query->where(function ($query) use ($term, $supplier) {
            $query->whereHas('purchase', function ($newQuery) use ($supplier) {
                $newQuery->where('supplier_id', $supplier->id);
            })->where(function ($query) use ($term) {
                $query->where('slug', 'LIKE', '%' . $term . '%')
                    ->orWhere('code', 'LIKE', '%' . $term . '%')
                    ->orWhere('reason', 'LIKE', '%' . $term . '%')
                    ->orWhere('total_return', 'LIKE', '%' . $term . '%')
                    ->orWhereHas('purchase', function ($newQuery) use ($term) {
                        $newQuery->where('purchase_no', 'LIKE', '%' . $term . '%')
                            ->orWhere('po_reference', 'LIKE', '%' . $term . '%')
                            ->orWhereHas('supplier', function ($anotherQuery) use ($term) {
                                $anotherQuery->where('name', 'LIKE', '%' . $term . '%')
                                    ->orWhere('phone_number', 'LIKE', '%' . $term . '%')
                                    ->orWhere('phone_legacy', 'LIKE', '%' . $term . '%');
                            });
                    });
            });
        });

        return PurchaseReturnListResource::collection($query->latest()->paginate($request->perPage));
    }

    // return purchase payments for a specific supplier
    public function paymentsForSupplier(Request $request, $slug)
    {
        $supplier = Supplier::where('slug', $slug)->first();
        $payments = PurchasePayment::with(
            'purchase.supplier',
            'purchase.purchaseTax',
            'purchasePaymentTransaction.cashbookAccount',
            'user'
        )
            ->whereHas('purchase', function ($newQuery) use ($supplier) {
                $newQuery->where('supplier_id', $supplier->id);
            })->latest()->paginate($request->perPage);

        return PurchasePaymentResource::collection($payments);
    }

    // serach purchase payments for a specific supplier
    public function searchPaymentsForSupplier(Request $request, $slug)
    {
        $supplier = Supplier::where('slug', $slug)->first();

        $term = $request->term;
        $query = PurchasePayment::with(
            'purchase.supplier',
            'purchase.purchaseTax',
            'purchasePaymentTransaction.cashbookAccount',
            'user'
        );

        if ($request->startDate && $request->endDate) {
            $query = $query->whereBetween('date', [$request->startDate, $request->endDate]);
        }

        $query->where(function ($query) use ($term, $supplier) {
            $query->whereHas('purchase', function ($newQuery) use ($supplier) {
                $newQuery->where('supplier_id', $supplier->id);
            })->where(function ($query) use ($term) {
                $query->orWhere('amount', 'LIKE', '%' . $term . '%')
                    ->orWhereHas('purchase', function ($newQuery) use ($term) {
                        $newQuery->where('purchase_no', 'LIKE', '%' . $term . '%')
                            ->orWhere('sub_total', 'LIKE', '%' . $term . '%')
                            ->orWhere('po_reference', 'LIKE', '%' . $term . '%');
                    })
                    ->orWhereHas('purchasePaymentTransaction', function ($newQuery) use ($term) {
                        $newQuery->where('amount', 'LIKE', '%' . $term . '%')
                            ->orWhereHas('cashbookAccount', function ($newQuery) use ($term) {
                                $newQuery->where('account_number', 'LIKE', '%' . $term . '%')->where(
                                    'bank_name',
                                    'LIKE',
                                    '%' . $term . '%'
                                );
                            });
                    });
            });
        });

        return PurchasePaymentResource::collection($query->latest()->paginate($request->perPage));
    }

    // return non purchase transactions for supplier
    public function nonPurchaseTransForSupplier(Request $request, $slug)
    {
        $supplier = Supplier::where('slug', $slug)->first();
        $transactions = NonPurchasePayment::with('supplier', 'paymentTransaction.cashbookAccount')->where(
            'supplier_id',
            $supplier->id
        )->latest()->paginate($request->perPage);

        return NonPurchasePaymentListResource::collection($transactions);
    }

    // search non purchase transactions for supplier
    public function searchNonPurchaseTransForSupplier(Request $request, $slug)
    {
        $supplier = Supplier::where('slug', $slug)->first();

        $term = $request->term;
        $query = NonPurchasePayment::with('supplier', 'paymentTransaction.cashbookAccount');

        if ($request->startDate && $request->endDate) {
            $query = $query->whereBetween('date', [$request->startDate, $request->endDate]);
        }

        $query->where(function ($query) use ($supplier) {
            $query->where('supplier_id', $supplier->id);
        })->where(function ($query) use ($term) {
            $query->orWhere('amount', 'LIKE', '%' . $term . '%')
                ->orWhereHas('paymentTransaction', function ($newQuery) use ($term) {
                    $newQuery->where('amount', 'LIKE', '%' . $term . '%')
                        ->orWhereHas('cashbookAccount', function ($newQuery) use ($term) {
                            $newQuery->where('account_number', 'LIKE', '%' . $term . '%')->where(
                                'bank_name',
                                'LIKE',
                                '%' . $term . '%'
                            );
                        });
                });
        });

        return NonPurchasePaymentListResource::collection($query->latest()->paginate($request->perPage));
    }


    // csv import
    public function import(Request $request)
    {
        $request->validate([
            'file' => ['required', 'mimes:csv', 'file'],
        ]);

        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $data = SimpleExcelReader::create($file, 'csv')->getRows();

            $rules = [
                'name' => 'required|string|max:255',
                'phone_number' => 'required|string|max:20|min:3',
                'email' => 'nullable|email|max:255|min:3|unique:suppliers,email',
                'company_name' => 'nullable|string|max:100|min:2',
            ];

            foreach ($data as $key => $item) {
                $validator = Validator::make($item, $rules);
                if ($validator->passes()) {
                    Supplier::create(
                        $this->incrementSupplierId() +
                            $validator->validated()
                    );
                } else {
                    return response()->json([
                        'message' => $validator->errors()->first(),
                        'row_number' => $key + 1
                    ], 422);
                }
                // if($key == 100) break;
            }
            return response()->json([
                'message' => 'Supplier imported successfully'
            ]);
        }
    }

    #[ArrayShape(['supplier_id' => "int"])] public function incrementSupplierId(): array
    {
        $supplier_id = 1;
        $lastClient = Supplier::latest('id')->first();
        if ($lastClient) {
            $supplier_id = (int) $lastClient->supplier_id + 1;
        }
        return [
            'supplier_id' => $supplier_id
        ];
    }

    public function specificSupplierLedger($slug)
    {
        $supplier = Supplier::where('slug', $slug)->first();

        $data = DB::select("SELECT DATE
	,particulars
	,slug
	,action_type
	,debit
	,discount
	,credit
	,original_date
FROM (
	SELECT created_at DATE
		,CONCAT (
			'Purchase [APP-'
			,`purchase_no`
			,']'
			) particulars
		,`slug`
		,'purchase' AS action_type
		,IFNULL(sub_total, 0) + IFNULL(transport, 0) - IFNULL(discount, 0) + IFNULL((SELECT ((vi.rate / 100) * (ii.sub_total - IFNULL((SELECT sum(ci.total_return) FROM purchase_returns ci WHERE ii.id = ci.purchase_id),0) )) FROM vat_rates vi WHERE vi.id = ii.tax_id), 0)  debit
		,`discount`
		,0 credit
		,purchase_date AS original_date
		,supplier_id
	FROM `purchases` ii


	UNION ALL


	SELECT ci.created_at DATE
		,CONCAT (
			'Purchase payment [APP-'
			,`purchase_id`
			,']'
			) particulars
		,ci.slug
		,'purchase-payment' AS action_type
		,0 debit
		,ci.discount
		,IFNULL(ci.amount, 0) credit
		,ci.DATE AS original_date
		,ii.supplier_id
	FROM `purchases` ii
		,purchase_payments ci
	WHERE ii.id = ci.purchase_id

	UNION ALL

	SELECT ci.created_at DATE
		,CONCAT (
			'Purchase Return [APP-'
			,`purchase_id`
			,']'
			) particulars
		,ci.slug
		,'purchase-return' AS action_type
		,0 debit
		,0 discount
		,IFNULL(ci.total_return, 0) credit
		,ci.DATE AS original_date
		,ii.supplier_id
	FROM `purchases` ii
		,purchase_returns ci
	WHERE ii.id = ci.purchase_id
	) v
WHERE v.supplier_id = " . $supplier->id . "
ORDER BY `date`");

        // if credit plus, debit minus balance, always discount minus
        $totalDiscount = $totalDebit = $totalCredit = $finalBalance = 0;
        $balance = 0;
        foreach ($data as &$ledger) {
            if ($ledger->credit == 0) {
                $ledger->balance = $balance + $ledger->debit;
                $balance = $ledger->balance;
            } else {
                $balance =  $ledger->balance = $balance - $ledger->credit - $ledger->discount;
                if($ledger->particulars == 'Invoice payment [ATI- (Using Balance)]')
                {
                    $balance =  $balance + $ledger->credit;
                }
            }
            $totalDiscount  += $ledger->discount;
            $totalDebit  += $ledger->debit;
            $totalCredit  += $ledger->credit;
        }

        $finalBalance = $totalDebit - $totalCredit;
        return [
            'items' => $data,
            'totalDiscount' => $totalDiscount,
            'totalDebit' => $totalDebit,
            'totalCredit' => $totalCredit,
            'finalBalance' => $totalDebit - $totalCredit,
        ];

    }

    /**
     * Get chart of accounts for supplier selection.
     */
    public function getChartOfAccounts()
    {
        try {
            // Get all active chart of accounts with eager loading of type relationship
            $accounts = \App\Models\ChartOfAccount::with('type')
                ->where('is_active', true)
                ->orderBy('name')
                ->get();
            
            $chartOfAccounts = collect();
            
            foreach ($accounts as $account) {
                try {
                    // Skip if account is null or missing essential data
                    if (!$account || !$account->id || !$account->name) {
                        continue;
                    }
                    
                    // Get type name safely - check if type relationship exists and is not null
                    $typeName = 'No Type';
                    if ($account->type_id && $account->type && $account->type->name) {
                        $typeName = $account->type->name;
                    }
                    
                    $chartOfAccounts->push([
                        'id' => (int) $account->id,
                        'name' => (string) ($account->name ?? 'Unknown'),
                        'code' => (string) ($account->code ?? ''),
                        'type' => $typeName
                    ]);
                    
                } catch (\Exception $accountError) {
                    // Log the error for debugging but continue processing other accounts
                    Log::warning('getChartOfAccounts: Error processing account ' . ($account->id ?? 'unknown'), [
                        'error' => $accountError->getMessage(),
                        'account_id' => $account->id ?? 'unknown'
                    ]);
                    continue;
                }
            }
            
            return response()->json($chartOfAccounts->values()->toArray());
            
        } catch (\Exception $e) {
            Log::error('getChartOfAccounts error: ' . $e->getMessage(), [
                'file' => $e->getFile(),
                'line' => $e->getLine(),
                'trace' => $e->getTraceAsString()
            ]);
            
            return response()->json([
                'message' => 'Failed to retrieve chart of accounts.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get chart of accounts for supplier selection based on routing setup.
     */
    public function getChartOfAccountsWithRouting(Request $request)
    {
        try {
            $search = $request->get('search', '');
            
            // Get the suppliers account routing setting
            $routingSetting = \App\Models\AccountRoutingSetting::where('setting_key', 'suppliers_account')
                ->where('is_active', true)
                ->first();
            
            if (!$routingSetting || !$routingSetting->main_account_id) {
                // Fallback to all active accounts if routing is not configured
                $query = \App\Models\ChartOfAccount::where('is_active', true);
                
                if ($search) {
                    $query->where(function($q) use ($search) {
                        $q->where('name', 'like', "%{$search}%")
                          ->orWhere('code', 'like', "%{$search}%");
                    });
                }
                
                $accounts = $query->orderBy('name')->get();
                return $this->formatChartOfAccounts($accounts, 'Fallback to all accounts');
            }
            
            // Get accounts from the routing setup (parent + children)
            $accounts = $routingSetting->getAllAccounts();
            
            // Apply search filter if provided
            if ($search) {
                $accounts = $accounts->filter(function($account) use ($search) {
                    return stripos($account->name ?? '', $search) !== false || 
                           stripos($account->code ?? '', $search) !== false;
                });
            }
            
            return $this->formatChartOfAccounts($accounts, 'From routing setup');
            
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to retrieve chart of accounts.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get supplier routing settings
     */
    public function getSupplierRoutingSettings()
    {
        try {
            $routingSetting = \App\Models\AccountRoutingSetting::where('setting_key', 'suppliers_account')
                ->where('is_active', true)
                ->first();
            
            if (!$routingSetting) {
                return response()->json([
                    'success' => false,
                    'message' => 'Supplier account routing is not configured'
                ], 404);
            }
            
            $routingSetting->routing_type_display = $this->getRoutingTypeDisplay($routingSetting->routing_type);
            $routingSetting->description = $this->getRoutingTypeDescription($routingSetting->routing_type);
            
            return response()->json([
                'success' => true,
                'data' => $routingSetting
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to retrieve supplier routing settings',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get routing type display name
     */
    private function getRoutingTypeDisplay($routingType)
    {
        $displays = [
            'automatic' => 'Automatic',
            'per_each' => 'Per Each',
            'main_account_per_each' => 'Main Account Per Each',
            'cancel' => 'Cancel'
        ];
        return $displays[$routingType] ?? $routingType;
    }

    /**
     * Get routing type description
     */
    private function getRoutingTypeDescription($routingType)
    {
        $descriptions = [
            'automatic' => 'Chart of account will be automatically assigned based on your accounting configuration.',
            'per_each' => 'Each supplier will have their own chart of account without any parent.',
            'main_account_per_each' => 'Each supplier will have their own chart of account under the main supplier account.',
            'cancel' => 'No chart of account will be assigned to suppliers.'
        ];
        return $descriptions[$routingType] ?? '';
    }

    /**
     * Format chart of accounts for response
     */
    private function formatChartOfAccounts($accounts, $source = 'Unknown')
    {
        $chartOfAccounts = collect();
        $processedCount = 0;
        $skippedCount = 0;
        
        foreach ($accounts as $account) {
            try {
                // Skip if account is null or missing essential data
                if (!$account || !$account->id || !$account->name) {
                    continue;
                }
                
                // Get type name safely
                $typeName = 'No Type';
                try {
                    if ($account->type_id) {
                        $type = $account->type;
                        if ($type && $type->name) {
                            $typeName = $type->name;
                        }
                    }
                } catch (\Exception $typeError) {
                    continue;
                }
                
                $chartOfAccounts->push([
                    'id' => (int) $account->id,
                    'name' => (string) ($account->name ?? 'Unknown'),
                    'code' => (string) ($account->code ?? ''),
                    'type' => $typeName
                ]);
                
                $processedCount++;
                
            } catch (\Exception $accountError) {
                $skippedCount++;
                continue;
            }
        }
        
        return response()->json($chartOfAccounts->values()->toArray());
    }

    /**
     * Auto-assign Chart of Account to supplier
     */
    public function autoAssignChartOfAccount($slug)
    {
        try {
            $supplier = Supplier::where('slug', $slug)->first();
            
            if (!$supplier) {
                return response()->json([
                    'success' => false,
                    'message' => 'Supplier not found'
                ], 404);
            }

            // Auto-assign Chart of Account
            $supplierData = [
                'type' => $supplier->type ?? 'Company'
            ];
            $supplierData = Supplier::assignDefaultChartOfAccount($supplierData);
            
            if (isset($supplierData['chart_of_account_id'])) {
                $supplier->update(['chart_of_account_id' => $supplierData['chart_of_account_id']]);
                
                return response()->json([
                    'success' => true,
                    'message' => 'Chart of Account assigned successfully',
                    'chart_of_account_id' => $supplierData['chart_of_account_id']
                ]);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'No suitable Chart of Account found for automatic assignment'
                ], 400);
            }
            
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to assign Chart of Account: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get the next available code number for a new supplier
     */
    public function getNextCodeNumber()
    {
        try {
            // Get the last supplier to determine the next code number
            $lastSupplier = Supplier::latest()->first();
            
            if ($lastSupplier) {
                $nextCode = $lastSupplier->supplier_id + 1;
            } else {
                $nextCode = 1;
            }
            
            // Format the code number with leading zeros (6 digits)
            $formattedCode = str_pad($nextCode, 6, '0', STR_PAD_LEFT);
            
            return response()->json([
                'success' => true,
                'next_code' => $nextCode,
                'formatted_code' => $formattedCode,
                'message' => 'Next code number retrieved successfully'
            ]);
            
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to retrieve next code number: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Auto-assign chart of account based on routing configuration
     */
    private function autoAssignChartOfAccountForSupplier($supplierData)
    {
        try {
            // Get the suppliers account routing setting
            $routingSetting = \App\Models\AccountRoutingSetting::where('setting_key', 'suppliers_account')
                ->where('is_active', true)
                ->first();
            
            if (!$routingSetting) {
                // If no routing setting, use default behavior from Supplier model
                return Supplier::assignDefaultChartOfAccount($supplierData);
            }
            
            \Illuminate\Support\Facades\Log::info("Processing supplier chart of account with routing type: " . $routingSetting->routing_type, [
                'routing_setting' => $routingSetting->toArray(),
                'supplier_data' => $supplierData
            ]);
            
            switch ($routingSetting->routing_type) {
                case 'automatic':
                    // For automatic routing, always create/assign account if none provided
                    if (empty($supplierData['chart_of_account_id']) && $routingSetting->main_account_id) {
                        $newAccount = $this->createChartOfAccountForSupplier($supplierData, $routingSetting);
                        $supplierData['chart_of_account_id'] = $newAccount->id;
                        
                        \Illuminate\Support\Facades\Log::info("Auto-created chart of account {$newAccount->id} for supplier with automatic routing", [
                            'supplier_data' => $supplierData,
                            'routing_setting' => $routingSetting->toArray()
                        ]);
                    }
                    break;
                    
                case 'per_each':
                    // For per each routing, validate that account is provided
                    if (empty($supplierData['chart_of_account_id'])) {
                        // If no account provided, create one under the main account if available
                        if ($routingSetting->main_account_id) {
                            $newAccount = $this->createChartOfAccountForSupplier($supplierData, $routingSetting);
                            $supplierData['chart_of_account_id'] = $newAccount->id;
                            
                            \Illuminate\Support\Facades\Log::info("Created chart of account {$newAccount->id} for supplier with per_each routing", [
                                'supplier_data' => $supplierData,
                                'routing_setting' => $routingSetting->toArray()
                            ]);
                        }
                    }
                    break;
                    
                case 'main_account_per_each':
                    // For main account per each, validate that account is provided
                    if (empty($supplierData['chart_of_account_id'])) {
                        // If no account provided, create one under the main account if available
                        if ($routingSetting->main_account_id) {
                            $newAccount = $this->createChartOfAccountForSupplier($supplierData, $routingSetting);
                            $supplierData['chart_of_account_id'] = $newAccount->id;
                            
                            \Illuminate\Support\Facades\Log::info("Created chart of account {$newAccount->id} for supplier with main_account_per_each routing", [
                                'supplier_data' => $supplierData,
                                'routing_setting' => $routingSetting->toArray()
                            ]);
                        }
                    }
                    break;
                    
                case 'cancel':
                    // For cancel routing, no chart of account needed
                    $supplierData['chart_of_account_id'] = null;
                    \Illuminate\Support\Facades\Log::info("No chart of account assigned for supplier with cancel routing", [
                        'supplier_data' => $supplierData,
                        'routing_setting' => $routingSetting->toArray()
                    ]);
                    break;
                    
                default:
                    // Unknown routing type, use default behavior
                    \Illuminate\Support\Facades\Log::warning("Unknown routing type: " . $routingSetting->routing_type, [
                        'routing_setting' => $routingSetting->toArray()
                    ]);
                    break;
            }
            
            return $supplierData;
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error("Error auto-assigning chart of account: " . $e->getMessage(), [
                'supplier_data' => $supplierData,
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            return $supplierData;
        }
    }
    
    /**
     * Create chart of account for supplier
     */
    private function createChartOfAccountForSupplier($supplierData, $routingSetting)
    {
        try {
            $newAccount = \App\Models\ChartOfAccount::create([
                'name' => $this->getSupplierDisplayName($supplierData),
                'code' => $this->generateSupplierAccountCode($routingSetting->main_account_id),
                'type_id' => $this->getLiabilityAccountTypeId(),
                'parent_id' => $routingSetting->main_account_id,
                'is_active' => true,
                'created_by' => Auth::id(),
            ]);
            
            \Illuminate\Support\Facades\Log::info("Created new chart of account for supplier", [
                'account_id' => $newAccount->id,
                'account_name' => $newAccount->name,
                'account_code' => $newAccount->code,
                'parent_account_id' => $routingSetting->main_account_id
            ]);
            
            return $newAccount;
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error("Error creating chart of account for supplier: " . $e->getMessage());
            throw $e;
        }
    }
    
    /**
     * Get supplier display name for account creation
     */
    private function getSupplierDisplayName($supplierData)
    {
        if (isset($supplierData['type']) && $supplierData['type'] === 'Individual') {
            return $supplierData['full_name'] ?? $supplierData['name'] ?? 'Individual Supplier';
        } else {
            return $supplierData['business_name'] ?? $supplierData['company_name'] ?? 'Business Supplier';
        }
    }
    
    /**
     * Generate unique account code for supplier
     */
    private function generateSupplierAccountCode($mainAccountId)
    {
        try {
            $mainAccount = \App\Models\ChartOfAccount::find($mainAccountId);
            if (!$mainAccount) {
                throw new \Exception("Main account not found");
            }
            
            $baseCode = $mainAccount->code;
            $existingCodes = \App\Models\ChartOfAccount::where('code', 'like', $baseCode . '-%')
                ->pluck('code')
                ->toArray();
            
            $counter = 1;
            $newCode = $baseCode . '-' . str_pad($counter, 3, '0', STR_PAD_LEFT);
            
            while (in_array($newCode, $existingCodes)) {
                $counter++;
                $newCode = $baseCode . '-' . str_pad($counter, 3, '0', STR_PAD_LEFT);
            }
            
            return $newCode;
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error("Error generating supplier account code: " . $e->getMessage());
            // Fallback code
            $timestamp = time() % 1000000;
            return 'SUP-' . $timestamp;
        }
    }
    
    /**
     * Get Liability account type ID
     */
    private function getLiabilityAccountTypeId()
    {
        try {
            $liabilityType = \App\Models\ChartOfAccountType::where('name', 'Liability')->first();
            return $liabilityType ? $liabilityType->id : 2; // Default to second type if Liability not found
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error("Error getting liability account type ID: " . $e->getMessage());
            return 2; // Default fallback
        }
    }
}