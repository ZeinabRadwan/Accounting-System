<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SidebarMenu;
use App\Models\Tenant;

class SidebarMenuSeeder extends Seeder
{
    public function run(): void
    {
        Tenant::all()->each(function ($tenant) {
            tenancy()->initialize($tenant);

        SidebarMenu::truncate();
        // Helper to create parent menu
        $createMenu = function ($data, $children = []) {
            $parent = SidebarMenu::create([
                'menu_id' => $data['menu_id'] ?? null,
                'icon' => $data['icon'] ?? null,
                'name' => $data['name'],
                'url' => $data['url'] ?? null,
                'permissions' => $data['permissions'] ?? null,
                'order' => $data['order'] ?? 0,
            ]);

            foreach ($children as $order => $child) {
                SidebarMenu::create([
                    'parent_id' => $parent->id,
                    'menu_id' => $child['menu_id'] ?? null,
                    'icon' => $child['icon'] ?? null,
                    'name' => $child['name'],
                    'url' => $child['url'] ?? null,
                    'permissions' => $child['permissions'] ?? null,
                    'order' => $order,
                ]);
            }
        };

        // ================= Dashboard =================
        $createMenu([
            'menu_id' => 'dashboard-samples',
            'icon' => 'pie-chart',
            'name' => 'custom.dashboard',
            'permissions' => json_encode(['view_default', 'view_pos']),
            'order' => 1,
        ], [
            ['name' => 'custom.default', 'url' => '/admin/dashboard', 'permissions' => json_encode(['view_default'])],
            ['name' => 'custom.accounting', 'url' => '/dashboard/pos', 'permissions' => json_encode(['view_default'])],
            ['name' => 'custom.pos', 'url' => '/dashboard/pos', 'permissions' => json_encode(['view_pos'])],
        ]);



        $createMenu([
            'menu_id' => 'sales',
            'icon' => 'shopping-cart',
            'name' => 'custom.sales',
            'permissions' => json_encode(['view_clients']),
            'order' => 2,
        ], [
            ['name' => 'custom.clients', 'url' => '/clients/index?per_page=10&page=1', 'permissions' => json_encode(['view_clients'])],
            ['name' => 'custom.invoices', 'url' => '/invoices', 'permissions' => json_encode(['view_invoices'])],
            ['name' => 'custom.credit_notes', 'url' => '/credit-notes', 'permissions' => json_encode(['view_credit_notes'])],
          
           
          
        ]);

        $createMenu([
            'menu_id' => 'purchases',
            'icon' => 'credit-card',
            'name' => 'custom.purchases',
            'permissions' => json_encode([ 'view_vendors']),
            'order' => 3,
        ], [
           
            ['name' => 'custom.vendors', 'url' => '/vendors', 'permissions' => json_encode(['view_vendors'])],
            ['name' => 'custom.bills', 'url' => '/bills', 'permissions' => json_encode(['view_bills'])],
            ['name' => 'custom.purchase_orders', 'url' => '/purchase-orders', 'permissions' => json_encode(['view_purchase_orders'])],
            ['name' => 'custom.credit_notes', 'url' => '/credit-notes', 'permissions' => json_encode(['view_credit_notes'])],
          
        ]);


        $createMenu([
            'menu_id' => 'vouchers',
            'icon' => 'file-text',
            'name' => 'custom.vouchers',
            'permissions' => json_encode([ 'view_revenues', 'view_payments']),
            'order' => 4,
        ], [
           
            ['name' => 'custom.revenues', 'url' => '/revenues', 'permissions' => json_encode(['view_revenues'])],
            ['name' => 'custom.payments', 'url' => '/payments', 'permissions' => json_encode(['view_payments'])],
          
        ]);



        $createMenu([
            'menu_id' => 'accounts',
            'icon' => 'book',
            'name' => 'custom.accounts',
            'permissions' => json_encode([ 'view_chart_of_accounts','view_banks','view_bank_accounts']),
            'order' => 5,
        ], [
           
            ['name' => 'custom.chart_of_accounts', 'url' => '/chart-of-accounts', 'permissions' => json_encode(['view_chart_of_accounts'])],
            ['name' => 'custom.bank_and_cash', 'url' => '/bank-and-cash', 'permissions' => json_encode(['view_banks','view_bank_accounts'])],
           
          
        ]);




         // // ================= Single Level Menus =================
         SidebarMenu::insert([
            ['icon' => 'user-check', 'name' => 'custom.user_and_roles', 'url' => '/users-and-roles', 'permissions' => json_encode(['view_users', 'view_roles', 'invite_user', 'create_roles']), 'order' => 5],
        ]);


        
    


         SidebarMenu::insert([
            // ['icon' => 'message-square', 'name' => 'default.chat', 'url' => '/chat', 'permissions' => json_encode(['view_chat']), 'order' => 7],
            // ['icon' => 'map', 'name' => 'default.maps', 'url' => '/maps', 'permissions' => json_encode(['view_map']), 'order' => 8],
            // ['icon' => 'calendar', 'name' => 'custom.calendar_view', 'url' => '/calendar-view', 'permissions' => json_encode(['manage_calendar_view']), 'order' => 9],
            // ['icon' => 'columns', 'name' => 'custom.kanban_view', 'url' => '/kanban-view', 'permissions' => json_encode(['manage_kanban_view']), 'order' => 10],
            // ['icon' => 'credit-card', 'name' => 'custom.payment_method', 'url' => '/payment-view', 'permissions' => json_encode(['view_payment_method']), 'order' => 11],
            // ['icon' => 'user-check', 'name' => 'custom.user_and_roles', 'url' => '/users-and-roles', 'permissions' => json_encode(['view_users', 'view_roles', 'invite_user', 'create_roles']), 'order' => 12],
            ['icon' => 'settings', 'name' => 'custom.settings', 'url' => '/app-setting', 'permissions' => json_encode([
                'view_settings', 'update_settings', 'view_delivery_settings', 'update_delivery_settings',
                'view_sms_settings', 'update_sms_settings', 'view_recaptcha_settings',
                'view_payment_method', 'update_payment_method', 'delete_payment_method',
                'view_notification_settings', 'update_notification_settings', 'update_notification_templates',
                'view_notification_templates'
            ]), 'order' => 13],
            // ['icon' => 'book', 'name' => 'default.documentation', 'url' => '/documentation/index.html', 'permissions' => json_encode(['view_map']), 'order' => 14],
        ]);






















        // ================= Authentication =================
        // $createMenu([
        //     'menu_id' => 'auth-pages',
        //     'icon' => 'power',
        //     'name' => 'authentication',
        //     'permissions' => json_encode(['view_registration', 'view_forget_password', 'view_reset_password']),
        //     'order' => 2,
        // ], [
        //     ['name' => 'custom.registration', 'url' => '/user/registration', 'permissions' => json_encode(['view_registration'])],
        //     ['name' => 'custom.forget_password', 'url' => '/forget-password', 'permissions' => json_encode(['view_forget_password'])],
        //     ['name' => 'custom.reset_password', 'url' => '/reset/password', 'permissions' => json_encode(['view_reset_password'])],
        // ]);

        // // ================= DataTables =================
        // $createMenu([
        //     'menu_id' => 'tables',
        //     'icon' => 'grid',
        //     'name' => 'custom.datatables',
        //     'permissions' => json_encode([
        //         'view_basic_datatable', 'manage_functional_datatable', 'manage_advance_datatable',
        //         'view_responsive_datatable', 'manage_filter_type_datatable', 'manage_paginated_datatable',
        //         'manage_gird_view_datatable'
        //     ]),
        //     'order' => 3,
        // ], [
        //     ['name' => 'custom.basic', 'url' => '/tables/basic-datatable', 'permissions' => json_encode(['view_basic_datatable'])],
        //     ['name' => 'custom.functional', 'url' => '/tables/functional', 'permissions' => json_encode(['manage_functional_datatable'])],
        //     ['name' => 'custom.advance', 'url' => '/tables/advance', 'permissions' => json_encode(['manage_advance_datatable'])],
        //     ['name' => 'custom.responsive', 'url' => '/tables/responsive', 'permissions' => json_encode(['view_responsive_datatable'])],
        //     ['name' => 'custom.filter_type', 'url' => '/tables/filter', 'permissions' => json_encode(['manage_filter_type_datatable'])],
        //     ['name' => 'custom.grid_view', 'url' => '/tables/grid-view', 'permissions' => json_encode(['manage_gird_view_datatable'])],
        //     ['name' => 'custom.paginated', 'url' => '/tables/pagination', 'permissions' => json_encode(['manage_paginated_datatable'])],
        // ]);

        // // ================= Forms & Fields =================
        // $createMenu([
        //     'menu_id' => 'forms',
        //     'icon' => 'sidebar',
        //     'name' => 'custom.forms_and_fields',
        //     'permissions' => json_encode(['view_form_layouts', 'view_form_elements', 'view_form_validation', 'view_form_text_editor']),
        //     'order' => 4,
        // ], [
        //     ['name' => 'custom.form_layouts', 'url' => '/form/layouts', 'permissions' => json_encode(['view_form_layouts'])],
        //     ['name' => 'custom.form_elements', 'url' => '/form/elements', 'permissions' => json_encode(['view_form_elements'])],
        //     ['name' => 'custom.form_validations', 'url' => '/form/validation', 'permissions' => json_encode(['view_form_validation'])],
        //     ['name' => 'custom.form_wizard', 'url' => '/form-wizard', 'permissions' => json_encode(['view_form_wizard'])],
        //     ['name' => 'custom.text_editor', 'url' => '/form/text', 'permissions' => json_encode(['view_form_text_editor'])],
        // ]);

        // // ================= UI Elements =================
        // $createMenu([
        //     'menu_id' => 'ui',
        //     'icon' => 'trello',
        //     'name' => 'custom.ui_elements',
        //     'permissions' => json_encode([
        //         'view_ui_avatar', 'view_ui_badges_pill', 'view_buttons', 'view_cards',
        //         'view_checkboxes_radios', 'view_error_notes', 'view_icons', 'view_modals',
        //         'view_nothing_to_show', 'view_tabs'
        //     ]),
        //     'order' => 5,
        // ], [
        //     ['name' => 'custom.avatars', 'url' => '/avatars', 'permissions' => json_encode(['view_ui_avatar'])],
        //     ['name' => 'custom.badges_and_pills', 'url' => '/badges', 'permissions' => json_encode(['view_ui_badges_pill'])],
        //     ['name' => 'custom.buttons', 'url' => '/buttons', 'permissions' => json_encode(['view_buttons'])],
        //     ['name' => 'custom.cards', 'url' => '/cards', 'permissions' => json_encode(['view_cards'])],
        //     ['name' => 'custom.checkboxes_and_radios', 'url' => '/checkboxes-radios', 'permissions' => json_encode(['view_checkboxes_radios'])],
        //     ['name' => 'custom.notes', 'url' => '/error-notes', 'permissions' => json_encode(['view_error_notes'])],
        //     ['name' => 'custom.icons', 'url' => '/icons', 'permissions' => json_encode(['view_icons'])],
        //     ['name' => 'custom.modals', 'url' => '/modal', 'permissions' => json_encode(['view_modals'])],
        //     ['name' => 'custom.nothing_to_show', 'url' => '/nothing-to-show', 'permissions' => json_encode(['view_nothing_to_show'])],
        //     ['name' => 'custom.tabs', 'url' => '/tabs', 'permissions' => json_encode(['view_tabs'])],
        //     ['name' => 'custom.progress_bars', 'url' => '/progress-bars', 'permissions' => json_encode(['view_tabs'])],
        // ]);

        // // ================= Pages =================
        // $createMenu([
        //     'menu_id' => 'pages',
        //     'icon' => 'copy',
        //     'name' => 'default.sample_pages',
        //     'permissions' => json_encode(['view_user_profile', 'view_blank_page']),
        //     'order' => 6,
        // ], [
        //     ['name' => 'custom.user_profile', 'url' => '/my-profile', 'permissions' => json_encode(['view_user_profile'])],
        //     ['name' => 'custom.report', 'url' => '/report-view', 'permissions' => json_encode(['manage_report_view'])],
        //     ['name' => 'custom.invoice', 'url' => '/invoice-page', 'permissions' => json_encode(['view_invoice_page'])],
        //     ['name' => 'custom.blank_page', 'url' => '/blank-page', 'permissions' => json_encode(['view_blank_page'])],
        // ]);

       

        // // ================= Social Network =================
        // $createMenu([
        //     'menu_id' => 'social_network',
        //     'icon' => 'users',
        //     'name' => 'default.social_network',
        //     'permissions' => json_encode(['view_user_profile', 'view_blank_page']),
        //     'order' => 15,
        // ], [
        //     ['name' => 'default.feeds', 'url' => '/social-feeds', 'permissions' => json_encode(['news_feeds'])],
        //     ['name' => 'default.profile', 'url' => '/social-profile', 'permissions' => json_encode(['manage_report_view'])],
        // ]);

        // // ================= Error Pages =================
        // $createMenu([
        //     'menu_id' => 'error-pages',
        //     'icon' => 'alert-triangle',
        //     'name' => 'custom.error_pages',
        //     'permissions' => json_encode(['view_error_400', 'view_error_401', 'view_error_403', 'view_error_404', 'view_error_500', 'view_error_503']),
        //     'order' => 16,
        // ], [
        //     ['name' => 'custom.error_400', 'url' => '/error-400', 'permissions' => json_encode(['view_error_400'])],
        //     ['name' => 'custom.error_401', 'url' => '/error-401', 'permissions' => json_encode(['view_error_401'])],
        //     ['name' => 'custom.error_403', 'url' => '/error-403', 'permissions' => json_encode(['view_error_403'])],
        //     ['name' => 'custom.error_404', 'url' => '/error-404', 'permissions' => json_encode(['view_error_404'])],
        //     ['name' => 'custom.error_500', 'url' => '/error-500', 'permissions' => json_encode(['view_error_500'])],
        //     ['name' => 'custom.error_503', 'url' => '/error-503', 'permissions' => json_encode(['view_error_503'])],
        // ]);
        tenancy()->end();
        });
    }
}
