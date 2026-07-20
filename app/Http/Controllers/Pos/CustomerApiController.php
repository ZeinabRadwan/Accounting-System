<?php

namespace App\Http\Controllers\Pos;

use App\Domain\Customer\Services\CustomerService;
use App\Http\Controllers\Controller;
use App\Http\Requests\Customer\QuickCreateCustomerRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CustomerApiController extends Controller
{
    public function search(Request $request, CustomerService $service): JsonResponse
    {
        $term = (string) $request->query('q', '');
        $customers = $service->quickSearch($term, 10);
        return response()->json($customers);
    }

    public function quickCreate(QuickCreateCustomerRequest $request, CustomerService $service): JsonResponse
    {
        $customer = $service->quickCreateIfNotExists(
            $request->string('name'),
            $request->string('phone')
        );

        return response()->json($customer, 201);
    }
}

