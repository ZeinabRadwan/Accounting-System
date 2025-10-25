<?php

namespace App\Http\Controllers\API;

use Exception;
use App\Models\Client;
use App\Models\Invoice;
use Illuminate\Http\Request;
use App\Models\InvoiceReturn;
use App\Models\InvoicePayment;
use App\Models\NonInvoicePayment;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\ClientResource;
use App\Http\Resources\InvoiceResource;
use Illuminate\Support\Facades\Validator;
use Spatie\SimpleExcel\SimpleExcelReader;
use App\Http\Resources\ClientListResource;
use App\Notifications\WelcomeNotification;
use App\Http\Resources\InvoiceListResource;
use Illuminate\Support\Facades\Notification;
use App\Http\Resources\InvoicePaymentResource;
use Intervention\Image\Facades\Image as Image;
use App\Http\Requests\Client\StoreClientRequest;
use App\Http\Requests\Client\UpdateClientRequest;
use App\Http\Resources\InvoiceForPaymentResource;
use App\Http\Resources\InvoiceReturnListResource;
use App\Http\Resources\NonInvoicePaymentListResource;
use App\Http\Resources\ClientWithInvoicePaymentResource;
use App\Http\Resources\ClientWithNonInvoicePaymentResource;
use App\Models\ChartOfAccount;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;

