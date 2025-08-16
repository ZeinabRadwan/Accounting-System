<?php

namespace App\Models\App;

use App\Models\App\AppModel;
use App\Models\App\Traits\HasTranslations;
use App\Models\Core\Auth\User;
use App\Models\App\Client;
use App\Models\Traits\HasCalculations;
use App\Models\App\QuotationTranslation;
// use App\Models\App\Lead; // TODO: Create this model
// use App\Models\App\QuotationCategory; // TODO: Create this model
// use App\Models\App\Tax; // TODO: Create this model
// use App\Models\App\Country; // TODO: Create this model
// use App\Models\App\State; // TODO: Create this model
// use App\Models\App\City; // TODO: Create this model
// use App\Models\App\QuotationContent; // TODO: Create this model
// use App\Models\App\Invoice; // TODO: Create this model
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Builder;
use App\Models\Core\Traits\Uuid;

class Quotation extends AppModel
{
    use HasTranslations, Uuid, HasCalculations;

    protected $fillable = [
        'quotation_number',
        'sader_no',
        'quotation_type',
        'client_id',
        'lead_id',
        'offer_request_id',
        'responsible_id',
        'representative_id',
        'owner_id',
        'country_id',
        'state_id',
        'city_id',
        'project_type_id',
        'subject',
        'name',
        'mini_footer',
        'budget',
        'tax_id',
        'estimated_days',
        'quotation_date',
        'valid_until',
        'customer_approval',
        'approval_date',
        'approved_by',
        'approved_at',
        'status',
        'is_template',
        'is_proposal',
        'is_archived',
        'archived_by',
        'archived_at',
        'template',
        'lang',
        'is_signature',
        'is_stamp',
        'analyze_k_factor',
        'items_columns_show',
        'analyze_columns_show',
        'category_id',
        'created_by',
        'updated_by',
    ];

    protected $casts = [
        'quotation_type' => 'integer',
        'quotation_date' => 'date',
        'valid_until' => 'date',
        'approval_date' => 'date',
        'approved_at' => 'timestamp',
        'archived_at' => 'timestamp',
        'budget' => 'decimal:2',
        'analyze_k_factor' => 'decimal:2',
        'customer_approval' => 'integer',
        'is_template' => 'boolean',
        'is_proposal' => 'boolean',
        'is_archived' => 'boolean',
        'is_signature' => 'boolean',
        'is_stamp' => 'boolean',
        'template' => 'integer',
        'items_columns_show' => 'array',
        'analyze_columns_show' => 'array',
    ];

    protected $translatable = [
        'name',
        'subject',
    ];

