<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\Supplier\StoreSupplierRequest;
use App\Http\Requests\Supplier\UpdateSupplierRequest;
use App\Http\Resources\NonPurchasePaymentListResource;
use App\Http\Resources\PurchaseListResource;
use App\Http\Resources\PurchasePaymentResource;
use App\Http\Resources\PurchaseResource;
use App\Http\Resources\PurchaseReturnListResource;
use App\Http\Resources\SupplierForPurchasePaymentResource;
use App\Http\Resources\SupplierListResource;
use App\Http\Resources\SupplierResource;
use App\Http\Resources\SupplierWithNonPurchasePaymentResource;
use App\Models\NonPurchasePayment;
use App\Models\Purchase;
use App\Models\PurchasePayment;
use App\Models\PurchaseReturn;
use App\Models\Supplier;
use App\Notifications\WelcomeNotification;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Facades\Image;
use Spatie\SimpleExcel\SimpleExcelReader;

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

        // Apply branch filter for non-superadmin users
        $user = Auth::user();
        // if ((int) $user->account_role !== 1) {
        $branchIds = $this->getUserBranchIds($user);
        $query->whereIn('branch_id', $branchIds);
        // }

        // Filter by type if provided
        if ($request->has('type') && $request->type !== '') {
            $query->where('type', $request->type);
        }

        return SupplierListResource::collection($query->latest()->paginate($request->perPage));
    }

    private function getUserBranchIds($user)
    {
        $defaultBranchId = (int) ($user->default_branch_id ?? 0);

        return [$defaultBranchId > 0 ? $defaultBranchId : 0];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSupplierRequest $request)
    {
        try {
            // Debug: Log request data before validation - check all possible ways to get taxStatus
            Log::info('SupplierController store - Request data:', [
                'taxStatus' => $request->taxStatus,
                'tax_status' => $request->tax_status,
                'taxStatus_input' => $request->input('taxStatus'),
                'tax_status_input' => $request->input('tax_status'),
                'taxStatus_get' => $request->get('taxStatus'),
                'tax_status_get' => $request->get('tax_status'),
                'all_input' => $request->all(),
                'all_request' => $request->request->all(),
                'request_method' => $request->method(),
                'content_type' => $request->header('Content-Type'),
                'has_taxStatus' => $request->has('taxStatus'),
                'has_tax_status' => $request->has('tax_status'),
            ]);

            // get logged in user
            $user = Auth::user();
            $branchId = (int) ($user->default_branch_id ?? 0);

            // generate code
            $code = 1;
            $prevSupplier = Supplier::latest()->first();
            if ($prevSupplier) {
                $code = ++$prevSupplier->supplier_id;
            }

            // upload thumbnail and set the name
            $imageName = '';
            if ($request->image && ! empty($request->image)) {
                try {
                    // Check if it's a base64 data URI
                    if (strpos($request->image, 'data:image/') === 0) {
                        // Extract the file extension from the data URI
                        $extension = 'jpg'; // default
                        if (strpos($request->image, ';') !== false) {
                            $mimeType = substr($request->image, 5, strpos($request->image, ';') - 5);
                            $extensionMap = [
                                'image/jpeg' => 'jpg',
                                'image/jpg' => 'jpg',
                                'image/png' => 'png',
                                'image/gif' => 'gif',
                                'image/webp' => 'webp',
                            ];
                            $extension = $extensionMap[$mimeType] ?? 'jpg';
                        }

                        $imageName = time().'.'.$extension;
                        Image::make($request->image)->save(public_path('images/suppliers/').$imageName);
                    }
                } catch (Exception $imageException) {
                    // Log the error but don't fail the entire operation
                    Log::error('Image processing failed during creation: '.$imageException->getMessage());
                    $imageName = ''; // No image on error
                }
            }

            // Prepare supplier data
            // Set name based on type: Individual uses name/fullName, Company uses companyName/businessName
            $name = $request->name;
            if (empty($name)) {
                if ($request->type === 'Individual') {
                    $name = $request->fullName ?? $request->name;
                } else {
                    $name = $request->companyName ?? $request->businessName ?? $request->name;
                }
            }

            $supplierData = [
                'name' => $name,
                'supplier_id' => $code,
                'email' => $request->email,
                'company_name' => $request->companyName,
                'tax_registration_number' => $request->taxRegistrationNumber,
                'status' => $request->status,
                'image_path' => $imageName,
                'type' => $request->type,
                'tax_status' => $request->taxStatus ?? $request->tax_status ?? 'non_taxable',
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
                // Saudi National Address fields
                'building_number' => $request->buildingNumber,
                'street_number' => $request->streetNumber,
                'district_number' => $request->districtNumber,
                'unit_number' => $request->unitNumber,
                'additional_number' => $request->additionalNumber,
                'commercial_register' => $request->commercialRegister,
                'tax_card' => $request->taxCard,
                'attachments' => $request->attachments ? json_encode($request->attachments) : null,
                'is_send_email' => $request->isSendEmail,
                'is_send_sms' => $request->isSendSMS,
                'branch_id' => $branchId,
            ];

            // Auto-assign Chart of Account if not provided (only for new suppliers)
            $supplierData = $this->autoAssignChartOfAccountForSupplier($supplierData);

            // create supplier
            $userSchema = Supplier::create($supplierData);

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($userSchema)
                ->withProperties([
                    'name' => '',
                    'code' => '['.$request->name.']',
                    'event' => 'Create',
                    'slug' => $userSchema->slug,
                    'routeName' => 'suppliers.show',
                ])
                ->useLog('Supplier Created')
                ->log('Supplier Created');

            // Handle representatives if provided
            if ($request->has('representatives') && is_array($request->representatives)) {
                foreach ($request->representatives as $repData) {
                    if (! empty($repData['name'])) {
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

            // send welcome notification
            try {
                if ($request->isSendEmail || $request->isSendSMS) {
                    Notification::send($userSchema, new WelcomeNotification($userSchema, [
                        'isSendEmail' => $request->isSendEmail,
                        'isSendSMS' => $request->isSendSMS,
                    ]));
                }
            } catch (Exception $e) {
                // handle email error here if necessary
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

            if (! $supplier) {
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSupplierRequest $request, $slug)
    {
        $supplier = Supplier::where('slug', $slug)->first();

        if (! $supplier) {
            return $this->responseWithError('Supplier not found', 404);
        }
        try {
            // upload thumbnail and set the name
            $imageName = $supplier->image_path;
            if ($request->image && ! empty($request->image)) {
                try {
                    // Check if it's a base64 data URI
                    if (strpos($request->image, 'data:image/') === 0) {
                        if ($imageName) {
                            @unlink(public_path('images/suppliers/'.$imageName));
                        }

                        // Extract the file extension from the data URI
                        $extension = 'jpg'; // default
                        if (strpos($request->image, ';') !== false) {
                            $mimeType = substr($request->image, 5, strpos($request->image, ';') - 5);
                            $extensionMap = [
                                'image/jpeg' => 'jpg',
                                'image/jpg' => 'jpg',
                                'image/png' => 'png',
                                'image/gif' => 'gif',
                                'image/webp' => 'webp',
                            ];
                            $extension = $extensionMap[$mimeType] ?? 'jpg';
                        }

                        $imageName = time().'.'.$extension;
                        Image::make($request->image)->save(public_path('images/suppliers/').$imageName);
                    }
                    // If it's not a data URI, keep the existing image
                } catch (Exception $imageException) {
                    // Log the error but don't fail the entire operation
                    Log::error('Image processing failed: '.$imageException->getMessage());
                    // Keep the existing image name
                }
            }
            // Prepare update data
            // Set name based on type: Individual uses name/fullName, Company uses companyName/businessName
            $name = $request->name;
            if (empty($name)) {
                if ($request->type === 'Individual') {
                    $name = $request->fullName ?? $request->name;
                } else {
                    $name = $request->companyName ?? $request->businessName ?? $request->name;
                }
            }

            $updateData = [
                'name' => $name,
                'email' => $request->email,
                'company_name' => $request->companyName,
                'tax_registration_number' => $request->taxRegistrationNumber,
                'type' => $request->type,
                'tax_status' => $request->taxStatus ?? $request->tax_status ?? $supplier->tax_status ?? 'non_taxable',
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
                // Saudi National Address fields
                'building_number' => $request->buildingNumber,
                'street_number' => $request->streetNumber,
                'district_number' => $request->districtNumber,
                'unit_number' => $request->unitNumber,
                'additional_number' => $request->additionalNumber,
                'commercial_register' => $request->commercialRegister,
                'tax_card' => $request->taxCard,
                'attachments' => $request->attachments ? json_encode($request->attachments) : null,
                'is_send_email' => $request->isSendEmail,
                'is_send_sms' => $request->isSendSMS,
            ];

            // Auto-assign Chart of Account if not provided (only if supplier doesn't already have one)
            $updateData = $this->autoAssignChartOfAccountForSupplier($updateData, $supplier);

            // update supplier
            $supplier->update($updateData);

            // Handle representatives if provided
            if ($request->has('representatives') && is_array($request->representatives)) {
                // Clear existing representatives
                $supplier->representatives()->delete();

                // Add new representatives
                foreach ($request->representatives as $repData) {
                    if (! empty($repData['name'])) {
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
                    'name' => '',
                    'code' => '['.$request->name.']',
                    'event' => 'Update',
                    'slug' => $supplier->slug,
                    'routeName' => 'suppliers.show',
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
            // delete image from storage
            if ($supplier->image_path) {
                @unlink(public_path('images/suppliers/'.$supplier->image_path));
            }

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($supplier)
                ->withProperties([
                    'name' => '',
                    'code' => '['.$supplier->name.']',
                    'event' => 'Delete',
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
        $query = Supplier::with('purchases.purchaseReturn');

        // Apply branch filter for non-superadmin users
        $user = Auth::user();
        if ((int) $user->account_role !== 1) {
            $branchIds = $this->getUserBranchIds($user);
            $query->whereIn('branch_id', $branchIds);
        }

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
            $query->where('name', 'Like', '%'.$term.'%')
                ->orWhere('email', 'Like', '%'.$term.'%')
                ->orWhere('phone_number', 'Like', '%'.$term.'%')
                ->orWhere('phone_legacy', 'Like', '%'.$term.'%')
                ->orWhere('company_name', 'Like', '%'.$term.'%');
        });

        return SupplierResource::collection(
            $query->latest()->paginate($request->perPage)
        );
    }

    // return all suppliers
    public function allSuppliers()
    {
        $user = Auth::user();
        $branchIds = $this->getUserBranchIds($user);

        $suppliers = Supplier::with('chartOfAccount')
            ->where('status', 1)
            ->whereIn('branch_id', $branchIds)
            ->latest()
            ->get();

        return SupplierListResource::collection($suppliers);
    }

    // return all suppliers
    public function suppliersForNonPurchasePayments()
    {
        $user = Auth::user();
        $branchIds = $this->getUserBranchIds($user);

        $suppliers = Supplier::with('chartOfAccount')
            ->where('status', 1)
            ->whereIn('branch_id', $branchIds)
            ->latest()
            ->get();

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

            if (! $supplier) {
                return $this->responseWithError('Supplier not found', 404);
            }

            return PurchaseListResource::collection(Purchase::with('purchaseTax', 'purchaseReturn')
                ->where('supplier_id', $supplier->id)
                ->where('status', 1) // Only active purchases
                ->get());
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

        if (! $supplier) {
            return $this->responseWithError('Supplier not found', 404);
        }

        $products = [];
        $purchases = Purchase::with(
            'purchaseProducts.product.proSubCategory.category',
            'purchaseProducts.product.productUnit',
            'purchaseTax',
            'purchaseReturn'
        );
        if (isset($request->products) && count($request->products) > 0) {
            // build the product array
            foreach ($request->products as $key => $product) {
                array_push($products, $product['id']);
            }
            // get the purchases - allow purchases with partial returns
            $purchases = $purchases->where(
                'supplier_id',
                $supplier->id
            )->whereHas(
                'purchaseProducts',
                function ($secondQuery) use ($products) {
                    $secondQuery->whereIn('product_id', $products);
                }
            )->get();
        } else {
            // get the purchases - allow purchases with partial returns
            $purchases = $purchases->where('supplier_id', $supplier->id)->get();
        }

        return PurchaseResource::collection($purchases);
    }

    // return client specific invoices
    public function specificSupplierPurchases($slug)
    {
        $supplier = Supplier::with('chartOfAccount')->where('slug', $slug)->first();

        if (! $supplier) {
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

        $query = Purchase::with('supplier', 'purchasePayments', 'purchaseTax', 'purchaseReturn');

        if ($request->startDate && $request->endDate) {
            $query = $query->whereBetween('purchase_date', [$request->startDate, $request->endDate]);
        }

        $query->where(function ($query) use ($supplier) {
            $query->where('supplier_id', $supplier->id);
        })->where(function ($query) use ($term) {
            $query->orWhere('purchase_no', 'like', '%'.$term.'%')
                ->orWhere('sub_total', 'like', '%'.$term.'%')
                ->orWhere('transport', 'like', '%'.$term.'%')
                ->orWhere('discount', 'like', '%'.$term.'%')
                ->orWhere('po_reference', 'like', '%'.$term.'%')
                ->orWhere('payment_terms', 'like', '%'.$term.'%');
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
                $query->where('slug', 'LIKE', '%'.$term.'%')
                    ->orWhere('code', 'LIKE', '%'.$term.'%')
                    ->orWhere('reason', 'LIKE', '%'.$term.'%')
                    ->orWhere('total_return', 'LIKE', '%'.$term.'%')
                    ->orWhereHas('purchase', function ($newQuery) use ($term) {
                        $newQuery->where('purchase_no', 'LIKE', '%'.$term.'%')
                            ->orWhere('po_reference', 'LIKE', '%'.$term.'%')
                            ->orWhereHas('supplier', function ($anotherQuery) use ($term) {
                                $anotherQuery->where('name', 'LIKE', '%'.$term.'%')
                                    ->orWhere('phone_number', 'LIKE', '%'.$term.'%')
                                    ->orWhere('phone_legacy', 'LIKE', '%'.$term.'%');
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
                $query->orWhere('amount', 'LIKE', '%'.$term.'%')
                    ->orWhereHas('purchase', function ($newQuery) use ($term) {
                        $newQuery->where('purchase_no', 'LIKE', '%'.$term.'%')
                            ->orWhere('sub_total', 'LIKE', '%'.$term.'%')
                            ->orWhere('po_reference', 'LIKE', '%'.$term.'%');
                    })
                    ->orWhereHas('purchasePaymentTransaction', function ($newQuery) use ($term) {
                        $newQuery->where('amount', 'LIKE', '%'.$term.'%')
                            ->orWhereHas('cashbookAccount', function ($newQuery) use ($term) {
                                $newQuery->where('account_number', 'LIKE', '%'.$term.'%')->where(
                                    'bank_name',
                                    'LIKE',
                                    '%'.$term.'%'
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
            $query->orWhere('amount', 'LIKE', '%'.$term.'%')
                ->orWhereHas('paymentTransaction', function ($newQuery) use ($term) {
                    $newQuery->where('amount', 'LIKE', '%'.$term.'%')
                        ->orWhereHas('cashbookAccount', function ($newQuery) use ($term) {
                            $newQuery->where('account_number', 'LIKE', '%'.$term.'%')->where(
                                'bank_name',
                                'LIKE',
                                '%'.$term.'%'
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

        $user = Auth::user();
        $branchId = (int) ($user->default_branch_id ?? 0);

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
                    $validatedData = $validator->validated();
                    $validatedData['branch_id'] = $branchId;
                    Supplier::create(
                        $this->incrementSupplierId() + $validatedData
                    );
                } else {
                    return response()->json([
                        'message' => $validator->errors()->first(),
                        'row_number' => $key + 1,
                    ], 422);
                }
                // if($key == 100) break;
            }

            return response()->json([
                'message' => 'Supplier imported successfully',
            ]);
        }
    }

    public function incrementSupplierId(): array
    {
        $supplier_id = 1;
        $lastClient = Supplier::latest('id')->first();
        if ($lastClient) {
            $supplier_id = (int) $lastClient->supplier_id + 1;
        }

        return [
            'supplier_id' => $supplier_id,
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
WHERE v.supplier_id = ".$supplier->id.'
ORDER BY `date`');

        // if credit plus, debit minus balance, always discount minus
        $totalDiscount = $totalDebit = $totalCredit = $finalBalance = 0;
        $balance = 0;
        foreach ($data as &$ledger) {
            if ($ledger->credit == 0) {
                $ledger->balance = $balance + $ledger->debit;
                $balance = $ledger->balance;
            } else {
                $balance = $ledger->balance = $balance - $ledger->credit - $ledger->discount;
                if ($ledger->particulars == 'Invoice payment [ATI- (Using Balance)]') {
                    $balance = $balance + $ledger->credit;
                }
            }
            $totalDiscount += $ledger->discount;
            $totalDebit += $ledger->debit;
            $totalCredit += $ledger->credit;
        }

        $finalBalance = $totalDebit - $totalCredit;

        return response()->json([
            'items' => $data,
            'totalDiscount' => $totalDiscount,
            'totalDebit' => $totalDebit,
            'totalCredit' => $totalCredit,
            'finalBalance' => $totalDebit - $totalCredit,
        ]);

    }

    /**
     * Get chart of accounts for supplier selection.
     */
    public function getChartOfAccounts()
    {
        try {
            $branchId = Auth::user()->default_branch_id ?? null;

            // Get all active chart of accounts with eager loading of type relationship
            // Filter to only show accounts at level 4 and below
            $accounts = \App\Models\ChartOfAccount::with(['type', 'parent.parent.parent.parent'])
                ->where('is_active', true)
                ->forBranch($branchId)
                ->orderBy('name')
                ->get()
                ->filter(function ($account) {
                    return $account->getLevel() <= 4;
                });

            $chartOfAccounts = collect();

            foreach ($accounts as $account) {
                try {
                    // Skip if account is null or missing essential data
                    if (! $account || ! $account->id || ! $account->name) {
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
                        'type' => $typeName,
                    ]);

                } catch (\Exception $accountError) {
                    // Log the error for debugging but continue processing other accounts
                    Log::warning('getChartOfAccounts: Error processing account '.($account->id ?? 'unknown'), [
                        'error' => $accountError->getMessage(),
                        'account_id' => $account->id ?? 'unknown',
                    ]);

                    continue;
                }
            }

            return response()->json($chartOfAccounts->values()->toArray());

        } catch (\Exception $e) {
            Log::error('getChartOfAccounts error: '.$e->getMessage(), [
                'file' => $e->getFile(),
                'line' => $e->getLine(),
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'message' => 'Failed to retrieve chart of accounts.',
                'error' => $e->getMessage(),
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

            if (! $routingSetting || ! $routingSetting->main_account_id) {
                // Fallback to all active accounts if routing is not configured
                // Filter to only show accounts at level 4 and below
                $branchId = Auth::user()->default_branch_id ?? null;
                $query = \App\Models\ChartOfAccount::where('is_active', true)
                    ->forBranch($branchId)
                    ->with(['parent.parent.parent.parent']);

                if ($search) {
                    $query->where(function ($q) use ($search) {
                        $q->where('name', 'like', "%{$search}%")
                            ->orWhere('code', 'like', "%{$search}%");
                    });
                }

                $accounts = $query->orderBy('name')
                    ->get()
                    ->filter(function ($account) {
                        return $account->getLevel() <= 4;
                    });

                return $this->formatChartOfAccounts($accounts, 'Fallback to all accounts');
            }

            // Get accounts from the routing setup (parent + children)
            $accounts = $routingSetting->getAllAccounts();

            // Apply search filter if provided
            if ($search) {
                $accounts = $accounts->filter(function ($account) use ($search) {
                    return stripos($account->name ?? '', $search) !== false ||
                           stripos($account->code ?? '', $search) !== false;
                });
            }

            return $this->formatChartOfAccounts($accounts, 'From routing setup');

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to retrieve chart of accounts.',
                'error' => $e->getMessage(),
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

            if (! $routingSetting) {
                return response()->json([
                    'success' => false,
                    'message' => 'Supplier account routing is not configured',
                ], 404);
            }

            $routingSetting->routing_type_display = $this->getRoutingTypeDisplay($routingSetting->routing_type);
            $routingSetting->description = $this->getRoutingTypeDescription($routingSetting->routing_type);

            return response()->json([
                'success' => true,
                'data' => $routingSetting,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to retrieve supplier routing settings',
                'error' => $e->getMessage(),
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
            'cancel' => 'Cancel',
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
            'cancel' => 'No chart of account will be assigned to suppliers.',
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
                if (! $account || ! $account->id || ! $account->name) {
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
                    'type' => $typeName,
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

            if (! $supplier) {
                return response()->json([
                    'success' => false,
                    'message' => 'Supplier not found',
                ], 404);
            }

            // Routing-aware auto-assign for supplier
            $routingSetting = \App\Models\AccountRoutingSetting::where('setting_key', 'suppliers_account')
                ->where('is_active', true)
                ->first();

            if ($routingSetting) {
                // Main-account-per-each: create a child under main account
                if ($routingSetting->routing_type === 'main_account_per_each') {
                    if (! $routingSetting->main_account_id) {
                        return response()->json([
                            'success' => false,
                            'message' => 'Supplier routing is not properly configured: Main account is missing.',
                        ], 400);
                    }

                    $newAccount = $this->createChartOfAccountForSupplier([
                        'type' => $supplier->type ?? 'Company',
                        'full_name' => $supplier->full_name,
                        'name' => $supplier->name,
                        'business_name' => $supplier->business_name,
                        'company_name' => $supplier->company_name,
                    ], $routingSetting);

                    $supplier->update(['chart_of_account_id' => $newAccount->id]);

                    return response()->json([
                        'success' => true,
                        'message' => 'Chart of Account created and assigned successfully',
                        'chart_of_account_id' => $newAccount->id,
                    ]);
                }

                // Automatic: assign the main account directly
                if ($routingSetting->routing_type === 'automatic') {
                    if (! $routingSetting->main_account_id) {
                        return response()->json([
                            'success' => false,
                            'message' => 'Supplier routing is not properly configured: Main account is missing.',
                        ], 400);
                    }

                    $supplier->update(['chart_of_account_id' => $routingSetting->main_account_id]);

                    return response()->json([
                        'success' => true,
                        'message' => 'Main account assigned to supplier successfully',
                        'chart_of_account_id' => $routingSetting->main_account_id,
                    ]);
                }
            }

            // Fallback to legacy/default behavior if routing not configured or other types
            $supplierData = [
                'type' => $supplier->type ?? 'Company',
            ];
            $supplierData = Supplier::assignDefaultChartOfAccount($supplierData);

            if (isset($supplierData['chart_of_account_id'])) {
                $supplier->update(['chart_of_account_id' => $supplierData['chart_of_account_id']]);

                return response()->json([
                    'success' => true,
                    'message' => __('Chart of Account assigned successfully'),
                    'chart_of_account_id' => $supplierData['chart_of_account_id'],
                ]);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'No suitable Chart of Account found for automatic assignment',
                ], 400);
            }

        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to assign Chart of Account: '.$e->getMessage(),
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
                'message' => 'Next code number retrieved successfully',
            ]);

        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to retrieve next code number: '.$e->getMessage(),
            ], 500);
        }
    }

    /**
     * Auto-assign chart of account based on routing configuration
     * For routing_type 'main_account_per_each', creates a new child account under the parent
     * For routing_type 'automatic', uses the main account directly
     */
    private function autoAssignChartOfAccountForSupplier($supplierData, $existingSupplier = null)
    {
        try {
            // If supplier already has a chart of account, don't auto-assign a new one
            if ($existingSupplier && $existingSupplier->chart_of_account_id) {
                \Illuminate\Support\Facades\Log::info("Supplier already has chart of account {$existingSupplier->chart_of_account_id}, skipping auto-assignment", [
                    'supplier_id' => $existingSupplier->id,
                    'existing_chart_of_account_id' => $existingSupplier->chart_of_account_id,
                ]);

                return $supplierData;
            }

            // If chart_of_account_id is already provided in the data, don't auto-assign
            if (! empty($supplierData['chart_of_account_id'])) {
                \Illuminate\Support\Facades\Log::info('Chart of account already provided in data, skipping auto-assignment', [
                    'provided_chart_of_account_id' => $supplierData['chart_of_account_id'],
                ]);

                return $supplierData;
            }

            // Get the branch ID for the routing setting
            $branchId = $supplierData['branch_id'] ?? Auth::user()->default_branch_id ?? null;

            // Get the suppliers account routing setting for this branch
            $routingSetting = \App\Models\AccountRoutingSetting::where('setting_key', 'suppliers_account')
                ->where('branch_id', $branchId)
                ->where('is_active', true)
                ->first();

            // Fallback to any active routing setting if branch-specific not found
            if (! $routingSetting) {
                $routingSetting = \App\Models\AccountRoutingSetting::where('setting_key', 'suppliers_account')
                    ->where('is_active', true)
                    ->first();
            }

            if (! $routingSetting || ! $routingSetting->main_account_id) {
                // If no routing setting, use default behavior from Supplier model
                \Illuminate\Support\Facades\Log::info('No routing setting found for suppliers_account, using default behavior');

                return Supplier::assignDefaultChartOfAccount($supplierData);
            }

            // Check the routing type to determine how to assign the account
            $routingType = $routingSetting->routing_type ?? 'automatic';

            if ($routingType === 'main_account_per_each') {
                // Create a new child account under the parent account for this supplier
                $newAccount = $this->createChartOfAccountForSupplier($supplierData, $routingSetting);
                if ($newAccount) {
                    $supplierData['chart_of_account_id'] = $newAccount->id;
                    \Illuminate\Support\Facades\Log::info('Created new child account for supplier', [
                        'account_id' => $newAccount->id,
                        'account_code' => $newAccount->code,
                        'parent_account_id' => $routingSetting->main_account_id,
                    ]);
                }
            } else {
                // For 'automatic' routing type, use the main account directly
                $supplierData['chart_of_account_id'] = $routingSetting->main_account_id;
                \Illuminate\Support\Facades\Log::info('Using main account for supplier (automatic routing)', [
                    'main_account_id' => $routingSetting->main_account_id,
                ]);
            }

            return $supplierData;
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error('Error auto-assigning chart of account: '.$e->getMessage(), [
                'supplier_data' => $supplierData,
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
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
            // Use a database transaction with locking to ensure atomicity and prevent race conditions
            $newAccount = \Illuminate\Support\Facades\DB::transaction(function () use ($supplierData, $routingSetting) {
                // Generate code inside transaction with proper locking
                $code = $this->generateSupplierAccountCodeWithLock($routingSetting->main_account_id);

                return \App\Models\ChartOfAccount::create([
                    'name' => $this->getSupplierDisplayName($supplierData),
                    'code' => $code,
                    'type_id' => $this->getLiabilityAccountTypeId(),
                    'parent_id' => $routingSetting->main_account_id,
                    'is_active' => true,
                    'created_by' => Auth::id(),
                    'branch_id' => Auth::user()->default_branch_id,
                ]);
            });

            \Illuminate\Support\Facades\Log::info('Created new chart of account for supplier', [
                'account_id' => $newAccount->id,
                'account_name' => $newAccount->name,
                'account_code' => $newAccount->code,
                'parent_account_id' => $routingSetting->main_account_id,
            ]);

            return $newAccount;
        } catch (\Illuminate\Database\QueryException $e) {
            // Check if it's a duplicate entry error
            if ($e->getCode() == 23000 && strpos($e->getMessage(), 'Duplicate entry') !== false) {
                \Illuminate\Support\Facades\Log::error('Duplicate entry error creating chart of account for supplier', [
                    'supplier_data' => $supplierData,
                    'routing_setting' => $routingSetting->toArray(),
                    'error' => $e->getMessage(),
                ]);
                throw new \Exception('Failed to create chart of account: the generated code already exists. Please try again.');
            }
            // If it's not a duplicate error, re-throw
            \Illuminate\Support\Facades\Log::error('Error creating chart of account for supplier: '.$e->getMessage());
            throw $e;
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error('Error creating chart of account for supplier: '.$e->getMessage());
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
     * Generate unique account code for supplier (without locking - for backward compatibility)
     */
    private function generateSupplierAccountCode($mainAccountId)
    {
        return $this->generateSupplierAccountCodeWithLock($mainAccountId);
    }

    /**
     * Generate unique account code for supplier with database locking
     * This method should be called within a transaction to ensure proper locking
     */
    private function generateSupplierAccountCodeWithLock($mainAccountId)
    {
        try {
            $branchId = Auth::user()->default_branch_id ?? null;
            $mainAccount = \App\Models\ChartOfAccount::forBranch($branchId)->find($mainAccountId);
            if (! $mainAccount) {
                throw new \Exception('Main account not found');
            }

            $baseCode = $mainAccount->code;

            // Use a more efficient approach: find the maximum existing code number
            // Lock the rows to prevent concurrent access
            $existingCodes = \Illuminate\Support\Facades\DB::table('chart_of_accounts')
                ->where('code', 'like', $baseCode.'-%')
                ->lockForUpdate() // Lock rows to prevent race conditions
                ->pluck('code')
                ->toArray();

            // Extract the maximum number from existing codes
            $maxNumber = 0;
            $pattern = '/^'.preg_quote($baseCode, '/').'-(\d+)$/';
            foreach ($existingCodes as $existingCode) {
                if (preg_match($pattern, $existingCode, $matches)) {
                    $number = (int) $matches[1];
                    $maxNumber = max($maxNumber, $number);
                }
            }

            // Generate the next code
            $nextNumber = $maxNumber + 1;
            $newCode = $baseCode.'-'.str_pad($nextNumber, 3, '0', STR_PAD_LEFT);

            // Double-check the code doesn't exist (extra safety)
            $maxAttempts = 1000;
            $counter = 0;
            while (\App\Models\ChartOfAccount::where('code', $newCode)->exists()) {
                $counter++;
                if ($counter > $maxAttempts) {
                    \Illuminate\Support\Facades\Log::error('Max attempts reached while generating supplier account code', [
                        'base_code' => $baseCode,
                        'max_attempts' => $maxAttempts,
                    ]);
                    // Fallback to timestamp-based code
                    $timestamp = time() % 1000000;

                    return 'SUP-'.$timestamp;
                }
                $nextNumber++;
                $newCode = $baseCode.'-'.str_pad($nextNumber, 3, '0', STR_PAD_LEFT);
            }

            return $newCode;
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error('Error generating supplier account code: '.$e->getMessage());
            // Fallback code
            $timestamp = time() % 1000000;

            return 'SUP-'.$timestamp;
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
            \Illuminate\Support\Facades\Log::error('Error getting liability account type ID: '.$e->getMessage());

            return 2; // Default fallback
        }
    }
}
