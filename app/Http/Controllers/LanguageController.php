<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Auth;

class LanguageController extends Controller
{



    public function setLocale(Request $request)
    {
        $locale = $request->input('locale');

        // Validate the locale
        if (!in_array($locale, array_keys(config('app.locales', [])))) {
            return response()->json([
                'success' => false,
                'error' => 'Invalid locale'
            ], 400);
        }

        try {
            // Store the locale in the session
            Session::put('locale', $locale);

            // Update user's locale if authenticated
            if (Auth::check()) {
                $user = Auth::user();
                $user->locale = $locale;
                $user->save();
            }

            // Set the application locale
            app()->setLocale($locale);

            return response()->json([
                'success' => true, 
                'locale' => $locale,
                'message' => 'Locale updated successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'error' => 'Failed to update locale'
            ], 500);
        }
    }









    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
