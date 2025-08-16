<?php

namespace App\Http\Controllers\App\Client;

use App\Http\Controllers\Controller;

class ClientDatatableController extends Controller
{
    
    public function datatablePagination()
    {
        return view('client.index');
    }

   
}