    // Relationships
    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class);
    }

    // TODO: Uncomment when models are created
    /*
    public function lead(): BelongsTo
    {
        return $this->belongsTo(Lead::class);
    }
    */

    public function responsible(): BelongsTo
    {
        return $this->belongsTo(User::class, 'responsible_id');
    }

    public function representative(): BelongsTo
    {
        return $this->belongsTo(User::class, 'representative_id');
    }

    public function owner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'owner_id');
    }

    public function approvedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'approved_by');
    }

    public function archivedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'archived_by');
    }

    // TODO: Uncomment when models are created
    /*
    public function country(): BelongsTo
    {
        return $this->belongsTo(Country::class);
    }

    public function state(): BelongsTo
    {
        return $this->belongsTo(State::class);
    }

    public function city(): BelongsTo
    {
        return $this->belongsTo(City::class);
    }

    public function tax(): BelongsTo
    {
        return $this->belongsTo(Tax::class);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(QuotationCategory::class);
    }

    public function contents(): HasMany
    {
        return $this->hasMany(QuotationContent::class);
    }

    public function invoices(): HasMany
    {
        return $this->hasMany(Invoice::class);
    }
    */

    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function updatedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'updated_by');
    }

    /**
     * Get the translations for this quotation.
     */
    public function translations(): HasMany
    {
        return $this->hasMany(QuotationTranslation::class);
    }

    /**
     * Get the translation for a specific locale.
     */
    public function translation(string $locale = null): BelongsTo
    {
        $locale = $locale ?? app()->getLocale();
        return $this->belongsTo(QuotationTranslation::class, 'id', 'quotation_id')
            ->where('locale', $locale);
    }

    // Scopes
    public function scopeDraft(Builder $query): Builder
    {
        return $query->where('status', 'draft');
    }

    public function scopeSent(Builder $query): Builder
    {
        return $query->where('status', 'sent');
    }

    public function scopeApproved(Builder $query): Builder
    {
        return $query->where('status', 'approved');
    }

    public function scopeRejected(Builder $query): Builder
    {
        return $query->where('status', 'rejected');
    }

    public function scopeExpired(Builder $query): Builder
    {
        return $query->where('status', 'expired');
    }

    public function scopeConverted(Builder $query): Builder
    {
        return $query->where('status', 'converted');
    }

    public function scopeTemplates(Builder $query): Builder
    {
        return $query->where('is_template', true);
    }

    public function scopeProposals(Builder $query): Builder
    {
        return $query->where('is_proposal', true);
    }

    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_archived', false);
    }

    public function scopeArchived(Builder $query): Builder
    {
        return $query->where('is_archived', true);
    }

    public function scopeByClient(Builder $query, int $clientId): Builder
    {
        return $query->where('client_id', $clientId);
    }

    public function scopeByResponsible(Builder $query, int $responsibleId): Builder
    {
        return $query->where('responsible_id', $responsibleId);
    }

    public function scopeByCategory(Builder $query, int $categoryId): Builder
    {
        return $query->where('category_id', $categoryId);
    }

    public function scopeValid(Builder $query): Builder
    {
        return $query->where(function ($q) {
            $q->whereNull('valid_until')
              ->orWhere('valid_until', '>=', now()->toDateString());
        });
    }



    // Accessors
    public function getIsExpiredAttribute(): bool
    {
        return $this->valid_until && $this->valid_until->isPast();
    }

    public function getIsValidAttribute(): bool
    {
        return !$this->is_expired;
    }

    public function getStatusColorAttribute(): string
    {
        return match($this->status) {
            'draft' => 'secondary',
            'sent' => 'info',
            'approved' => 'success',
            'rejected' => 'danger',
            'expired' => 'warning',
            'converted' => 'primary',
            default => 'secondary',
        };
    }

    /**
     * Get the translated name for the current locale.
     */
    public function getTranslatedNameAttribute(): string
    {
        $translation = $this->translations()->where('locale', app()->getLocale())->first();
        return $translation?->name ?? '';
    }

    /**
     * Get the translated subject for the current locale.
     */
    public function getTranslatedSubjectAttribute(): string
    {
        $translation = $this->translations()->where('locale', app()->getLocale())->first();
        return $translation?->subject ?? '';
    }

    /**
     * Get the translated content for the current locale.
     */
    public function getTranslatedContentAttribute(): string
    {
        $translation = $this->translations()->where('locale', app()->getLocale())->first();
        return $translation?->content ?? '';
    }

    /**
     * Get the translated name for a specific locale.
     */
    public function getLocalizedNameAttribute(string $locale): string
    {
        $translation = $this->translations()->where('locale', $locale)->first();
        return $translation?->name ?? '';
    }

    /**
     * Get the translated subject for a specific locale.
     */
    public function getLocalizedSubjectAttribute(string $locale): string
    {
        $translation = $this->translations()->where('locale', $locale)->first();
        return $translation?->subject ?? '';
    }

    /**
     * Get the translated content for a specific locale.
     */
    public function getLocalizedContentAttribute(string $locale): string
    {
        $translation = $this->translations()->where('locale', $locale)->first();
        return $translation?->content ?? '';
    }

    public function getCustomerApprovalTextAttribute(): string
    {
        return match($this->customer_approval) {
            0 => 'Pending',
            1 => 'Approved',
            2 => 'Rejected',
            default => 'Unknown',
        };
    }

    public function getDiscountTypeTextAttribute(): string
    {
        return match($this->discount_type) {
            0 => 'None',
            1 => 'Percentage',
            2 => 'Fixed',
            default => 'Unknown',
        };
    }

    // Methods
    // TODO: Uncomment when QuotationContent model is created
    /*
    public function calculateTotals(): void
    {
        $totalBeforeDiscount = $this->contents->sum('total_price');
        
        $calculationData = [
            'total_before_discount' => $totalBeforeDiscount,
            'discount_type' => $this->discount_type ?? 0,
            'discount' => $this->discount ?? 0,
        ];
        
        if ($this->discount_type == 1) { // Percentage
            $calculationData['total_discount'] = ($totalBeforeDiscount * $this->discount) / 100;
        } elseif ($this->discount_type == 2) { // Fixed
            $calculationData['total_discount'] = $this->discount;
        } else {
            $calculationData['total_discount'] = 0;
        }
        
        $calculationData['total_after_discount'] = $totalBeforeDiscount - $calculationData['total_discount'];
        
        if ($this->tax_id) {
            $calculationData['vat'] = ($calculationData['total_after_discount'] * $this->tax->rate) / 100;
        } else {
            $calculationData['vat'] = 0;
        }
        
        $calculationData['total_after_vat'] = $calculationData['total_after_discount'] + $calculationData['vat'];
        $calculationData['total'] = $calculationData['total_after_vat'];
        
        // Update or create calculation record
        $this->updateCalculation($calculationData);
    }
    */

    public function markAsSent(): void
    {
        $this->update(['status' => 'sent']);
    }

    public function approve(int $approvedBy): void
    {
        $this->update([
            'status' => 'approved',
            'customer_approval' => 1,
            'approved_by' => $approvedBy,
            'approved_at' => now(),
            'approval_date' => now(),
        ]);
    }

    public function reject(int $rejectedBy): void
    {
        $this->update([
            'status' => 'rejected',
            'customer_approval' => 2,
            'approved_by' => $rejectedBy,
            'approved_at' => now(),
        ]);
    }

    /**
     * Create or update a translation for this quotation.
     */
    public function updateTranslation(string $locale, array $data): QuotationTranslation
    {
        $translation = $this->translations()->where('locale', $locale)->first();
        
        if ($translation) {
            $translation->update($data);
            return $translation;
        }
        
        return $this->translations()->create(array_merge($data, ['locale' => $locale]));
    }

    /**
     * Get translation for a specific locale or create if it doesn't exist.
     */
    public function getOrCreateTranslation(string $locale): QuotationTranslation
    {
        return $this->translations()->firstOrCreate(['locale' => $locale]);
    }

    /**
     * Set translations for multiple locales at once.
     */
    public function setTranslations(array $translations): void
    {
        foreach ($translations as $locale => $data) {
            $this->updateTranslation($locale, $data);
        }
    }

    // TODO: Uncomment when Invoice model is created
    /*
    public function convertToInvoice(): Invoice
    {
        $invoice = Invoice::create([
            'invoice_number' => $this->generateInvoiceNumber(),
            'client_id' => $this->client_id,
            'quotation_id' => $this->id,
            'issue_date' => now(),
            'due_date' => now()->addDays(30),
            'tax_id' => $this->tax_id,
            'status' => 0, // Draft
            'template' => $this->template,
            'category_id' => $this->category_id,
            'created_by' => auth()->id(),
        ]);

        // Copy calculations from quotation to invoice
        if ($this->calculation) {
            $invoice->updateCalculation([
                'total_before_discount' => $this->calculation->total_before_discount,
                'discount_type' => $this->calculation->discount_type,
                'discount' => $this->calculation->discount,
                'total_discount' => $this->calculation->total_discount,
                'total_after_discount' => $this->calculation->total_after_discount,
                'vat' => $this->calculation->vat,
                'total_after_vat' => $this->calculation->total_after_vat,
                'total' => $this->calculation->total,
            ]);
        }

        // Convert quotation contents to invoice contents
        foreach ($this->contents as $content) {
            $invoice->contents()->create([
                'item_name' => $content->item_name,
                'item_name_ar' => $content->item_name_ar,
                'item_code' => $content->item_code,
                'description' => $content->description,
                'description_ar' => $content->description_ar,
                'unit' => $content->unit,
                'quantity' => $content->quantity,
                'unit_price' => $content->unit_price,
                'total_price' => $content->total_price,
                'discount_type' => $content->discount_type,
                'discount' => $content->discount,
                'discount_amount' => $content->discount_amount,
                'price_after_discount' => $content->price_after_discount,
                'tax_id' => $content->tax_id,
                'tax_rate' => $content->tax_rate,
                'tax_amount' => $content->tax_amount,
                'final_price' => $content->final_price,
                'sort_order' => $content->sort_order,
            ]);
        }

        $this->update(['status' => 'converted']);
        
        return $invoice;
    }

    protected function generateInvoiceNumber(): string
    {
        // This would typically use a service or configuration
        return 'INV-' . str_pad(Invoice::count() + 1, 6, '0', STR_PAD_LEFT);
    }
    */
}
