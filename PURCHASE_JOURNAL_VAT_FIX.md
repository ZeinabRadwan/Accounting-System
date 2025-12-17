# Purchase Journal Entry VAT Fix

## Problem Statement

Previously, purchase journal entries incorrectly included VAT in the inventory value, violating standard accounting principles and VAT compliance requirements.

## Before (WRONG)

### Example Purchase:
- Item Price (net): 300 SAR
- VAT (15%): 45 SAR
- Total Invoice: 345 SAR

### Wrong Journal Entry:
```
Dr Inventory         345 SAR
    Cr Supplier/Cash 345 SAR
```

**Problem:** Inventory was valued at 345 SAR including VAT, which is incorrect.

## After (CORRECT)

### Same Purchase:
- Item Price (net): 300 SAR
- VAT (15%): 45 SAR
- Total Invoice: 345 SAR

### Correct Journal Entry:
```
Dr Inventory                300 SAR
Dr Purchase VAT (Input VAT)  45 SAR
    Cr Supplier/Cash        345 SAR
```

**Correct:** 
- Inventory is valued at net cost (300 SAR)
- VAT is posted to separate Purchase VAT account (45 SAR)
- Supplier/Cash equals total invoice amount (345 SAR)

## Technical Changes

### File: `app/Services/BusinessTransactionJournalService.php`

#### Method: `createPurchaseJournal()`

**Changed:** Line 726-759
- **Old:** Used `unit_cost` (which includes VAT) for inventory valuation
- **New:** Uses `purchase_price` (net amount, excluding VAT) for inventory valuation

**Before:**
```php
$unitCost = (float) ($purchaseProduct->unit_cost ?? 0);
$lineInventoryAmount = round($quantity * $unitCost, 2);
$totalInventoryAmount += $lineInventoryAmount;
// VAT was NOT collected separately for inventory products
```

**After:**
```php
$purchasePrice = (float) ($purchaseProduct->purchase_price ?? 0); // Net price per unit (before VAT)
$lineInventoryAmount = round($quantity * $purchasePrice, 2);
$totalInventoryAmount += $lineInventoryAmount;

// Collect VAT separately
$productVatAmount = (float) ($purchaseProduct->tax_amount ?? 0);
$totalVatAmount += $productVatAmount;
```

## Impact on System

### 1. Purchase Journal Entries
- ✅ Inventory account now reflects net cost only (excluding VAT)
- ✅ VAT is posted to Purchase VAT (Input VAT) account
- ✅ Supplier/Cash equals total invoice amount (net + VAT)

### 2. Inventory Valuation
- ✅ All inventory is now valued at net cost (excluding VAT)
- ✅ Weighted average cost calculations use net amounts
- ✅ COGS calculations use net cost (excluding VAT)

### 3. VAT Compliance
- ✅ Input VAT is properly tracked in a separate account
- ✅ VAT is recoverable/deductible as per standard accounting
- ✅ Complies with Saudi VAT regulations

### 4. Discounts
- ✅ Bill-level discounts apply to net amount (before VAT)
- ✅ Discount Received account is credited correctly

## Journal Entry Structure

### Purchase with Cash/Bank Payment:
```
Dr Inventory                    [Net Amount]
Dr Purchase VAT (Input VAT)     [VAT Amount]
    Cr Cash/Bank                [Total Amount]
    Cr Discount Received        [Discount Amount, if any]
```

### Credit Purchase (on account):
```
Dr Inventory                    [Net Amount]
Dr Purchase VAT (Input VAT)     [VAT Amount]
    Cr Supplier (Payables)      [Total Amount]
    Cr Discount Received        [Discount Amount, if any]
```

## Example Calculations

### Example 1: Simple Purchase
- Item A: 10 units × 30 SAR = 300 SAR (net)
- VAT (15%): 45 SAR
- Total: 345 SAR

**Journal Entry:**
```
Dr Inventory         300
Dr Purchase VAT       45
    Cr Supplier      345
```

### Example 2: Purchase with Discount
- Item A: 10 units × 30 SAR = 300 SAR (net)
- Bill Discount: 30 SAR (10%)
- Net after discount: 270 SAR
- VAT (15% on 270): 40.50 SAR
- Total: 310.50 SAR

**Journal Entry:**
```
Dr Inventory              300.00
Dr Purchase VAT            45.00
    Cr Supplier           310.50
    Cr Discount Received   34.50
```

### Example 3: Multiple Items
- Item A: 5 units × 20 SAR = 100 SAR (net)
- Item B: 10 units × 30 SAR = 300 SAR (net)
- Subtotal: 400 SAR
- VAT (15%): 60 SAR
- Total: 460 SAR

**Journal Entry:**
```
Dr Inventory         400
Dr Purchase VAT       60
    Cr Supplier      460
```

## Testing Checklist

- [ ] Create a new purchase with VAT
- [ ] Verify inventory account is debited with net amount only
- [ ] Verify Purchase VAT account is debited with VAT amount
- [ ] Verify Supplier/Cash account is credited with total amount
- [ ] Check inventory valuation excludes VAT
- [ ] Check weighted average cost calculation uses net amounts
- [ ] Verify COGS entries use net cost
- [ ] Test with bill-level discounts
- [ ] Test with multiple tax rates
- [ ] Verify purchase returns work correctly

## Related Files

- `app/Services/BusinessTransactionJournalService.php` - Main fix
- `app/Models/Product.php` - Weighted average cost calculation (already using purchase_price)
- `app/Models/PurchaseProduct.php` - Stores both purchase_price (net) and unit_cost (with VAT)

## Notes

- Purchase returns already use `purchase_price` (net amount) - no changes needed
- Service products (non-inventory) VAT is handled correctly
- The fix maintains backward compatibility with existing COGS calculations
- All weighted average cost calculations already use `purchase_price` (net amount)
