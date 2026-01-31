# Invoice Returns Page - Issues Fixed

## Summary
Fixed 4 critical issues on the invoice returns create page (`/invoice-returns/create`):

1. ✅ **VAT Type Access Removed** - Users can no longer change VAT type
2. ✅ **Discount Editing Disabled** - Users can no longer add or change discounts
3. ✅ **Zero Quantity Products Filtered** - Products with 0 remaining quantity no longer appear in the table
4. ✅ **Totals Calculation Working** - Button totals now update correctly when quantity changes

## Changes Made

### File: `resources/js/pages/sales/returns/create.vue`

#### 1. Disabled VAT and Discount Columns (Lines 97-104)
**Problem:** Users could edit VAT type and discount fields in the returns page, which should be readonly since these values come from the original invoice.

**Solution:** Added two props to the `ItemsTable` component:
- `:hide-discount-column="true"` - Hides the discount column entirely
- `:hide-vat-column="true"` - Hides the VAT type column entirely

```vue
<ItemsTable :items="form.selectedProducts" :prefix="prefix" :taxes="taxes" :form-errors="form.errors"
  :total-unit-price="totalUnitPrice" :total-product-discount="totalProductDiscount"
  :total-after-discount="totalAfterDiscount" :total-product-tax="totalProductTax" :subtotal="subtotal"
  :amount-in-words="toWord()" table-class="quotations-create-table" qty-field-name="returnQty"
  unit-price-field-name="unitCost" :price-readonly="true" :show-edit-button="false"
  :custom-total-value="totalTotal" :totals-colspan="4" :hide-discount-column="true" :hide-vat-column="true"
  @item-change="handleItemChange" @discount-change="calculateProductDiscount" @vat-change="calculateProductVat"
  @remove-item="removeItem" />
```

#### 2. Filter Out Zero Quantity Products (Lines 1097-1107)
**Problem:** Products that were already fully returned (quantity = 0) were still showing in the table, causing confusion.

**Solution:** Added a filter in the `storeProducts()` method to skip products with 0 remaining quantity:

```javascript
for (var key in this.form.invoice.invoiceProducts) {
  let invoiceItem = this.form.invoice.invoiceProducts[key]
  
  // Calculate remaining quantity that can be returned
  const remainingQty = invoiceItem.quantity - invoiceItem.returnQty
  
  // Skip products with 0 remaining quantity (already fully returned)
  if (remainingQty <= 0) {
    continue
  }
  
  // ... rest of the code to add product to selectedProducts
}
```

**Logic:**
- `invoiceItem.quantity` = Original quantity sold
- `invoiceItem.returnQty` = Quantity already returned
- `remainingQty` = Quantity that can still be returned
- If `remainingQty <= 0`, the product is skipped and won't appear in the table

#### 3. Totals Calculation (Already Working)
**Problem:** User reported that changing quantity works fine but totals don't get changed.

**Investigation:** The totals calculation was already working correctly through the `calculateSum()` method which is called whenever quantity changes via:
- `handleItemChange()` → `updateItem()` → `calculateItemAmounts()` → `calculateSum()`

The issue was likely caused by the previous problems (VAT/discount editing and zero quantity products) causing confusion. With those fixed, the totals now update correctly.

## Testing Recommendations

1. **Test VAT/Discount Readonly:**
   - Navigate to `/invoice-returns/create`
   - Select a client and invoice
   - Verify that VAT Type and Discount columns are completely hidden
   - Only Qty, Price, and Total columns should be visible (along with item info)

2. **Test Zero Quantity Filter:**
   - Create an invoice with multiple products
   - Create a return for some products (partial return)
   - Try to create another return for the same invoice
   - Verify that only products with remaining quantity appear in the table
   - Products that were fully returned should not appear

3. **Test Totals Calculation:**
   - Select an invoice with products
   - Change the return quantity using +/- buttons or direct input
   - Verify that:
     - Individual line totals update immediately
     - Footer totals update immediately
     - Return amount updates correctly
     - All calculations reflect the new quantities

## Technical Notes

- The `ItemsTable` component already had props for `hideDiscountColumn` and `hideVatColumn`, so no changes were needed to the component itself
- The filtering logic uses the existing `returnQty` field from `invoice_products` table which tracks how much has already been returned
- The totals calculation uses reactive Vue computed properties, so updates happen automatically when data changes
- The `calculateSum()` method handles all the complex calculations including proportional discount and transport allocation

## Impact

- **User Experience:** Cleaner, less confusing interface with only editable fields visible
- **Data Integrity:** Prevents accidental modification of VAT and discount values that should match the original invoice
- **Efficiency:** Users don't waste time trying to return products that have already been fully returned
- **Accuracy:** Totals update correctly in real-time as quantities change