class ClientController extends Controller
{
    // define middleware
    public function __construct()
    {
        $this->middleware('can:client-list', ['only' => ['index', 'search']]);
        $this->middleware('can:client-create', ['only' => ['create']]);
        $this->middleware('can:client-view', ['only' => ['show']]);
        $this->middleware('can:client-edit', ['only' => ['update']]);
        $this->middleware('can:client-delete', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Client::query();
        
        if ($request->type) {
            $query = $query->where('type', $request->type);
        }
        
        return ClientListResource::collection($query->orderBy('client_id', 'DESC')->paginate($request->perPage));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreClientRequest $request)
    {
        try {
            // generate code
            $code = $this->generateNextClientCode();

            // upload thumbnail and set the name
            $imageName = '';
            if ($request->image) {
                // SAFE IMAGE PROCESSING - Handle different image formats
                if (strpos($request->image, 'data:image/') === 0) {
                    // Base64 image data
                    $imageData = explode(',', $request->image);
                    if (count($imageData) > 1) {
                        $imageInfo = explode(';', $imageData[0]);
                        if (count($imageInfo) > 0) {
                            $mimeType = explode(':', $imageInfo[0]);
                            if (count($mimeType) > 1) {
                                $extension = explode('/', $mimeType[1]);
                                if (count($extension) > 1) {
                                    $fileExtension = $extension[1];
                                } else {
                                    $fileExtension = 'png'; // fallback
                                }
                            } else {
                                $fileExtension = 'png'; // fallback
                            }
                        } else {
                            $fileExtension = 'png'; // fallback
                        }
                    } else {
                        $fileExtension = 'png'; // fallback
                    }
                } else {
                    // Direct file upload or other format
                    $fileExtension = 'png'; // fallback
                }
                
                $imageName = time() . '.' . $fileExtension;
                Image::make($request->image)->save(public_path('images/clients/') . $imageName);
            }

            // Prepare client data
            $clientData = [
                // Legacy fields for backward compatibility
                'name' => $request->name ?? ($request->type === 'Individual' ? $request->fullName : $request->businessName),
                'client_id' => $code,
                'email' => $request->email,
                'phone' => $request->phone,
                'phone_number' => $request->phoneNumber,
                'company_name' => $request->companyName ?? $request->businessName,
                'tax_registration_number' => $request->taxRegistrationNumber ?? $request->taxCard,
                'address' => $request->address ?? $request->streetAddress1,
                'status' => $request->status,
                'image_path' => $imageName,
                'type' => $request->type ?? 'Company',
                'chart_of_account_id' => $request->chartOfAccountId ? (is_array($request->chartOfAccountId) ? $request->chartOfAccountId['id'] : $request->chartOfAccountId) : null,
                
                // New fields for enhanced client form
                'code_number' => $request->codeNumber,
                'notes' => $request->notes,
                'display_language' => $request->displayLanguage,
                
                // Enhanced client details based on type
                'full_name' => $request->type === 'Individual' ? $request->fullName : null,
                'business_name' => $request->type === 'Company' ? $request->businessName : null,
                'first_name' => $request->firstName,
                'last_name' => $request->lastName,
                'phone' => $request->phone,
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
                
                // Additional fields
                'is_send_email' => $request->isSendEmail,
                'is_send_sms' => $request->isSendSMS,
                
                // Handle attachments if provided
                'attachments' => $request->attachments ? json_encode($request->attachments) : null,
            ];

            // Auto-assign Chart of Account if not provided (only for new clients)
            $clientData = $this->autoAssignChartOfAccountForClient($clientData);

            // create client
            $userSchema = Client::create($clientData);

            //send welcome notification
            try {
                if ($request->isSendEmail || $request->isSendSMS) {
                    Notification::send($userSchema, new WelcomeNotification($userSchema, [
                        'isSendEmail' => $request->isSendEmail,
                        'isSendSMS' => $request->isSendSMS,
                    ]));
                }
            } catch (Exception $e) {
                //handle email error here if necessary
                throw new Exception($e);
            }

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

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($userSchema)
                ->withProperties([
                    'name' => "",
                    'code' => '[' . $request->name . ']',
                    'event' => 'Create',
                    'slug' => $userSchema->slug,
                    'routeName' => 'clients.show'
                ])
                ->useLog('Client Created')
                ->log('Client Created');

            return $this->responseWithSuccess('Client added successfully');
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
            $client = Client::where('slug', $slug)->first();
            
            if ($client) {
                $client->ensureChartOfAccountLoaded();
            }
            
            return new ClientResource($client);
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
    public function update(UpdateClientRequest $request, $slug)
    {
        try {
            // get client
            $client = Client::where('slug', $slug)->first();

            // upload thumbnail and set the name
            $imageName = $client->image_path;
            if ($request->image) {
                if ($imageName) {
                    @unlink(public_path('images/clients/' . $imageName));
                }
                
                // SAFE IMAGE PROCESSING - Handle different image formats
                if (strpos($request->image, 'data:image/') === 0) {
                    // Base64 image data
                    $imageData = explode(',', $request->image);
                    if (count($imageData) > 1) {
                        $imageInfo = explode(';', $imageData[0]);
                        if (count($imageInfo) > 0) {
                            $mimeType = explode(':', $imageInfo[0]);
                            if (count($mimeType) > 1) {
                                $extension = explode('/', $mimeType[1]);
                                if (count($extension) > 1) {
                                    $fileExtension = $extension[1];
                                } else {
                                    $fileExtension = 'png'; // fallback
                                }
                            } else {
                                $fileExtension = 'png'; // fallback
                            }
                        } else {
                            $fileExtension = 'png'; // fallback
                        }
                    } else {
                        $fileExtension = 'png'; // fallback
                    }
                } else {
                    // Direct file upload or other format
                    $fileExtension = 'png'; // fallback
                }
                
                $imageName = time() . '.' . $fileExtension;
                
            }

            // update client
            $updateData = [
                // Legacy fields for backward compatibility
                'name' => $request->name ?? ($request->type === 'Individual' ? $request->fullName : $request->businessName),
                'email' => $request->email,
                'phone' => $request->phone,
                'phone_number' => $request->phoneNumber,
                'company_name' => $request->companyName ?? $request->businessName,
                'tax_registration_number' => $request->taxRegistrationNumber ?? $request->taxCard,
                'address' => $request->address ?? $request->streetAddress1,
                'status' => $request->status,
                'image_path' => $imageName,
                'type' => $request->type ?? 'Company',
                'chart_of_account_id' => $request->chartOfAccountId ? (is_array($request->chartOfAccountId) ? $request->chartOfAccountId['id'] : $request->chartOfAccountId) : null,
                
                // New fields for enhanced client form
                'code_number' => $request->codeNumber,
                'notes' => $request->notes,
                'display_language' => $request->displayLanguage,
                
                // Enhanced client details based on type
                'full_name' => $request->type === 'Individual' ? $request->fullName : null,
                'business_name' => $request->type === 'Company' ? $request->businessName : null,
                'first_name' => $request->firstName,
                'last_name' => $request->lastName,
                'phone' => $request->phone,
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
                
                // Additional fields
                'is_send_email' => $request->isSendEmail,
                'is_send_sms' => $request->isSendSMS,
                
                // Handle attachments if provided
                'attachments' => $request->attachments ? json_encode($request->attachments) : null,
            ];

            // Auto-assign Chart of Account if not provided (only if client doesn't already have one)
            $updateData = $this->autoAssignChartOfAccountForClient($updateData, $client);

            $client->update($updateData);

            // Handle representatives if provided
            if ($request->has('representatives') && is_array($request->representatives)) {
                // Clear existing representatives
                $client->representatives()->delete();
                
                // Add new representatives
                foreach ($request->representatives as $repData) {
                    if (!empty($repData['name'])) {
                        // If this is a primary representative, unset others
                        if (isset($repData['is_primary']) && $repData['is_primary']) {
                            $client->representatives()->update(['is_primary' => false]);
                        }
                        
                        $client->representatives()->create([
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
            try {
                activity()
                    ->causedBy(Auth::user())
                    ->performedOn($client)
                    ->withProperties([
                        'name' => "",
                        'code' => '[' . $request->name . ']',
                        'event' => 'Update',
                        'slug' => $client->slug,
                        'routeName' => 'clients.show'
                    ])
                    ->useLog('Client Updated')
                    ->log('Client Updated');
                
            } catch (\Exception $activityError) {
                // Don't fail the update if activity logging fails
            }

            return $this->responseWithSuccess('Client updated successfully');
            
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
            $client = Client::where('slug', $slug)->first();

            $canDelete = true;
            if ($client->clientInvoices()->count() > 0 || $client->clientNonInvoiceDues()->count() > 0) {
                $canDelete = false;

                return $this->responseWithError('Sorry you can\'t delete this client!');
            }
            if ($canDelete) {
                //delete asset image
                if ($client->image_path) {
                    @unlink(public_path('images/clients/' . $client->image_path));
                }

                // add activity log
                activity()
                    ->causedBy(Auth::user())
                    ->performedOn($client)
                    ->withProperties([
                        'name' => "",
                        'code' => '[' . $client->name . ']',
                        'event' => 'Delete'
                    ])
                    ->useLog('Client Deleted')
                    ->log('Client Deleted');

                $client->delete();
            }

            return $this->responseWithSuccess('Asset deleted successfully');
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
        $query = Client::query();

        if ($request->startDate && $request->endDate) {
            $query = $query->whereBetween('created_at', [$request->startDate, $request->endDate]);
        }

        if ($request->type) {
            $query = $query->where('type', $request->type);
        }

        $query->where(function ($query) use ($term) {
            $query->where('name', 'Like', '%' . $term . '%')
                ->orWhere('client_id', 'Like', '%' . $term . '%')
                ->orWhere('email', 'Like', '%' . $term . '%')
                ->orWhere('phone', 'Like', '%' . $term . '%')
                ->orWhere('phone_number', 'Like', '%' . $term . '%')
                ->orWhere('phone_secondary', 'Like', '%' . $term . '%')
                ->orWhere('company_name', 'Like', '%' . $term . '%');
        });

        return ClientResource::collection($query->with('chartOfAccount')->latest()->paginate($request->perPage));
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function allClients()
    {
        $clients = Client::with('chartOfAccount')->where('status', 1)->latest()->get();

        return ClientListResource::collection($clients);
    }

    // return all clients for non invoice payments
    public function clientsForNonInvoicePayments()
    {
        $clients = Client::where('status', 1)->latest()->get();

        return ClientWithNonInvoicePaymentResource::collection($clients);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function clientInvoices($slug)
    {
        try {
            $client = Client::where('slug', $slug)->with('clientInvoices')->first();

            return InvoiceResource::collection($client->clientInvoices);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function filterClientInvoices(Request $request)
    {
        $client = Client::where('slug', $request->clientSlug)->first();
        $products = [];
        $invoices = Invoice::with('client', 'invoiceProducts')->where(
            'client_id',
            $client->id
        );
        if (isset($request->products) && count($request->products) > 0) {
            // build the product array
            foreach ($request->products as $key => $product) {
                array_push($products, $product['id']);
            }
            // get the invoices
            $invoices = $invoices->whereHas('invoiceProducts', function ($firstQuery) use ($products) {
                $firstQuery->whereIn('product_id', $products);
            })->get();
        } else {
            // get the invoices
            $invoices = $invoices->get();
        }

        return InvoiceResource::collection($invoices);
    }

    // return client specific invoices
    public function specificClientInvoices($slug)
    {
        $client = Client::where('slug', $slug)->first();
        $invoices = Invoice::with(
            'client',
            'invoicePayments',
            'invoiceReturn',
            'invoiceTax',
            'invoiceProducts'
        )->where('client_id', $client->id)->get();

        return [
            'invoices' => InvoiceForPaymentResource::collection($invoices->where('calculated_due', '>', 0)),
            'client' => new ClientWithInvoicePaymentResource($client),
        ];
    }

    // return client all invoices
    public function clientAllInvoices(Request $request, $slug)
    {
        $client = Client::where('slug', $slug)->first();

        return InvoiceListResource::collection(Invoice::with(
            'client',
            'invoiceTax',
            'invoiceReturn',
            'invoicePayments'
        )->where('client_id', $client->id)->latest()->paginate($request->perPage));
    }

    // search client invoices
    public function searchClientInvoices(Request $request, $slug)
    {
        $term = $request->term;

        $client = Client::where('slug', $slug)->first();

        $query = Invoice::with('client', 'invoiceTax', 'invoicePayments', 'invoiceReturn')->where('client_id', $client->id);

        if ($request->startDate && $request->endDate) {
            $query = $query->whereBetween('invoice_date', [$request->startDate, $request->endDate]);
        }

        $query->where(function ($query) use ($term) {
            $query->where(function ($query) use ($term) {
                $query->where('invoice_no', 'LIKE', '%' . $term . '%')
                    ->orWhere('sub_total', 'LIKE', '%' . $term . '%')
                    ->orWhere('po_reference', 'LIKE', '%' . $term . '%')
                    ->orWhere('payment_terms', 'LIKE', '%' . $term . '%')
                    ->orWhereHas('client', function ($newQuery) use ($term) {
                        $newQuery->where('name', 'LIKE', '%' . $term . '%')
                            ->orWhere('client_id', 'LIKE', '%' . $term . '%');
                    });
            });
        });

        return InvoiceListResource::collection($query->latest()->paginate($request->perPage));
    }

    // return client invoice returns
    public function clientInvoiceReturns(Request $request, $slug)
    {
        $client = Client::where('slug', $slug)->first();
        $invoices = InvoiceReturn::with('invoice.client', 'user')->whereHas(
            'invoice',
            function ($newQuery) use ($client) {
                $newQuery->where('client_id', $client->id);
            }
        );

        return InvoiceReturnListResource::collection($invoices->latest()->paginate($request->perPage));
    }

    // search client invoice returns
    public function searchClientInvoiceReturns(Request $request, $slug)
    {
        $term = $request->term;

        $client = Client::where('slug', $slug)->first();

        $query = InvoiceReturn::with('invoice.client', 'user');

        if ($request->startDate && $request->endDate) {
            $query = $query->whereBetween('date', [$request->startDate, $request->endDate]);
        }

        $query->where(function ($query) use ($term, $client) {
            $query->whereHas('invoice', function ($newQuery) use ($client) {
                $newQuery->where('client_id', $client->id);
            })->where(function ($query) use ($term) {
                $query->where('reason', 'LIKE', '%' . $term . '%')
                    ->orWhere('slug', 'LIKE', '%' . $term . '%')
                    ->orWhere('total_return', 'LIKE', '%' . $term . '%')
                    ->orWhereHas('invoice', function ($newQuery) use ($term) {
                        $newQuery->where('invoice_no', 'LIKE', '%' . $term . '%')
                            ->orWhere('po_reference', 'LIKE', '%' . $term . '%')
                            ->orWhereHas('client', function ($anotherQuery) use ($term) {
                                $anotherQuery->where('name', 'LIKE', '%' . $term . '%');
                            });
                    });
            });
        });

        return InvoiceReturnListResource::collection($query->latest()->paginate($request->perPage));
    }

    // return client invoice payments
    public function clientInvoicePayments(Request $request, $slug)
    {
        $client = Client::where('slug', $slug)->first();
        $payments = InvoicePayment::with(
            'invoice.client',
            'invoice.invoiceTax',
            'invoicePaymentTransaction.cashbookAccount',
            'user'
        )->whereHas(
            'invoice',
            function ($newQuery) use ($client) {
                $newQuery->whereHas('client', function ($anotherQuery) use ($client) {
                    $anotherQuery->where('client_id', $client->id);
                });
            }
        );

        return InvoicePaymentResource::collection($payments->latest()->paginate($request->perPage));
    }

    // search client invoice payments
    public function searchClientInvoicePayments(Request $request, $slug)
    {
        $term = $request->term;

        $client = Client::where('slug', $slug)->first();

        $query = InvoicePayment::with(
            'invoice.client',
            'invoice.invoiceTax',
            'invoicePaymentTransaction.cashbookAccount',
            'user'
        );

        if ($request->startDate && $request->endDate) {
            $query = $query->whereBetween('date', [$request->startDate, $request->endDate]);
        }

        $query->where(function ($query) use ($term, $client) {
            $query->whereHas('invoice', function ($newQuery) use ($client) {
                $newQuery->whereHas('client', function ($anotherQuery) use ($client) {
                    $anotherQuery->where('client_id', $client->id);
                });
            })->where(function ($query) use ($term) {
                $query->where('amount', '=', $term)
                    ->orWhereHas('invoice', function ($newQuery) use ($term) {
                        $newQuery->where('invoice_no', 'LIKE', '%' . $term . '%')
                            ->orWhere('po_reference', 'LIKE', '%' . $term . '%')
                            ->orWhereHas('client', function ($anotherQuery) use ($term) {
                                $anotherQuery->where('name', 'LIKE', '%' . $term . '%')
                                    ->orWhere('phone', 'LIKE', '%' . $term . '%')
                                    ->orWhere('phone_number', 'LIKE', '%' . $term . '%')
                                    ->orWhere('phone_secondary', 'LIKE', '%' . $term . '%');
                            });
                    })
                    ->orWhereHas('invoicePaymentTransaction', function ($newQuery) use ($term) {
                        $newQuery->where('cheque_no', 'LIKE', '%' . $term . '%')
                            ->orWhere('receipt_no', 'LIKE', '%' . $term . '%')
                            ->orWhereHas('cashbookAccount', function ($newQuery) use ($term) {
                                $newQuery->where('account_number', 'LIKE', '%' . $term . '%')
                                    ->orWhere('bank_name', 'LIKE', '%' . $term . '%');
                            });
                    });
            });
        });
        return InvoicePaymentResource::collection($query->latest()->paginate($request->perPage));
    }

    // return client non invoice payments
    public function clientNonInvoicePayments(Request $request, $slug)
    {
        $client = Client::where('slug', $slug)->first();
        $transactions = NonInvoicePayment::with('client', 'paymentTransaction.cashbookAccount')->where(
            'client_id',
            $client->id
        )->latest()->paginate($request->perPage);

        return NonInvoicePaymentListResource::collection($transactions);
    }

    // search non invoice payments
    public function searchClientNonInvoicePayments(Request $request, $slug)
    {
        $term = $request->term;

        $client = Client::where('slug', $slug)->first();

        $query = NonInvoicePayment::with('client', 'paymentTransaction.cashbookAccount');

        if ($request->startDate && $request->endDate) {
            $query = $query->whereBetween('date', [$request->startDate, $request->endDate]);
        }

        $query->where(function ($query) use ($term, $client) {
            $query->where('client_id', $client->id)->where(function ($query) use ($term) {
                $query->where('amount', 'LIKE', '%' . $term . '%')
                    ->orWhereHas('paymentTransaction', function ($newQuery) use ($term) {
                        $newQuery->where('cheque_no', 'LIKE', '%' . $term . '%')
                            ->orWhere('receipt_no', 'LIKE', '%' . $term . '%')->orWhereHas(
                                'cashbookAccount',
                                function ($newQuery) use ($term) {
                                    $newQuery->where('account_number', 'LIKE', '%' . $term . '%')
                                        ->orWhere('bank_name', 'LIKE', '%' . $term . '%');
                                }
                            );
                    });
            });
        });

        // return $query->toSql();

        return NonInvoicePaymentListResource::collection($query->latest()->paginate($request->perPage));
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
                'email' => 'nullable|email|max:255|min:3|unique:clients,email',
                'company_name' => 'nullable|string|max:100|min:2',
                'address' => 'nullable|string|max:255',
                'type' => 'nullable|string|in:Company,Individual',
            ];

            foreach ($data as $key => $item) {
                $validator = Validator::make($item, $rules);
                if ($validator->passes()) {
                    $data = $validator->validated();
                    $data['type'] = $data['type'] ?? 'Company';
                    $data['slug'] = Str::slug($data['name']);
                    $data['status'] = 1;
                    
                    Client::create(
                        $this->incrementClientId() + $data
                    );
                } else {
                    return response()->json([
                        'message' => $validator->errors()->first(),
                        'row_number' => $key + 1
                    ], 422);
                }
            }
            return response()->json([
                'message' => 'Clients imported successfully'
            ]);
        }
    }

    public function incrementClientId()
    {
        $clientId = 1;
        $lastClient = Client::latest('id')->first();
        if ($lastClient) {
            $clientId = (int) $lastClient->client_id + 1;
        }
        return [
            'client_id' => $clientId
        ];
    }

    // client
    public function specificClientLedger($slug)
    {
        $client = Client::where('slug', $slug)->first();
        $data = DB::select("SELECT date
	,particulars
	,slug
	,action_type
	,debit
	,discount
	,credit
    ,original_date
FROM (
	SELECT created_at date
		,CONCAT ('Invoice [ATI-',`invoice_no`, ']')  particulars
		,`slug`
		,'invoice' as action_type
		,IFNULL(sub_total, 0) + IFNULL((SELECT((vi.rate / 100 ) * ii.sub_total) FROM vat_rates vi WHERE vi.id = ii.tax_id ),0) - IFNULL(discount, 0) + IFNULL((SELECT sum(ci.total_return) FROM invoice_returns ci WHERE ii.id = ci.invoice_id),0) debit
		,`discount`
		,0 credit
        ,invoice_date as original_date
		,client_id

	FROM `invoices` ii

	UNION ALL

	SELECT ci.created_at date
		,CONCAT ('Invoice payment [ATI-', `invoice_id`, ']') particulars
		,ci.slug
		,'invoice-payment' as action_type
		,0 debit
		, ci.discount
		,IFNULL(ci.amount, 0) credit
        ,ci.date as original_date
		,ii.client_id

	FROM `invoices` ii
		,invoice_payments ci
	WHERE ii.id = ci.invoice_id

	UNION ALL

	SELECT ci.created_at date
		,CONCAT (
			'Invoice Return [ATI-'
			,`invoice_id`
			, ']') particulars
		,ci.slug
		,'invoice-return' as action_type
		,0 debit
		,0 discount
		,IFNULL(ci.total_return, 0) credit
        ,ci.date as original_date
		,ii.client_id
	FROM `invoices` ii
		,invoice_returns ci
	WHERE ii.id = ci.invoice_id
	) v
WHERE v.client_id = " . $client->id . "
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
            'finalBalance' => $finalBalance,
        ];
    }

    /**
     * Get chart of accounts for client selection based on routing setup.
     */
    public function getChartOfAccounts()
    {
        try {
            // Get the clients account routing setting
            $routingSetting = \App\Models\AccountRoutingSetting::where('setting_key', 'clients_account')
                ->where('is_active', true)
                ->first();
            
            if (!$routingSetting || !$routingSetting->parent_account_id) {
                // Fallback to all active accounts if routing is not configured
                $accounts = \App\Models\ChartOfAccount::where('is_active', true)
                    ->orderBy('name')
                    ->get();
                    
                return $this->formatChartOfAccounts($accounts, 'Fallback to all accounts');
            }
            
            // Get accounts from the routing setup (parent + children)
            $accounts = $routingSetting->getAllAccounts();
            
            return $this->formatChartOfAccounts($accounts, 'From routing setup');
            
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to retrieve chart of accounts.',
                'error' => $e->getMessage()
            ], 500);
        }
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
     * Auto-assign Chart of Account to client
     */
    public function autoAssignChartOfAccount($slug)
    {
        try {
            $client = Client::where('slug', $slug)->first();
            
            if (!$client) {
                return response()->json([
                    'success' => false,
                    'message' => 'Client not found'
                ], 404);
            }

            // Routing-aware auto-assign for invoice flow
            $routingSetting = \App\Models\AccountRoutingSetting::where('setting_key', 'clients_account')
                ->where('is_active', true)
                ->first();

            if ($routingSetting) {
                // Main-account-per-each: create a child under main account
                if ($routingSetting->routing_type === 'main_account_per_each') {
                    if (!$routingSetting->main_account_id) {
                        return response()->json([
                            'success' => false,
                            'message' => 'Client routing is not properly configured: Main account is missing.'
                        ], 400);
                    }

                    $newAccount = $this->createChartOfAccountForClient([
                        'type' => $client->type ?? 'Company',
                        'full_name' => $client->full_name,
                        'name' => $client->name,
                        'business_name' => $client->business_name,
                        'company_name' => $client->company_name,
                    ], $routingSetting);

                    $client->update(['chart_of_account_id' => $newAccount->id]);

                    return response()->json([
                        'success' => true,
                        'message' => 'Chart of Account created and assigned successfully',
                        'chart_of_account_id' => $newAccount->id
                    ]);
                }

                // Automatic: assign the main account directly
                if ($routingSetting->routing_type === 'automatic') {
                    if (!$routingSetting->main_account_id) {
                        return response()->json([
                            'success' => false,
                            'message' => 'Client routing is not properly configured: Main account is missing.'
                        ], 400);
                    }

                    $client->update(['chart_of_account_id' => $routingSetting->main_account_id]);

                    return response()->json([
                        'success' => true,
                        'message' => 'Main account assigned to client successfully',
                        'chart_of_account_id' => $routingSetting->main_account_id
                    ]);
                }
            }

            // Fallback to legacy/default behavior if routing not configured or other types
            $clientData = [
                'type' => $client->type ?? 'Company'
            ];
            $clientData = Client::assignDefaultChartOfAccount($clientData);

            if (isset($clientData['chart_of_account_id'])) {
                $client->update(['chart_of_account_id' => $clientData['chart_of_account_id']]);

                return response()->json([
                    'success' => true,
                    'message' => __('Chart of Account assigned successfully'),
                    'chart_of_account_id' => $clientData['chart_of_account_id']
                ]);
            }

            return response()->json([
                'success' => false,
                'message' => 'No suitable Chart of Account found for automatic assignment'
            ], 400);
            
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to assign Chart of Account: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get chart of accounts specifically for client routing setup
     */
    public function getClientRoutingAccounts()
    {
        try {
            // Get the clients account routing setting
            $routingSetting = \App\Models\AccountRoutingSetting::where('setting_key', 'clients_account')
                ->where('is_active', true)
                ->first();
            
            if (!$routingSetting) {
                return response()->json([
                    'success' => false,
                    'message' => 'Client account routing is not configured',
                    'accounts' => []
                ], 404);
            }
            
            if (!$routingSetting->parent_account_id) {
                return response()->json([
                    'success' => false,
                    'message' => 'Client account routing is not properly configured. Please set a parent account.',
                    'accounts' => []
                ], 400);
            }
            
            // Get accounts from the routing setup (parent + children)
            $accounts = $routingSetting->getAccountsForDropdown();
            
            return response()->json([
                'success' => true,
                'message' => 'Client routing accounts retrieved successfully',
                'accounts' => $accounts,
                'routing_setting' => [
                    'id' => $routingSetting->id,
                    'setting_name' => $routingSetting->setting_name,
                    'description' => $routingSetting->description,
                    'parent_account' => $routingSetting->parentAccount ? [
                        'id' => $routingSetting->parentAccount->id,
                        'name' => $routingSetting->parentAccount->name,
                        'code' => $routingSetting->parentAccount->code
                    ] : null
                ]
            ]);
            
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to retrieve client routing accounts.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get the next available code number for a new client
     */
    public function getNextCodeNumber()
    {
        try {
            // Get client prefix from general settings
            $clientPrefix = getGeneralSettingsInfo()['clientPrefix'] ?? 'AC';
            
            // Debug: Check existing clients
            $existingClients = Client::where('client_id', 'like', $clientPrefix . '%')
                ->orderByRaw('CAST(SUBSTRING(client_id, ' . (strlen($clientPrefix) + 1) . ') AS UNSIGNED) DESC')
                ->limit(5)
                ->get(['client_id']);
            
            \Illuminate\Support\Facades\Log::info('Next code generation debug', [
                'client_prefix' => $clientPrefix,
                'existing_clients' => $existingClients->pluck('client_id')->toArray(),
                'total_clients_count' => Client::count()
            ]);
            
            // Generate the next client code using the same logic as store method
            $nextClientCode = $this->generateNextClientCode();
            
            // Extract the numeric part for the next_code field
            $nextCode = (int) substr($nextClientCode, strlen($clientPrefix));
            
            \Illuminate\Support\Facades\Log::info('Generated next code', [
                'next_client_code' => $nextClientCode,
                'next_code_number' => $nextCode
            ]);
            
            return response()->json([
                'success' => true,
                'next_code' => $nextCode,
                'formatted_code' => $nextClientCode,
                'message' => 'Next code number retrieved successfully',
                'debug' => [
                    'client_prefix' => $clientPrefix,
                    'existing_clients' => $existingClients->pluck('client_id')->toArray(),
                    'total_clients' => Client::count()
                ]
            ]);
            
        } catch (Exception $e) {
            \Illuminate\Support\Facades\Log::error('Error generating next code number', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            
            return response()->json([
                'success' => false,
                'message' => 'Failed to retrieve next code number: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Auto-assign chart of account based on routing configuration
     */
    private function autoAssignChartOfAccountForClient($clientData, $existingClient = null)
    {
        try {
            // If client already has a chart of account, don't auto-assign a new one
            if ($existingClient && $existingClient->chart_of_account_id) {
                \Illuminate\Support\Facades\Log::info("Client already has chart of account {$existingClient->chart_of_account_id}, skipping auto-assignment", [
                    'client_id' => $existingClient->id,
                    'existing_chart_of_account_id' => $existingClient->chart_of_account_id
                ]);
                return $clientData;
            }
            
            // If chart_of_account_id is already provided in the data, don't auto-assign
            if (!empty($clientData['chart_of_account_id'])) {
                \Illuminate\Support\Facades\Log::info("Chart of account already provided in data, skipping auto-assignment", [
                    'provided_chart_of_account_id' => $clientData['chart_of_account_id']
                ]);
                return $clientData;
            }
            
            // Get the clients account routing setting
            $routingSetting = \App\Models\AccountRoutingSetting::where('setting_key', 'clients_account')
                ->where('is_active', true)
                ->first();
            
            if (!$routingSetting) {
                // If no routing setting, use default behavior
                return $clientData;
            }
            
            \Illuminate\Support\Facades\Log::info("Processing client chart of account with routing type: " . $routingSetting->routing_type, [
                'routing_setting' => $routingSetting->toArray(),
                'client_data' => $clientData
            ]);
            
            switch ($routingSetting->routing_type) {
                case 'automatic':
                    // For automatic routing, always create/assign account if none provided
                    if (empty($clientData['chart_of_account_id']) && $routingSetting->main_account_id) {
                        // $newAccount = $this->createChartOfAccountForClient($clientData, $routingSetting);
                        $clientData['chart_of_account_id'] = $routingSetting->main_account_id;
                        
                     
                    }
                    break;
                    
                case 'per_each':
                    // For per each routing, validate that account is provided
                    if (empty($clientData['chart_of_account_id'])) {
                        // If no account provided, create one under the main account if available
                        if ($routingSetting->main_account_id) {
                            $newAccount = $this->createChartOfAccountForClient($clientData, $routingSetting);
                            $clientData['chart_of_account_id'] = $newAccount->id;
                            
                          
                        }
                    }
                    break;
                    
                case 'main_account_per_each':
                    // For main account per each, validate that account is provided
                    if (empty($clientData['chart_of_account_id'])) {
                        // If no account provided, create one under the main account if available
                        if ($routingSetting->main_account_id) {
                            $newAccount = $this->createChartOfAccountForClient($clientData, $routingSetting);
                            $clientData['chart_of_account_id'] = $newAccount->id;
                            
                          
                        }
                    }
                    break;
                    
                case 'cancel':
                    // For cancel routing, no chart of account needed
                    $clientData['chart_of_account_id'] = null;
                    \Illuminate\Support\Facades\Log::info("No chart of account assigned for client with cancel routing", [
                        'client_data' => $clientData,
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
            
            return $clientData;
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error("Error auto-assigning chart of account: " . $e->getMessage(), [
                'client_data' => $clientData,
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            return $clientData;
        }
    }
    
    /**
     * Create chart of account for client
     */
    private function createChartOfAccountForClient($clientData, $routingSetting)
    {
        try {
            $newAccount = \App\Models\ChartOfAccount::create([
                'name' => $this->getClientDisplayName($clientData),
                'code' => $this->generateAccountCode($routingSetting->main_account_id),
                'type_id' => $this->getAssetAccountTypeId(),
                'parent_id' => $routingSetting->main_account_id,
                'is_active' => true,
                'created_by' => Auth::id(),
            ]);
            
            \Illuminate\Support\Facades\Log::info("Created new chart of account for client", [
                'account_id' => $newAccount->id,
                'account_name' => $newAccount->name,
                'account_code' => $newAccount->code,
                'parent_account_id' => $routingSetting->main_account_id
            ]);
            
            return $newAccount;
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error("Error creating chart of account for client: " . $e->getMessage());
            throw $e;
        }
    }
    
    /**
     * Get client display name for account creation
     */
    private function getClientDisplayName($clientData)
    {
        // if (isset($clientData['type']) && $clientData['type'] === 'Individual') {
            return $clientData['full_name'] ?? $clientData['name'] ?? 'Individual Client';
        // } else {
        //     return $clientData['business_name'] ?? $clientData['company_name'] ?? 'Business Client';
        // }
    }
    
    /**
     * Generate unique account code
     */
    private function generateAccountCode($mainAccountId)
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
            \Illuminate\Support\Facades\Log::error("Error generating account code: " . $e->getMessage());
            // Fallback code
            $timestamp = time() % 1000000;
            return 'CLI-' . $timestamp;
        }
    }
    
    /**
     * Get Asset account type ID
     */
    private function getAssetAccountTypeId()
    {
        try {
            $assetType = \App\Models\ChartOfAccountType::where('name', 'Asset')->first();
            return $assetType ? $assetType->id : 1; // Default to first type if Asset not found
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::error("Error getting Asset account type: " . $e->getMessage());
            return 1; // Default fallback
        }
    }

    /**
     * Create a new chart of account for a client
     */
    public function createClientChartOfAccount(Request $request, $slug)
    {
        try {
            $request->validate([
                'name' => 'required|string|max:150',
                'routing_type' => 'required|in:per_each,main_account_per_each'
            ]);

            // Get the client
            $client = Client::where('slug', $slug)->first();
            if (!$client) {
                return $this->responseWithError('Client not found');
            }

            // Get the routing setting
            $routingSetting = \App\Models\AccountRoutingSetting::where('setting_key', 'clients_account')
                ->where('is_active', true)
                ->first();

            if (!$routingSetting) {
                return $this->responseWithError('Client account routing is not configured');
            }

            // Prepare account data
            $accountData = [
                'name' => $request->name,
                'code' => $this->generateAccountCode($routingSetting->main_account_id ?? null),
                'type_id' => $this->getAssetAccountTypeId(),
                'is_active' => true,
                'created_by' => Auth::id(),
            ];

            // Set parent_id based on routing type
            if ($routingSetting->routing_type === 'main_account_per_each' && $routingSetting->main_account_id) {
                $accountData['parent_id'] = $routingSetting->main_account_id;
            }
            // For 'per_each', no parent_id (null)

            // Create the account
            $newAccount = \App\Models\ChartOfAccount::create($accountData);

            // Update the client with the new account
            $client->update(['chart_of_account_id' => $newAccount->id]);

            return $this->responseWithSuccess('Chart of account created successfully', [
                'account' => $newAccount,
                'client' => $client->fresh()
            ]);

        } catch (\Exception $e) {
            return $this->responseWithError('Failed to create chart of account: ' . $e->getMessage());
        }
    }

    /**
     * Generate the next client code
     *
     * @return string
     */
    private function generateNextClientCode()
    {
        // Get client prefix from general settings
        $clientPrefix = getGeneralSettingsInfo()['clientPrefix'] ?? 'AC';
        
        // Get the last client to determine the next number
        $lastClient = Client::where('client_id', 'like', $clientPrefix . '%')
            ->orderByRaw('CAST(SUBSTRING(client_id, ' . (strlen($clientPrefix) + 1) . ') AS UNSIGNED) DESC')
            ->first();
        
        if ($lastClient) {
            // Extract the numeric part from the last client_id
            $lastNumber = (int) substr($lastClient->client_id, strlen($clientPrefix));
            $nextNumber = $lastNumber + 1;
        } else {
            // If no clients exist, start with 1
            $nextNumber = 1;
        }
        
        // Format the number with leading zeros (e.g., 001, 002, etc.)
        return $clientPrefix . str_pad($nextNumber, 3, '0', STR_PAD_LEFT);
    }
}