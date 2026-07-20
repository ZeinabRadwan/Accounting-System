<?php

namespace App\Domain\Notifications\Enums;

enum NotificationEvent: string
{
    case SalesInvoiceCreated = 'sales_invoice_created';
    case SalesInvoiceCancelled = 'sales_invoice_cancelled';
    case SalesInvoiceVisible = 'sales_invoice_visible';
    case PurchaseInvoiceCreated = 'purchase_invoice_created';
    case SalesReturnCreated = 'sales_return_created';
    case PurchaseReturnCreated = 'purchase_return_created';
    case TransferCompleted = 'transfer_completed';
    case TransferStockReceived = 'transfer_stock_received';
    case UserCreated = 'user_created';
    case UserDeleted = 'user_deleted';
    case UserRoleChanged = 'user_role_changed';
    case UserPermissionsChanged = 'user_permissions_changed';
    case BranchCreated = 'branch_created';
    case BranchUpdated = 'branch_updated';
    case BranchDeleted = 'branch_deleted';
    case BranchStatusChanged = 'branch_status_changed';
    case BranchGeofenceChanged = 'branch_geofence_changed';
    case ProductCreated = 'product_created';
    case ProductUpdated = 'product_updated';
    case ProductDeleted = 'product_deleted';
    case InventoryLow = 'inventory_low';
    case InventoryZero = 'inventory_zero';
    case InventoryRestocked = 'inventory_restocked';
    case TreasuryLargeTransaction = 'treasury_large_transaction';
    case DailyClosingCompleted = 'daily_closing_completed';
    case DailyVisibilityGenerated = 'daily_visibility_generated';
    case SettingsChanged = 'settings_changed';
    case InvoiceTemplateUpdated = 'invoice_template_updated';
    case SessionExpiring = 'session_expiring';
    case OutsideGeofence = 'outside_geofence';

    public function label(): string
    {
        return match ($this) {
            self::SalesInvoiceCreated => 'New Sales Invoice',
            self::SalesInvoiceCancelled => 'Sales Invoice Cancelled',
            self::SalesInvoiceVisible => 'Sales Invoice Became Visible',
            self::PurchaseInvoiceCreated => 'New Purchase Invoice',
            self::SalesReturnCreated => 'Sales Return Created',
            self::PurchaseReturnCreated => 'Purchase Return Created',
            self::TransferCompleted => 'Warehouse Transfer Completed',
            self::TransferStockReceived => 'Stock Received via Transfer',
            self::UserCreated => 'User Created',
            self::UserDeleted => 'User Deleted',
            self::UserRoleChanged => 'User Role Changed',
            self::UserPermissionsChanged => 'User Permissions Changed',
            self::BranchCreated => 'Branch Created',
            self::BranchUpdated => 'Branch Updated',
            self::BranchDeleted => 'Branch Deleted',
            self::BranchStatusChanged => 'Branch Status Changed',
            self::BranchGeofenceChanged => 'Branch Location Settings Changed',
            self::ProductCreated => 'Product Created',
            self::ProductUpdated => 'Product Updated',
            self::ProductDeleted => 'Product Deleted',
            self::InventoryLow => 'Low Stock',
            self::InventoryZero => 'Out of Stock',
            self::InventoryRestocked => 'Product Available Again',
            self::TreasuryLargeTransaction => 'Large Treasury Transaction',
            self::DailyClosingCompleted => 'Daily Closing Completed',
            self::DailyVisibilityGenerated => 'Daily Invoice Visibility Generated',
            self::SettingsChanged => 'System Settings Changed',
            self::InvoiceTemplateUpdated => 'Invoice Template Updated',
            self::SessionExpiring => 'Session About to Expire',
            self::OutsideGeofence => 'Outside Allowed Location',
        };
    }

    public function module(): string
    {
        return match ($this) {
            self::SalesInvoiceCreated, self::SalesInvoiceCancelled, self::SalesInvoiceVisible => 'sales',
            self::PurchaseInvoiceCreated => 'purchases',
            self::SalesReturnCreated, self::PurchaseReturnCreated => 'returns',
            self::TransferCompleted, self::TransferStockReceived => 'transfers',
            self::UserCreated, self::UserDeleted, self::UserRoleChanged, self::UserPermissionsChanged => 'users',
            self::BranchCreated, self::BranchUpdated, self::BranchDeleted, self::BranchStatusChanged, self::BranchGeofenceChanged => 'branches',
            self::ProductCreated, self::ProductUpdated, self::ProductDeleted => 'products',
            self::InventoryLow, self::InventoryZero, self::InventoryRestocked => 'inventory',
            self::TreasuryLargeTransaction => 'treasuries',
            self::DailyClosingCompleted => 'daily_closings',
            self::DailyVisibilityGenerated => 'settings',
            self::SettingsChanged, self::InvoiceTemplateUpdated => 'settings',
            self::SessionExpiring, self::OutsideGeofence => 'security',
        };
    }

    public function defaultTone(): string
    {
        return match ($this) {
            self::SalesInvoiceCancelled, self::UserDeleted, self::BranchDeleted, self::ProductDeleted,
            self::InventoryZero, self::OutsideGeofence => 'error',
            self::InventoryLow, self::TreasuryLargeTransaction, self::SessionExpiring,
            self::BranchStatusChanged => 'warning',
            self::SalesInvoiceCreated, self::PurchaseInvoiceCreated, self::TransferCompleted,
            self::TransferStockReceived, self::InventoryRestocked, self::DailyClosingCompleted,
            self::SalesInvoiceVisible => 'success',
            default => 'info',
        };
    }

    public function defaultIcon(): string
    {
        return match ($this->module()) {
            'sales' => 'shopping-cart',
            'purchases' => 'clipboard',
            'returns' => 'receipt-refund',
            'transfers' => 'switch-horizontal',
            'users' => 'users',
            'branches' => 'building',
            'products' => 'cube',
            'inventory' => 'archive',
            'treasuries' => 'cash',
            'daily_closings' => 'calendar',
            'settings' => 'cog',
            'security' => 'exclamation',
            default => 'bell',
        };
    }

    /**
     * Roles that can receive this event by default.
     *
     * @return list<string>
     */
    public function defaultRoles(): array
    {
        return match ($this) {
            self::SalesInvoiceCreated,
            self::SalesInvoiceCancelled,
            self::UserCreated,
            self::UserDeleted,
            self::UserRoleChanged,
            self::UserPermissionsChanged,
            self::BranchCreated,
            self::BranchUpdated,
            self::BranchDeleted,
            self::ProductCreated,
            self::ProductUpdated,
            self::ProductDeleted,
            self::TreasuryLargeTransaction,
            self::DailyClosingCompleted,
            self::DailyVisibilityGenerated,
            self::SettingsChanged,
            self::InvoiceTemplateUpdated => ['super_admin'],

            self::SalesInvoiceVisible,
            self::PurchaseInvoiceCreated,
            self::SalesReturnCreated,
            self::PurchaseReturnCreated,
            self::TransferCompleted,
            self::InventoryLow,
            self::InventoryZero => ['super_admin', 'admin'],

            self::TransferStockReceived,
            self::InventoryRestocked,
            self::BranchGeofenceChanged,
            self::BranchStatusChanged,
            self::SessionExpiring,
            self::OutsideGeofence => ['sales'],
        };
    }

    /**
     * @return list<self>
     */
    public static function configurable(): array
    {
        return self::cases();
    }
}
