<?php

use App\Http\Controllers\Core\Auth\User\LoginController;
use App\Http\Controllers\Core\Auth\UserRegistrationController;


Route::get('login', [LoginController::class, 'show'])
    ->name('users.login.index');

Route::post('login', [LoginController::class, 'login'])
    ->name('users.login');

    Route::get('register', [ UserRegistrationController::class, 'index' ])
    ->name('user-registration.index');