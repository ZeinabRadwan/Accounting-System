<?php

namespace App\Http\Controllers\API;

use App\Models\Currency;
use Illuminate\Mail\Message;
use App\Models\GeneralSetting;
use App\Services\ImageService;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\CurrencyResource;
use App\Http\Controllers\PaymentController;
use App\Http\Requests\SMSConfigurationRequest;
use App\Http\Requests\MailConfigurationRequest;
use App\Http\Requests\GeneralSetting\StoreGeneralSettingRequest;


class GeneralController extends Controller
{
    protected $imageService;
    // define middleware
    public function __construct(ImageService $imageService)
    {
        $this->middleware('can:general-settings', ['only' => ['updateGeneralSettings']]);

        $this->imageService = $imageService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return array
     */
    public function getGeneralSettings()
    {
        $paymentController = new PaymentController();
        $centralActiveCurrency = $paymentController->centralActiveCurrency();

        
        $query = GeneralSetting::get();

        $settings = [
            'version' => config('app.version'),
            'companyName' => $query->where('key', 'company_name')->first()?->value ?? '',
            'companyTagline' => $query->where('key', 'company_tagline')->first()?->value ?? '',
            'email' => $query->where('key', 'email_address')->first()?->value ?? '',
            'phone' => $query->where('key', 'phone_number')->first()?->value ?? '',
            'address' => $query->where('key', 'address')->first()?->value ?? '',
            'clientPrefix' => $query->where('key', 'client_prefix')->first()?->value ?? '',
            'supplierPrefix' => $query->where('key', 'supplier_prefix')->first()?->value ?? '',
            'employeePrefix' => $query->where('key', 'employee_prefix')->first()?->value ?? '',
            'proCatPrefix' => $query->where('key', 'product_cat_prefix')->first()?->value ?? '',
            'proSubCatPrefix' => $query->where('key', 'product_sub_cat_prefix')->first()?->value ?? '',
            'productPrefix' => $query->where('key', 'product_prefix')->first()?->value ?? '',
            'expCatPrefix' => $query->where('key', 'exp_cat_prefix')->first()?->value ?? '',
            'expSubCatPrefix' => $query->where('key', 'exp_sub_cat_prefix')->first()?->value ?? '',
            'purchasePrefix' => $query->where('key', 'pur_prefix')->first()?->value ?? '',
            'purchaseReturnPrefix' => $query->where('key', 'pur_return_prefix')->first()?->value ?? '',
            'quotationPrefix' => $query->where('key', 'quotation_prefix')->first()?->value ?? '',
            'invoicePrefix' => $query->where('key', 'invoice_prefix')->first()?->value ?? '',
            'invoiceReturnPrefix' => $query->where('key', 'invoice_return_prefix')->first()?->value ?? '',
            'adjustmentPrefix' => $query->where('key', 'adjustment_prefix')->first()?->value ?? '',
            'currency' => new CurrencyResource(Currency::where('id', (int) ($query->where('key', 'default_currency')->first()?->value ?? 1))->first()),
            'centralAdminCurrency' => $centralActiveCurrency,
            'language' => $query->where('key', 'default_language')->first()?->value ?? 'ar',
            'country' => $query->where('key', 'country')->first()?->value ?? 'SA',

            'logo' => global_asset('images/' . ($query->where('key', 'logo')->first()?->value ?? '')),
            'blackLogo' => global_asset('images/' . ($query->where('key', 'logo_black')->first()?->value ?? '')),
            'smallLogo' => global_asset('images/' . ($query->where('key', 'small_logo')->first()?->value ?? '')),
            'favicon' => global_asset('images/' . ($query->where('key', 'favicon')->first()?->value ?? '')),
            'copyright' => $query->where('key', 'copyright')->first()?->value ?? '',
            'invoiceThankYouMessage' => $query->where('key', 'invoice_thank_you_message')->first()?->value ?? '',
            'taxRegistrationNumber' => $query->where('key', 'tax_registration_number')->first()?->value ?? '',
            'defaultClientSlug' => $query->where('key', 'default_client_slug')->first()?->value ?? '',
            'defaultAccountSlug' => $query->where('key', 'default_account_slug')->first()?->value ?? '',
            'defaultVatRateSlug' => $query->where('key', 'default_vat_rate_slug')->first()?->value ?? '',
        ];

        return $settings;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function updateGeneralSettings(StoreGeneralSettingRequest $request)
    {
        // get settings data
        $allSettings = GeneralSetting::get();

        // upload logo
        $logoName = $allSettings->where('key', 'logo')->first()?->value ?? '';
        if ($request->logo) {
            $logoName = handleGeneralSettingsImage($request->logo, $logoName, 'logo');
        }

        // upload black logo
        $blackLogoName = $allSettings->where('key', 'logo_black')->first()?->value ?? '';
        if ($request->blackLogo) {
            $blackLogoName = handleGeneralSettingsImage($request->blackLogo, $blackLogoName, 'logo-black');
        }

        // upload small logo
        $smallLogoName = $allSettings->where('key', 'small_logo')->first()?->value ?? '';
        if ($request->smallLogo) {
            $smallLogoName = handleGeneralSettingsImage($request->smallLogo, $smallLogoName, 'small-logo');
        }

        // upload favicon
        $favicon = $allSettings->where('key', 'favicon')->first()?->value ?? '';
        if ($request->favicon) {
            $favicon = handleGeneralSettingsImage($request->favicon, $favicon, 'favicon');
        }

        // update general settings
        GeneralSetting::updateOrCreate(
            ['key' => 'company_name'],
            ['display_name' => 'Company Name', 'value' => clean($request->companyName)]
        );
        GeneralSetting::updateOrCreate(
            ['key' => 'company_tagline'],
            ['display_name' => 'Company Tagline', 'value' => clean($request->companyTagline)]
        );
        GeneralSetting::updateOrCreate(
            ['key' => 'email_address'],
            ['display_name' => 'Email Address', 'value' => $request->emailAddress]
        );
        GeneralSetting::updateOrCreate(
            ['key' => 'phone_number'],
            ['display_name' => 'Phone Number', 'value' => $request->phoneNumber]
        );
        GeneralSetting::updateOrCreate(
            ['key' => 'address'],
            ['display_name' => 'Address', 'value' => clean($request->address)]
        );
        GeneralSetting::updateOrCreate(
            ['key' => 'client_prefix'],
            ['display_name' => 'Client Prefix', 'value' => clean($request->clientPrefix)]
        );
        GeneralSetting::updateOrCreate(
            ['key' => 'supplier_prefix'],
            ['display_name' => 'Supplier Prefix', 'value' => clean($request->supplierPrefix)]
        );
        GeneralSetting::updateOrCreate(
            ['key' => 'employee_prefix'],
            ['display_name' => 'Employee Prefix', 'value' => clean($request->employeePrefix)]
        );
        GeneralSetting::updateOrCreate(
            ['key' => 'product_cat_prefix'],
            ['display_name' => 'Product Category Prefix', 'value' => clean($request->proCatPrefix)]
        );
        GeneralSetting::updateOrCreate(
            ['key' => 'product_sub_cat_prefix'],
            ['display_name' => 'Product Sub Category Prefix', 'value' => clean($request->proSubCatPrefix)]
        );
        GeneralSetting::updateOrCreate(
            ['key' => 'product_prefix'],
            ['display_name' => 'Product Prefix', 'value' => clean($request->productPrefix)]
        );
        GeneralSetting::updateOrCreate(
            ['key' => 'exp_cat_prefix'],
            ['display_name' => 'Expense Category Prefix', 'value' => clean($request->expCatPrefix)]
        );
        GeneralSetting::updateOrCreate(
            ['key' => 'exp_sub_cat_prefix'],
            ['display_name' => 'Expense Sub Category Prefix', 'value' => clean($request->expSubCatPrefix)]
        );
        GeneralSetting::updateOrCreate(
            ['key' => 'pur_prefix'],
            ['display_name' => 'Purchase Prefix', 'value' => clean($request->purchasePrefix)]
        );
        GeneralSetting::updateOrCreate(
            ['key' => 'pur_return_prefix'],
            ['display_name' => 'Purchase Return Prefix', 'value' => clean($request->purchaseReturnPrefix)]
        );
        GeneralSetting::updateOrCreate(
            ['key' => 'quotation_prefix'],
            ['display_name' => 'Quotation Prefix', 'value' => clean($request->quotationPrefix)]
        );
        GeneralSetting::updateOrCreate(
            ['key' => 'invoice_prefix'],
            ['display_name' => 'Invoice Prefix', 'value' => clean($request->invoicePrefix)]
        );
        GeneralSetting::updateOrCreate(
            ['key' => 'invoice_return_prefix'],
            ['display_name' => 'Invoice Return Prefix', 'value' => clean($request->invoiceReturnPrefix)]
        );
        GeneralSetting::updateOrCreate(
            ['key' => 'adjustment_prefix'],
            ['display_name' => 'Adjustment Prefix', 'value' => clean($request->adjustmentPrefix)]
        );
        GeneralSetting::updateOrCreate(
            ['key' => 'default_currency'],
            ['display_name' => 'Default Currency', 'value' => clean($request->currency['id'])]
        );
        GeneralSetting::updateOrCreate(
            ['key' => 'default_language'],
            ['display_name' => 'Default Language', 'value' => clean($request->language)]
        );
        
        // Update or create country setting
        GeneralSetting::updateOrCreate(
            ['key' => 'country'],
            ['display_name' => 'Country', 'value' => clean($request->country)]
        );
        
        GeneralSetting::updateOrCreate(
            ['key' => 'logo'],
            ['display_name' => 'Logo', 'value' => $logoName]
        );
        GeneralSetting::updateOrCreate(
            ['key' => 'logo_black'],
            ['display_name' => 'Black Logo', 'value' => $blackLogoName]
        );
        GeneralSetting::updateOrCreate(
            ['key' => 'small_logo'],
            ['display_name' => 'Small Logo', 'value' => $smallLogoName]
        );
        GeneralSetting::updateOrCreate(
            ['key' => 'favicon'],
            ['display_name' => 'Favicon', 'value' => $favicon]
        );
        GeneralSetting::updateOrCreate(
            ['key' => 'copyright'],
            ['display_name' => 'Copyright', 'value' => clean($request->copyrightText)]
        );
        GeneralSetting::updateOrCreate(
            ['key' => 'default_client_slug'],
            ['display_name' => 'Default Client Slug', 'value' => clean($request->defaultClient['slug'])]
        );
        GeneralSetting::updateOrCreate(
            ['key' => 'default_account_slug'],
            ['display_name' => 'Default Account Slug', 'value' => clean($request->defaultAccount['slug'])]
        );
        GeneralSetting::updateOrCreate(
            ['key' => 'default_vat_rate_slug'],
            ['display_name' => 'Default VAT Rate Slug', 'value' => clean($request->defaultVatRate['slug'])]
        );

        GeneralSetting::updateOrCreate(['key' =>  'invoice_thank_you_message'],[ 'display_name' => 'Invoice message', 'value' => clean($request->invoiceThankYouMessage)]);
        GeneralSetting::updateOrCreate(['key' =>  'tax_registration_number'],[ 'display_name' => 'Tax Registration Number', 'value' => clean($request->taxRegistrationNumber)]);

        return redirect()->back()->withSuccess('Settings updated successfully!');
    }

    public function getSMTPforTenant(){
        $smtp_credentials = tenant()->smtp;
        return  response()->json($smtp_credentials);
    }

    public function updateSMTPforTenant(MailConfigurationRequest $request){
        tenant()->update([
            'smtp' => [
                "mail_mailer" => $request->mail_mailer,
                "mail_host" => $request->mail_host,
                "mail_port" => $request->mail_port,
                "mail_username" => $request->mail_username,
                "mail_password" => $request->mail_password,
                "mail_encryption" => $request->mail_encryption,
                "mail_from_address" => $request->mail_from_address,
                "mail_from_name" => $request->mail_from_name
            ]
        ]);

        // add activity log
        activity()
        ->causedBy(Auth::user())
        ->withProperties([
            'name' => "",
            'code' => "",
            'event' => 'Update'
        ])
        ->useLog('Mail Configuration Updated')
        ->log('Mail Configuration Updated');
        
        return 'Env SMTP updated successfully!';
    }

    public function sendTestConnectionEmail()
    {
        $recipientEmail = GeneralSetting::where('key', 'email_address')->first()?->value ?? '';
        if (empty($recipientEmail)) {
            return response()->json(['error' => 'Email address not configured in general settings'], 400);
        }
        
        try {
            Mail::send([], [], function (Message $message) use ($recipientEmail) {
                $message->to($recipientEmail)
                    ->subject('Test Email')
                    ->html('<p>This is a test email to check email credentials.</p>');
            });

            return response()->json(['message' => 'Test email sent successfully!'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error sending test email: ' . $e->getMessage()], 500);
        }
    }

    public function getSMSforTenant(){
        $sms_credentials = tenant()->sms;
        return  response()->json($sms_credentials);
    }

    public function updateSMSforTenant(SMSConfigurationRequest $request){
        tenant()->update([
            'sms' => [
                "twilio_account_sid" => $request->twilio_account_sid,
                "twilio_auth_token" => $request->twilio_auth_token,
                "twilio_from" => $request->twilio_from,
                "twilio_sms_service_sid" => $request->twilio_sms_service_sid
            ]
        ]);

            // add activity log
            activity()
            ->causedBy(Auth::user())
            ->withProperties([
                'name' => "",
                'code' => "",
                'event' => 'Update'
            ])
            ->useLog('SMS Configuration Updated')
            ->log('SMS Configuration Updated');
            
        return 'Env SMS updated successfully!';
    }

}