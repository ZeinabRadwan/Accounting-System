<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Cache;

class ChartOfAccountResource extends JsonResource
{
    protected static $bulkBalances = null;

    public function toArray($request)
    {
        // Get locale from request (query param, header, or fallback to app locale)
        $locale = $this->getLocaleFromRequest($request);

        // Use individual calculations for single resource
        $debitAmount = $this->getTotalDebits();
        $creditAmount = $this->getTotalCredits();
        $totalDebitAmount = $this->getTotalDebitsIncludingChildren();
        $totalCreditAmount = $this->getTotalCreditsIncludingChildren();
        $balance = $debitAmount - $creditAmount;
        $totalBalance = $totalDebitAmount - $totalCreditAmount;

        return [
            'id' => $this->id,
            'name' => method_exists($this, 'getTranslatedField') ? $this->getTranslatedField('name', $locale) : $this->name,
            'code' => $this->code,
            'type_id' => $this->type_id,
            'parent_id' => $this->parent_id,
            'order' => $this->order,
            'is_active' => $this->is_active,
            'created_by' => $this->created_by,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            // Debit and Credit information
            'debit_amount' => $debitAmount,
            'credit_amount' => $creditAmount,
            'total_debit_amount' => $totalDebitAmount,
            'total_credit_amount' => $totalCreditAmount,
            'formatted_debit_amount' => number_format($debitAmount, 2),
            'formatted_credit_amount' => number_format($creditAmount, 2),
            'formatted_total_debit_amount' => number_format($totalDebitAmount, 2),
            'formatted_total_credit_amount' => number_format($totalCreditAmount, 2),
            // Balance information with Debit/Credit labels
            'balance' => $balance,
            'balance_type' => $balance >= 0 ? 'Debit' : 'Credit',
            'balance_amount' => abs($balance),
            'formatted_balance_with_type' => number_format(abs($balance), 2).' '.($balance >= 0 ? 'Debit' : 'Credit'),
            'total_balance' => $totalBalance,
            'total_balance_type' => $totalBalance >= 0 ? 'Debit' : 'Credit',
            'total_balance_amount' => abs($totalBalance),
            'formatted_total_balance_with_type' => number_format(abs($totalBalance), 2).' '.($totalBalance >= 0 ? 'Debit' : 'Credit'),
            // Keep old formatted fields for backward compatibility
            'formatted_balance' => number_format($balance, 2),
            'formatted_total_balance' => number_format($totalBalance, 2),
            // Include relationships (expose as both 'type' and 'types' for compatibility)
            'type' => $this->whenLoaded('type', function () use ($locale) {
                return [
                    'id' => $this->type->id,
                    'name' => method_exists($this->type, 'getTranslatedField') ? $this->type->getTranslatedField('name', $locale) : $this->type->name,
                ];
            }),
            'types' => $this->whenLoaded('type', function () use ($locale) {
                return [
                    'id' => $this->type->id,
                    'name' => method_exists($this->type, 'getTranslatedField') ? $this->type->getTranslatedField('name', $locale) : $this->type->name,
                ];
            }),
            'parent' => $this->whenLoaded('parent', function () use ($locale) {
                return [
                    'id' => $this->parent->id,
                    'name' => method_exists($this->parent, 'getTranslatedField') ? $this->parent->getTranslatedField('name', $locale) : $this->parent->name,
                ];
            }),
        ];
    }

    /**
     * Get locale from request (query param, header, or fallback to app locale)
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string
     */
    protected function getLocaleFromRequest($request)
    {
        // First check query parameter
        if ($request->has('locale')) {
            $locale = $request->get('locale');
            if (array_key_exists($locale, config('app.locales', []))) {
                return $locale;
            }
        }

        // Then check Accept-Language header
        $acceptLanguage = $request->header('Accept-Language');
        if ($acceptLanguage) {
            // Parse Accept-Language header (e.g., "ar" or "ar,en;q=0.9")
            $locale = substr($acceptLanguage, 0, strpos($acceptLanguage, ',') ?: strlen($acceptLanguage));
            $locale = trim($locale);

            // Check if full locale exists (e.g., "ar")
            if (array_key_exists($locale, config('app.locales', []))) {
                return $locale;
            }

            // Try first 2 characters (e.g., "ar" from "ar-SA")
            $shortLocale = substr($locale, 0, 2);
            if (array_key_exists($shortLocale, config('app.locales', []))) {
                return $shortLocale;
            }
        }

        // Fallback to app locale
        return app()->getLocale();
    }

    /**
     * Get bulk balances for all accounts in the collection
     */
    protected function getBulkBalances()
    {
        // This method should not be called on individual resources
        // The bulk calculation should be handled at the collection level
        return collect();
    }

    /**
     * Reset bulk balances cache (useful for testing)
     */
    public static function resetBulkBalances()
    {
        static::$bulkBalances = null;
    }
}
