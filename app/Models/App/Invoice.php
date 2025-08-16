<?php

namespace App\Models\App;

use App\Models\App\AppModel;
use App\Models\App\Client;
use App\Models\App\Currency;
use App\Models\App\Quotation;
use App\Models\App\InvoiceClientInfo;
use App\Models\App\InvoiceFinancialDetail;
use App\Models\App\InvoiceItem;
use App\Models\App\InvoiceCalculation;

use App\Models\Core\Auth\User;
use App\Models\Core\Traits\Uuid;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Builder;

class Invoice extends AppModel
{
    use Uuid;

    protected $fillable = [
        'invoice_number',
        'invoice_type',
        'client_id',
        'representative_id',
        'quotation_id',
        'issue_date',
        'due_date',
        'supply_date',
        'send_date',
        'tax_id',
        'discount_type',
        'discount',
        'status',
        'template',
        'category_id',
        'created_by',
        'updated_by',
    ];

    protected $casts = [
        'invoice_type' => 'integer',
        'issue_date' => 'date',
        'due_date' => 'date',
        'supply_date' => 'date',
        'send_date' => 'timestamp',
        'exchange_rate' => 'decimal:6',
        'status' => 'integer',
        'template' => 'integer',
    ];

    // Invoice type constants
    const INVOICE_TYPE_SIMPLIFIED = 1;
    const INVOICE_TYPE_VAT = 2;

    // Status constants
    const STATUS_DRAFT = 0;
    const STATUS_SENT = 1;
    const STATUS_PAID = 2;
    const STATUS_OVERDUE = 3;
    const STATUS_CANCELLED = 4;

    /**
     * Get the client associated with this invoice.
     */
    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class);
    }

    /**
     * Get the representative associated with this invoice.
     */
    public function representative(): BelongsTo
    {
        return $this->belongsTo(Client::class, 'representative_id');
    }

    /**
     * Get the quotation associated with this invoice.
     */
    public function quotation(): BelongsTo
    {
        return $this->belongsTo(Quotation::class);
    }

    /**
     * Get the tax associated with this invoice.
     */
    public function tax(): BelongsTo
    {
        return $this->belongsTo(Tax::class);
    }

    /**
     * Get the financial details associated with this invoice.
     */
    public function financialDetails(): HasOne
    {
        return $this->hasOne(InvoiceFinancialDetail::class);
    }

    /**
     * Get the items associated with this invoice.
     */
    public function contents(): HasMany
    {
        return $this->hasMany(InvoiceItem::class);
    }

    /**
     * Get the calculation record for this invoice.
     */
    public function calculation(): HasOne
    {
        return $this->hasOne(InvoiceCalculation::class, 'invoice_id');
    }

    /**
     * Create or update the calculation record.
     */
    public function updateCalculation(array $data = []): InvoiceCalculation
    {
        if ($this->calculation) {
            $this->calculation->update($data);
            return $this->calculation;
        }

        return $this->calculation()->create($data);
    }

    // Calculation attribute methods
    public function getTotalBeforeDiscountAttribute(): float
    {
        return $this->calculation?->total_before_discount ?? 0.00;
    }

    public function getDiscountTypeAttribute(): int
    {
        return $this->calculation?->discount_type ?? 0;
    }

    public function getDiscountAttribute(): float
    {
        return $this->calculation?->discount ?? 0.00;
    }

    public function getTotalDiscountAttribute(): float
    {
        return $this->calculation?->total_discount ?? 0.00;
    }

    public function getTotalAfterDiscountAttribute(): float
    {
        return $this->calculation?->total_after_discount ?? 0.00;
    }

    public function getVatAttribute(): float
    {
        return $this->calculation?->vat ?? 0.00;
    }

    public function getTotalAfterVatAttribute(): float
    {
        return $this->calculation?->total_after_vat ?? 0.00;
    }

    public function getTotalAttribute(): float
    {
        return $this->calculation?->total ?? 0.00;
    }

    public function hasDiscount(): bool
    {
        return $this->calculation?->hasDiscount() ?? false;
    }

    public function hasVAT(): bool
    {
        return $this->calculation?->hasVAT() ?? false;
    }

    /**
     * Get the user who created this invoice.
     */
    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * Get the user who last updated this invoice.
     */
    public function updatedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'updated_by');
    }

    /**
     * Get the client info for this invoice.
     */
    public function clientInfo(): HasOne
    {
        return $this->hasOne(InvoiceClientInfo::class);
    }

    /**
     * Scope for draft invoices.
     */
    public function scopeDraft(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_DRAFT);
    }

    /**
     * Scope for sent invoices.
     */
    public function scopeSent(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_SENT);
    }

    /**
     * Scope for paid invoices.
     */
    public function scopePaid(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_PAID);
    }

    /**
     * Scope for overdue invoices.
     */
    public function scopeOverdue(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_OVERDUE);
    }

    /**
     * Scope for cancelled invoices.
     */
    public function scopeCancelled(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_CANCELLED);
    }

    /**
     * Check if invoice is draft.
     */
    public function isDraft(): bool
    {
        return $this->status === self::STATUS_DRAFT;
    }

    /**
     * Check if invoice is sent.
     */
    public function isSent(): bool
    {
        return $this->status === self::STATUS_SENT;
    }

    /**
     * Check if invoice is paid.
     */
    public function isPaid(): bool
    {
        return $this->status === self::STATUS_PAID;
    }

    /**
     * Check if invoice is overdue.
     */
    public function isOverdue(): bool
    {
        return $this->status === self::STATUS_OVERDUE;
    }

    /**
     * Check if invoice is cancelled.
     */
    public function isCancelled(): bool
    {
        return $this->status === self::STATUS_CANCELLED;
    }

    /**
     * Get invoice type label.
     */
    public function getInvoiceTypeLabelAttribute(): string
    {
        return match($this->invoice_type) {
            self::INVOICE_TYPE_SIMPLIFIED => 'Simplified',
            self::INVOICE_TYPE_VAT => 'VAT',
            default => 'Unknown',
        };
    }

    /**
     * Get status label.
     */
    public function getStatusLabelAttribute(): string
    {
        return match($this->status) {
            self::STATUS_DRAFT => 'Draft',
            self::STATUS_SENT => 'Sent',
            self::STATUS_PAID => 'Paid',
            self::STATUS_OVERDUE => 'Overdue',
            self::STATUS_CANCELLED => 'Cancelled',
            default => 'Unknown',
        };
    }

    /**
     * Get formatted issue date.
     */
    public function getFormattedIssueDateAttribute(): string
    {
        return $this->issue_date?->format('d/m/Y') ?? '';
    }

    /**
     * Get formatted due date.
     */
    public function getFormattedDueDateAttribute(): string
    {
        return $this->due_date?->format('d/m/Y') ?? '';
    }
}
