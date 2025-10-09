<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Quotation extends Model
{
    use Sluggable, HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'quotation_no', 'slug', 'client_id', 'reference', 'transport', 'discount_type', 'discount', 'total_tax', 'sub_total', 'po_reference', 'payment_terms', 'delivery_place', 'tax_id', 'quotation_date', 'created_by', 'note', 'status',
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
                'source' => 'quotation_no',
            ],
        ];
    }

    // return discount percentage
    public function discountPercentage()
    {
        $percentage = null;
        if ($this->discount_type == 1) {
            $percentage = ($this->discount * 100) / ($this->sub_total);
        }

        return (int) $percentage;
    }

    // quotation total
    public function quotationTotal()
    {
        $productDiscounts = $this->quotationProducts->sum('discount_amount');
        // sub_total already includes VAT from the frontend calculation
        // so we don't need to add total_tax again
        return $this->sub_total + $this->transport - $productDiscounts;
    }

    /**
     * Get the tax for this quotation.
     */
    public function quotationTax()
    {
        return $this->belongsTo(VatRate::class, 'tax_id');
    }

    /**
     * Get the quotation products.
     */
    public function quotationProducts()
    {
        return $this->hasMany(QuotationProduct::class, 'quotation_id');
    }

    /**
     * Get the client for this quotation.
     */
    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id');
    }

    /**
     * Get the user who had created this quotation.
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * Get calculated tax attribute.
     */
    public function getCalculatedTaxAttribute()
    {
        return $this->total_tax ?? 0;
    }

    /**
     * Get calculated total attribute.
     */
    public function getCalculatedTotalAttribute()
    {
        return $this->quotationTotal();
    }
}
