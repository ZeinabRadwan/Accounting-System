<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Supplier;
use App\Models\Client;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class DebugController extends Controller
{
    public function checkDatabase()
    {
        $data = [];
        
        try {
            // Check if suppliers table has cr_number column
            $suppliersColumns = Schema::getColumnListing('suppliers');
            $data['suppliers_columns'] = $suppliersColumns;
            $data['suppliers_has_cr_number'] = in_array('cr_number', $suppliersColumns);
            
            // Check if clients table has cr_number column
            $clientsColumns = Schema::getColumnListing('clients');
            $data['clients_columns'] = $clientsColumns;
            $data['clients_has_cr_number'] = in_array('cr_number', $clientsColumns);
            
            // Check sample data
            $sampleSupplier = Supplier::first();
            $data['sample_supplier'] = $sampleSupplier ? [
                'id' => $sampleSupplier->id,
                'name' => $sampleSupplier->name,
                'cr_number' => $sampleSupplier->cr_number,
                'type' => $sampleSupplier->type,
            ] : null;
            
            $sampleClient = Client::first();
            $data['sample_client'] = $sampleClient ? [
                'id' => $sampleClient->id,
                'name' => $sampleClient->name,
                'cr_number' => $sampleClient->cr_number,
                'type' => $sampleClient->type,
            ] : null;
            
            // Check counts
            $data['suppliers_count'] = Supplier::count();
            $data['clients_count'] = Client::count();
            
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
