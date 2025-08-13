@extends('auth-layouts.auth')

@section('title', trans('default.registration'))
@section('contents')
    <div id="app">
        <div class="auth-wrapper auth-cover">
            <div class="auth-inner row m-0">
                <!-- Brand logo-->
                <a class="brand-logo" href="{{ route('central.dashboard') }}">
                    <h2 class="brand-text text-primary ms-1">{{ config('app.name') }}</h2>
                </a>
                <!-- /Brand logo-->

                <!-- Left Text-->
                <div class="d-none d-lg-flex col-lg-8 align-items-center p-5">
                    <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
                        <img class="img-fluid" src="{{ asset('images/pages/register-v2.svg') }}" alt="Register V2" />
                    </div>
                </div>
                <!-- /Left Text-->

                <!-- Register-->
                <div class="d-flex col-lg-4 align-items-center auth-bg px-2 p-lg-5">
                    <div class="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
                        <h2 class="card-title fw-bold mb-1">Adventure starts here 🚀</h2>
                        <p class="card-text mb-2">Make your app management easy and fun!</p>

                        @if ($errors->any())
                            <div class="alert alert-danger">
                                <ul class="mb-0">
                                    @foreach ($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        @endif

                        <form class="auth-register-form mt-2" method="POST" action="{{ route('multi-tenant.register') }}">
                            @csrf
                            
                            <!-- Tenant Information -->
                            <div class="mb-1">
                                <label class="form-label" for="tenant_id">Tenant ID</label>
                                <input class="form-control" id="tenant_id" type="text" name="tenant_id" placeholder="mycompany" aria-describedby="tenant_id" tabindex="1" autofocus value="{{ old('tenant_id') }}" />
                                <small class="form-text text-muted">Unique identifier for your organization (letters, numbers, hyphens, underscores only)</small>
                            </div>

                            <div class="mb-1">
                                <label class="form-label" for="domain">Domain</label>
                                <input class="form-control" id="domain" type="text" name="domain" placeholder="mycompany.localhost" aria-describedby="domain" tabindex="2" value="{{ old('domain') }}" />
                                <small class="form-text text-muted">Your organization's domain (e.g., mycompany.localhost)</small>
                            </div>

                            <div class="mb-1">
                                <label class="form-label" for="company_name">Company Name</label>
                                <input class="form-control" id="company_name" type="text" name="company_name" placeholder="My Company Inc." aria-describedby="company_name" tabindex="3" value="{{ old('company_name') }}" />
                            </div>

                            <!-- User Information -->
                            <div class="mb-1">
                                <label class="form-label" for="first_name">First Name</label>
                                <input class="form-control" id="first_name" type="text" name="first_name" placeholder="John" aria-describedby="first_name" tabindex="4" value="{{ old('first_name') }}" />
                            </div>

                            <div class="mb-1">
                                <label class="form-label" for="last_name">Last Name</label>
                                <input class="form-control" id="last_name" type="text" name="last_name" placeholder="Doe" aria-describedby="last_name" tabindex="5" value="{{ old('last_name') }}" />
                            </div>

                            <div class="mb-1">
                                <label class="form-label" for="email">Email</label>
                                <input class="form-control" id="email" type="text" name="email" placeholder="john@example.com" aria-describedby="email" tabindex="6" value="{{ old('email') }}" />
                            </div>

                            <div class="mb-1">
                                <label class="form-label" for="password">Password</label>
                                <div class="input-group input-group-merge form-password-toggle">
                                    <input class="form-control form-control-merge" id="password" type="password" name="password" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" aria-describedby="password" tabindex="7" />
                                    <span class="input-group-text cursor-pointer"><i data-feather="eye"></i></span>
                                </div>
                            </div>

                            <div class="mb-1">
                                <label class="form-label" for="password_confirmation">Confirm Password</label>
                                <div class="input-group input-group-merge form-password-toggle">
                                    <input class="form-control form-control-merge" id="password_confirmation" type="password" name="password_confirmation" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" aria-describedby="password_confirmation" tabindex="8" />
                                    <span class="input-group-text cursor-pointer"><i data-feather="eye"></i></span>
                                </div>
                            </div>

                            <div class="mb-1">
                                <div class="form-check">
                                    <input class="form-check-input" id="privacy-policy" type="checkbox" tabindex="9" required />
                                    <label class="form-check-label" for="privacy-policy">
                                        I agree to the <a href="#">privacy policy & terms</a>
                                    </label>
                                </div>
                            </div>

                            <button class="btn btn-primary w-100" tabindex="10">Sign up</button>
                        </form>

                        <p class="text-center mt-2">
                            <span>Already have an account?</span>
                            <a href="{{ route('multi-tenant.login') }}">
                                <span>&nbsp;Sign in instead</span>
                            </a>
                        </p>

                        <div class="divider my-4">
                            <div class="divider-text">or</div>
                        </div>

                        <div class="auth-footer-btn d-flex justify-content-center">
                            <a href="{{ route('central.dashboard') }}" class="btn btn-outline-primary">
                                <i data-feather="home"></i>
                                <span class="ms-1">Back to Central</span>
                            </a>
                        </div>
                    </div>
                </div>
                <!-- /Register-->
            </div>
        </div>
    </div>
@endsection

