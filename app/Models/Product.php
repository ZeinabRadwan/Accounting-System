<?php

namespace App\Models;

use Spatie\MediaLibrary\HasMedia;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Cviebrock\EloquentSluggable\Sluggable;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use App\Models\ChartOfAccount;

class Product extends Model implements HasMedia
{
    use Sluggable, HasFactory, InteractsWithMedia;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'is_service', 'name', 'slug', 'code', 'model', 'barcode_symbology', 'sub_cat_id', 'brand_id', 'unit_id', 'tax_id', 'sales_account_id', 'purchase_account_id', 'tax_type', 'purchase_price', 'regular_price', 'discount', 'inventory_count', 'opening_stock_count', 'opening_stock_unit_price', 'alert_qty', 'note', 'status', 'image_path',
    ];

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
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
        if ($productTax->rate > 0) {
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
            $price = (($this->regular_price - $this->discountAmount()) / (1 + $this->productTax->rate / 100)) + $this->taxAmount();
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
        return !is_null($this->sales_account_id);
    }

    /**
     * Check if the product has a purchase account assigned
     */
    public function hasPurchaseAccount()
    {
        return !is_null($this->purchase_account_id);
    }

    /**
     * Get validation message for sales account
     */
    public function getSalesAccountValidationMessage()
    {
        if (!$this->hasSalesAccount()) {
            return 'Product must have a Sales Account assigned for journal entries.';
        }
        return null;
    }

    /**
     * Get validation message for purchase account
     */
    public function getPurchaseAccountValidationMessage()
    {
        if (!$this->hasPurchaseAccount()) {
            return 'Product must have a Purchase Account assigned for journal entries.';
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
        
        // Look for default accounts based on product type
        if (isset($productData['type'])) {
            switch ($productData['type']) {
                case 'Service':
                    $defaultSalesAccount = \App\Models\ChartOfAccount::where('is_active', true)
                        ->where('name', 'like', '%Service Revenue%')
                        ->first();
                    $defaultPurchaseAccount = \App\Models\ChartOfAccount::where('is_active', true)
                        ->where('name', 'like', '%Service Expense%')
                        ->first();
                    break;
                case 'Product':
                default:
                    $defaultSalesAccount = \App\Models\ChartOfAccount::where('is_active', true)
                        ->where('name', 'like', '%Sales Revenue%')
                        ->first();
                    $defaultPurchaseAccount = \App\Models\ChartOfAccount::where('is_active', true)
                        ->where('name', 'like', '%Purchase Expense%')
                        ->first();
                    break;
            }
        }

        // Fallback to any available accounts
        if (!$defaultSalesAccount) {
            $defaultSalesAccount = \App\Models\ChartOfAccount::where('is_active', true)
                ->whereHas('type', function($query) {
                    $query->where('name', 'Revenue');
                })
                ->first();
        }

        if (!$defaultPurchaseAccount) {
            $defaultPurchaseAccount = \App\Models\ChartOfAccount::where('is_active', true)
                ->whereHas('type', function($query) {
                    $query->where('name', 'Expense');
                })
                ->first();
        }

        // Only assign sales account if not already set
        if ($defaultSalesAccount && !$hasSalesAccount) {
            $productData['sales_account_id'] = $defaultSalesAccount->id;
        }

        // Only assign purchase account if not already set
        if ($defaultPurchaseAccount && !$hasPurchaseAccount) {
            $productData['purchase_account_id'] = $defaultPurchaseAccount->id;
        }

        return $productData;
    }
}
