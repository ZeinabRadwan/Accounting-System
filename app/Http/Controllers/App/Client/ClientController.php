<?php

namespace App\Http\Controllers\App\Client;

use App\Http\Controllers\Controller;
use App\Models\App\Client;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function create()
    {
        return view('client.create');
    }

    public function edit($tenant_id,$client_id)
    {
        $client = Client::find($client_id);
        return view('client.edit', compact('client'));
    }
}
