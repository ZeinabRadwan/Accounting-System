<?php

namespace App\Domain\Inventory\Enums;

enum MovementType: string
{
    case Purchase = 'purchase';
    case Sale = 'sale';
    case PurchaseReturn = 'purchase_return';
    case SalesReturn = 'sales_return';
    case TransferIn = 'transfer_in';
    case TransferOut = 'transfer_out';
}

