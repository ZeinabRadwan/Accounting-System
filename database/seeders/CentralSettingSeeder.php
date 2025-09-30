<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CentralSettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        // seed basic data to table
        $settingElements = [
            'company_name' => 'Arqam - KSA Accounting System',
            'company_tagline' => 'ZATCA-compliant e-Invoicing & KSA Regulations',
            'email_address' => 'email@gmail.com',
            'phone_number' => '0170000000',
            'address' => 'Your address',
            'default_currency' => '1',
            'default_language' => 'en',
            'logo' => 'white_logo.png',
            'logo_black' => 'black_logo.png',
            'small_logo' => 'small_logo.png',
            'favicon' => 'favicon.png',
            'copyright' => 'Copyright 2025 © Websoft Technology. All Rights Reserved.',
            'facebook_link' => 'https://www.facebook.com/codeshaper',
            'instagram_link' => 'https://www.instagram.com/codeshaper',
            'twitter_link' => 'https://www.twitter.com/codeshaper',
            'linkedin_link' => 'https://www.linkedin.com/codeshaper',
            'trial_day_count' => 14,
            'plan_discount' => 0,
            'is_show_hero_section' => 'yes',
            'is_show_about_us_section' => 'yes',
            'is_show_why_us_section' => 'yes',
            'is_show_business_start_section' => 'yes',
            'is_show_features_section' => 'yes',
            'is_show_business_need_section' => 'yes',
            'is_show_extra_features_section' => 'yes',
            'is_show_cta_section' => 'yes',
            'is_show_screenshot_section' => 'yes',
            'is_show_pricing_section' => 'yes',
            'is_show_testimonial_section' => 'yes',
            'is_show_brand_section' => 'yes',
            'is_show_newsletter_section' => 'yes',
            'is_show_template_footer_section' => 'yes',
        ];

        foreach ($settingElements as $key => $value) {
            // Check if the key already exists in the table
            $existingSetting = DB::table('general_settings')->where('key', $key)->first();

            if (!$existingSetting) {
                // Only insert if the key does not already exist
                DB::table('general_settings')->insert([
                    'key' => $key,
                    'display_name' => ucwords(str_replace('_', ' ', $key)),
                    'value' => $value,
                ]);
            }
        }

     // truncate
     DB::table('settings')->truncate();

        if (DB::table('settings')->count() == 0) {
            settings()->set([
                // new setting for landing page
                // hero section
                'hero_tagline' => 'Our Platform, Your Business',
                'hero_title' => 'Arqam',
                'hero_description' => 'Arqam is a KSA-focused, multitenancy SaaS for accounting, sales, inventory, and more — fully aligned with Saudi regulations and ZATCA e‑Invoicing (FATOORA).',
                'hero_demo_button_text' => 'Try Demo',
                'hero_demo_button_link' => '/admin/login',
                'hero_get_started_button_text' => 'Get Started',
                'hero_get_started_button_link' => '/register',

                // about us section
                'about_us_tagline' => 'About Arqam (KSA)',
                'about_us_title' => 'KSA Accounting & ERP | ZATCA-Compliant e‑Invoicing',
                'about_us_description' => 'Arqam is a Saudi-market-ready accounting and ERP system. Built for KSA regulations and ZATCA e‑Invoicing compliance, it covers POS, expenses, purchases, sales, payments, accounting, and inventory for growing businesses.',

                // why us section
                'why_us_tagline' => 'Why Arqam for KSA?',
                'why_us_title' => 'Operate with Confidence Under KSA Regulations',
                'why_us_description' => 'Arqam helps you stay compliant with Saudi regulations including ZATCA e‑Invoicing (FATOORA). Manage accounting, sales, and inventory in one place with localized features for the KSA market.',

                // business start section
                'business_start_section_tagline' => 'Built for Saudi Businesses',
                'business_start_section_title' => 'Get ZATCA-Ready with Arqam',
                'business_start_section_description' => 'Arqam streamlines your operations and helps maintain compliance with Saudi regulations. Migrate easily and start issuing ZATCA-compliant invoices today.',
                'business_start_support_list' => json_encode([
                    '14 Days Free Support',
                    '24 Hours Support',
                ]),

                // features section
                'features_section_tagline' => 'Awesome Features',
                'features_section_title' => 'Discover Our Awesome Features',
                'features_section_description' => 'Arqam centralizes expenses, purchases, sales, payments, accounting, loans, assets, payroll, and more — with KSA localization and ZATCA e‑Invoicing support.',

                // all feature section
                'all_features_section_tagline' => 'Core Modules',
                'all_features_section_title' => 'Core Modules For Your Business',

                // get started box
                'get_started_box_title' => 'Managing Your KSA Business Just Got Easier',
                'get_started_box_description' => 'All-in-one accounting and ERP for KSA with ZATCA e‑Invoicing compliance built in.',
                'get_started_box_button_text' => 'Get Started',
                'get_started_box_button_link' => '/register',

                // software overview section
                'software_overview_section_tagline' => 'Dashboard Screenshot',
                'software_overview_section_title' => 'Software Overview',

                // pricing plan section
                'pricing_plan_section_tagline' => 'Simple Pricing',
                'pricing_plan_section_title' => 'Pricing for KSA Businesses',

                // testimonial section
                'testimonial_section_tagline' => 'Trusted in KSA',
                'testimonial_section_title' => 'What Saudi Businesses Say',

                // newsletter section
                'newsletter_section_title' => 'Try Arqam (KSA)',
                'newsletter_section_description' => 'Access all Arqam features for 14 days. See how ZATCA-compliant invoicing and KSA localization fit your business.',

                // custom html section
                'custom_html' => <<<HTML
                <!-- Primary Meta Tags -->
                <meta name="title" content="Arqam - KSA Accounting System | ZATCA-Compliant Solution by Websoft Technology">
                <meta name="description" content="Arqam is a Saudi Arabia based Accounting & Business Management System fully compliant with ZATCA regulations, developed by Websoft Technology.">
                <meta name="short-description" content="ZATCA-compliant accounting & e-invoicing system for Saudi businesses.">

                <!-- Open Graph / Facebook -->
                <meta property="og:type" content="website">
                <meta property="og:url" content="https://arqam.sa/">
                <meta property="og:title" content="Arqam - KSA Accounting System | ZATCA-Compliant Solution by Websoft Technology">
                <meta property="og:description" content="Arqam is a complete KSA Accounting & Business Management SaaS application, developed by Websoft Technology, designed to comply with ZATCA e-invoicing and VAT regulations for businesses across Saudi Arabia.">
                <meta property="og:image" content="https://account.websoft.sa/images/arqam.png">

                <!-- Twitter -->
                <meta name="twitter:card" content="summary_large_image">
                <meta property="twitter:url" content="https://arqam.sa/">
                <meta property="twitter:title" content="Arqam - KSA Accounting System | ZATCA-Compliant Solution by Websoft Technology">
                <meta property="twitter:description" content="Arqam is a ZATCA-compliant Accounting & Management System built for Saudi businesses. Developed by Websoft Technology, it enables compliance with e-invoicing, VAT, and financial reporting regulations.">
                <meta property="twitter:image" content="https://account.websoft.sa/images/arqam.png">
                HTML,

            ]);

            settings()->save();
        }
    }
}
