<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Product extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia, Sluggable, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'is_service', 'name', 'slug', 'code', 'model', 'barcode_symbology', 'sub_cat_id', 'brand_id', 'unit_id', 'tax_id', 'sales_account_id', 'purchase_account_id', 'tax_type', 'purchase_price', 'regular_price', 'discount', 'inventory_count', 'opening_stock_count', 'opening_stock_unit_price', 'alert_qty', 'note', 'status', 'image_path', 'branch_id',
    ];

    /**
     * Return the sluggable configuration array for this model.
     */
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name',
            ],
        ];
    }

    // return product images location using spatie media library
    public function getMediaUrls($collectionName)
    {
        return $this->getMedia($collectionName)->map(function (Media $media) {
            return $media->getUrl();
        });
    }

    // return product discount amount
    public function discountAmount()
    {
        $discount = 0;
        if ($this->discount > 0) {
            $discount = ($this->discount / 100) * $this->regular_price;
        }

        return $discount;
    }

    // return product tax
    public function taxAmount()
    {
        $totalTax = $tax = 0;
        $currentPrice = $this->regular_price - $this->discountAmount();
        $productTax = $this->productTax;
        if ($productTax && $productTax->rate > 0) {
            $tax = ($productTax->rate / 100);
        }

        if ($this->tax_type == 'Exclusive') {
            $totalTax = $currentPrice * $tax;
        } else {
            $totalTax = $currentPrice - ($currentPrice / (1 + $tax));
        }

        return round($totalTax, 2);
    }

    // return product  price with discount
    public function priceWithDiscount()
    {
        return round($this->regular_price - $this->discountAmount(), 2);
    }

    // return product selling price
    public function sellingPrice()
    {
        $price = 0;
        if ($this->tax_type == 'Exclusive') {
            $price = $this->regular_price - $this->discountAmount() + $this->taxAmount();
        } else {
            $taxRate = $this->productTax ? $this->productTax->rate : 0;
            $price = (($this->regular_price - $this->discountAmount()) / (1 + $taxRate / 100)) + $this->taxAmount();
        }

        return round($price, 2);
    }

    // return purchase qty
    public function purchaseQty()
    {
        $purchaseProducts = $this->purchaseProducts;

        return isset($purchaseProducts) ? $purchaseProducts->sum('quantity') : 0;
    }

    // return invoice qty
    public function invoiceQty()
    {
        $invoiceProducts = $this->invoiceProducts;

        return isset($invoiceProducts) ? $invoiceProducts->sum('quantity') : 0;
    }

    // return invoice return qty
    public function invoiceReturnQty()
    {
        $invoiceReturnProducts = $this->invoiceReturnProducts;

        return isset($invoiceReturnProducts) ? $invoiceReturnProducts->sum('quantity') : 0;
    }

    // return increment adjustments
    public function incrementAdjustments()
    {
        $incrementAdjustments = $this->adjustmentProducts;

        return isset($incrementAdjustments) ? $incrementAdjustments->where('type', 1)->sum('quantity') : 0;
    }

    // return decrement adjustments
    public function decrementAdjustments()
    {
        $decrementAdjustments = $this->adjustmentProducts;

        return isset($decrementAdjustments) ? $decrementAdjustments->where('type', 0)->sum('quantity') : 0;
    }

    /**
     * Return relation with PurchaseProduct Model
     */
    public function purchaseProducts()
    {
        return $this->hasMany(PurchaseProduct::class, 'product_id');
    }

    /**
     * Return relation with InvoiceProduct Model
     */
    public function invoiceProducts()
    {
        return $this->hasMany(InvoiceProduct::class, 'product_id');
    }

    /**
     * Return relation with InvoiceReturnProduct Model
     */
    public function invoiceReturnProducts()
    {
        return $this->hasMany(InvoiceReturnProduct::class, 'product_id');
    }

    /**
     * Return relation with AdjustmentProduct Model
     */
    public function adjustmentProducts()
    {
        return $this->hasMany(AdjustmentProduct::class, 'product_id');
    }

    /**
     * Get the category that owns the product.
     */
    public function proSubCategory()
    {
        return $this->belongsTo(ProductSubCategory::class, 'sub_cat_id');
    }

    /**
     * Get the unit.
     */
    public function productUnit()
    {
        return $this->belongsTo(Unit::class, 'unit_id');
    }

    /**
     * Get the brand.
     */
    public function productBrand()
    {
        return $this->belongsTo(Brand::class, 'brand_id');
    }

    /**
     * Get the tax.
     */
    public function productTax()
    {
        return $this->belongsTo(VatRate::class, 'tax_id');
    }

    /**
     * Get the sales account.
     */
    public function salesAccount()
    {
        return $this->belongsTo(ChartOfAccount::class, 'sales_account_id');
    }

    /**
     * Get the purchase account.
     */
    public function purchaseAccount()
    {
        return $this->belongsTo(ChartOfAccount::class, 'purchase_account_id');
    }

    /**
     * Check if the product has a sales account assigned
     */
    public function hasSalesAccount()
    {
        return ! is_null($this->sales_account_id);
    }

    /**
     * Check if the product has a purchase account assigned
     */
    public function hasPurchaseAccount()
    {
        return ! is_null($this->purchase_account_id);
    }

    /**
     * Get the purchase account with fallback to routing settings
     */
    public function getPurchaseAccountWithFallback()
    {
        // First try to get the individual product purchase account
        if ($this->purchase_account_id) {
            return $this->purchaseAccount;
        }

        // Fallback to the product purchase account from routing settings
        $routingSetting = \App\Models\AccountRoutingSetting::where('module', 'purchase')
            ->where('setting_key', 'product_purchase_account')
            ->first();

        if ($routingSetting && $routingSetting->parent_account_id) {
            return \App\Models\ChartOfAccount::find($routingSetting->parent_account_id);
        }

        return null;
    }

    /**
     * Check if the product has a purchase account assigned (including fallback)
     */
    public function hasPurchaseAccountWithFallback()
    {
        return $this->getPurchaseAccountWithFallback() !== null;
    }

    /**
     * Get validation message for sales account
     */
    public function getSalesAccountValidationMessage()
    {
        if (! $this->hasSalesAccount()) {
            return 'Product must have a Sales Account assigned for journal entries.';
        }

        return null;
    }

    /**
     * Get validation message for purchase account
     */
    public function getPurchaseAccountValidationMessage()
    {
        if (! $this->hasPurchaseAccountWithFallback()) {
            return 'Product must have a Purchase Account assigned for journal entries or a default Product Purchase Account configured in routing settings.';
        }

        return null;
    }

    /**
     * Automatically assign default Chart of Account if none is set
     */
    public static function assignDefaultChartOfAccount($productData)
    {
        // Check if both accounts are already assigned
        $hasSalesAccount = isset($productData['sales_account_id']) && $productData['sales_account_id'];
        $hasPurchaseAccount = isset($productData['purchase_account_id']) && $productData['purchase_account_id'];

        // If both accounts are already provided, use them
        if ($hasSalesAccount && $hasPurchaseAccount) {
            return $productData;
        }

        // Auto-assign based on product category or other criteria
        $defaultSalesAccount = null;
        $defaultPurchaseAccount = null;

        // First try to get accounts from routing settings
        $salesRoutingSetting = \App\Models\AccountRoutingSetting::where('module', 'sales')
            ->where('setting_key', 'product_sales_account')
            ->first();

        $purchaseRoutingSetting = \App\Models\AccountRoutingSetting::where('module', 'purchase')
            ->where('setting_key', 'product_purchase_account')
            ->first();

        if ($salesRoutingSetting && $salesRoutingSetting->routing_type == 'automatic' && $salesRoutingSetting->main_account_id) {
            $defaultSalesAccount = \App\Models\ChartOfAccount::find($salesRoutingSetting->main_account_id);
        }

        if ($purchaseRoutingSetting && $purchaseRoutingSetting->routing_type == 'automatic' && $purchaseRoutingSetting->main_account_id) {
            $defaultPurchaseAccount = \App\Models\ChartOfAccount::find($purchaseRoutingSetting->main_account_id);
        }

        // Only assign sales account if not already set
        if ($defaultSalesAccount && ! $hasSalesAccount) {
            $productData['sales_account_id'] = $defaultSalesAccount->id;
        }

        // Only assign purchase account if not already set
        if ($defaultPurchaseAccount && ! $hasPurchaseAccount) {
            $productData['purchase_account_id'] = $defaultPurchaseAccount->id;
        }

        return $productData;
    }

    /**
     * Get the branch for this product.
     */
    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }

    /**
     * Get the last purchase price from any supplier
     * IMPORTANT: Returns purchase_price (unit price before tax), NOT unit_cost
     *
     * @return float
     */
    public function getLastPurchasePriceAttribute()
    {
        $lastPurchaseProduct = $this->purchaseProducts()
            ->with('purchase')
            ->whereHas('purchase', function ($query) {
                $query->where('status', 1);
            })
            ->orderBy('created_at', 'desc')
            ->first();

        // Use purchase_price (unit price), NOT unit_cost (which includes tax)
        return $lastPurchaseProduct ? (float) $lastPurchaseProduct->purchase_price : (float) ($this->purchase_price ?? 0);
    }

    /**
     * Calculate weighted average purchase price for a specific supplier
     *
     * @param  int|null  $supplierId
     * @return float
     */
    public function getAveragePurchasePriceBySupplier($supplierId = null)
    {
        if (! $supplierId) {
            // If no supplier specified, return the current purchase_price
            return (float) ($this->purchase_price ?? 0);
        }

        // Get all purchase products for this product from the specified supplier
        $purchaseProducts = $this->purchaseProducts()
            ->with('purchase')
            ->whereHas('purchase', function ($query) use ($supplierId) {
                $query->where('supplier_id', $supplierId)
                    ->where('status', 1);
            })
            ->get();

        if ($purchaseProducts->isEmpty()) {
            // If no purchases from this supplier, return the current purchase_price or 0
            return (float) ($this->purchase_price ?? 0);
        }

        // Calculate weighted average: sum(quantity * purchase_price) / sum(quantity)
        // IMPORTANT: Use purchase_price (unit price before tax), NOT unit_cost (which includes tax)
        $totalCost = 0;
        $totalQuantity = 0;

        foreach ($purchaseProducts as $purchaseProduct) {
            $quantity = (float) $purchaseProduct->quantity;
            // Use purchase_price (unit price), NOT unit_cost (which includes tax and other costs)
            $price = (float) $purchaseProduct->purchase_price;

            $totalCost += $quantity * $price;
            $totalQuantity += $quantity;
        }

        if ($totalQuantity > 0) {
            return round($totalCost / $totalQuantity, 2);
        }

        return (float) ($this->purchase_price ?? 0);
    }
}
