<?php

namespace App\Enums;

enum JournalEntryType: string
{
    case Manual = 'manual';
    case OpeningEntry = 'opening_entry';
    case PaymentVoucher = 'payment_voucher';
    case ReceiptVoucher = 'receipt_voucher';
    case TransferVoucher = 'transfer_voucher';
    case PosSales = 'pos_sales';
    case Sales = 'sales';
    case SalesReturns = 'sales_returns';
    case Purchases = 'purchases';
    case PurchaseReturns = 'purchase_returns';
    case CreditNote = 'credit_note';
    case DebitNote = 'debit_note';
    case InventoryTransfer = 'inventory_transfer';
    case InventoryAdjustment = 'inventory_adjustment';

    public function label(): string
    {
        return match ($this) {
            self::Manual => __('Manual'),
            self::OpeningEntry => __('Opening Entry'),
            self::PaymentVoucher => __('Payment Voucher'),
            self::ReceiptVoucher => __('Receipt Voucher'),
            self::TransferVoucher => __('Transfer Voucher'),
            self::PosSales => __('POS Sales'),
            self::Sales => __('Sales'),
            self::SalesReturns => __('Sales Returns'),
            self::Purchases => __('Purchases'),
            self::PurchaseReturns => __('Purchase Returns'),
            self::CreditNote => __('Credit Note'),
            self::DebitNote => __('Debit Note'),
            self::InventoryTransfer => __('Inventory Transfer'),
            self::InventoryAdjustment => __('Inventory Adjustment'),
        };
    }

    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
}
