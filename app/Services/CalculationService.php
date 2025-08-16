<?php

namespace App\Services;

use App\Models\App\Quotation;
use App\Models\App\Invoice;
use App\Models\Core\Calculation;

class CalculationService
{
    /**
     * Calculate totals for a quotation and store in calculations table.
     */
    public function calculateQuotationTotals(Quotation $quotation): Calculation
    {
        // Get the subtotal from quotation contents
        $subtotal = $quotation->contents->sum('total_price');
        
        // Prepare calculation data
        $calculationData = [
            'total_before_discount' => $subtotal,
            'discount_type' => $quotation->discount_type ?? 0,
            'discount' => $quotation->discount ?? 0,
        ];
        
        // Calculate discount
        if ($calculationData['discount_type'] == 1) { // Percentage
            $calculationData['total_discount'] = ($subtotal * $calculationData['discount']) / 100;
        } elseif ($calculationData['discount_type'] == 2) { // Fixed
            $calculationData['total_discount'] = $calculationData['discount'];
        } else {
            $calculationData['total_discount'] = 0;
        }
        
        // Calculate total after discount
        $calculationData['total_after_discount'] = $subtotal - $calculationData['total_discount'];
        
        // Calculate VAT if tax is applied
        if ($quotation->tax_id && $quotation->tax) {
            $calculationData['vat'] = ($calculationData['total_after_discount'] * $quotation->tax->rate) / 100;
        } else {
            $calculationData['vat'] = 0;
        }
        
        // Calculate final totals
        $calculationData['total_after_vat'] = $calculationData['total_after_discount'] + $calculationData['vat'];
        $calculationData['total'] = $calculationData['total_after_vat'];
        
        // Update or create calculation record
        return $quotation->updateCalculation($calculationData);
    }
    
    /**
     * Calculate totals for an invoice and store in calculations table.
     */
    public function calculateInvoiceTotals(Invoice $invoice): Calculation
    {
        // Get the subtotal from invoice contents
        $subtotal = $invoice->contents->sum('total_price');
        
        // Prepare calculation data
        $calculationData = [
            'total_before_discount' => $subtotal,
            'discount_type' => $invoice->discount_type ?? 0,
            'discount' => $invoice->discount ?? 0,
        ];
        
        // Calculate discount
        if ($calculationData['discount_type'] == 1) { // Percentage
            $calculationData['total_discount'] = ($subtotal * $calculationData['discount']) / 100;
        } elseif ($calculationData['discount_type'] == 2) { // Fixed
            $calculationData['total_discount'] = $calculationData['discount'];
        } else {
            $calculationData['total_discount'] = 0;
        }
        
        // Calculate total after discount
        $calculationData['total_after_discount'] = $subtotal - $calculationData['total_discount'];
        
        // Calculate VAT if tax is applied
        if ($invoice->tax_id && $invoice->tax) {
            $calculationData['vat'] = ($calculationData['total_after_discount'] * $invoice->tax->rate) / 100;
        } else {
            $calculationData['vat'] = 0;
        }
        
        // Calculate final totals
        $calculationData['total_after_vat'] = $calculationData['total_after_discount'] + $calculationData['vat'];
        $calculationData['total'] = $calculationData['total_after_vat'];
        
        // Update or create calculation record
        return $invoice->updateCalculation($calculationData);
    }
    
    /**
     * Copy calculations from quotation to invoice.
     */
    public function copyQuotationCalculationsToInvoice(Quotation $quotation, Invoice $invoice): Calculation
    {
        if (!$quotation->calculation) {
            throw new \Exception('Quotation has no calculations to copy');
        }
        
        $calculationData = [
            'total_before_discount' => $quotation->calculation->total_before_discount,
            'discount_type' => $quotation->calculation->discount_type,
            'discount' => $quotation->calculation->discount,
            'total_discount' => $quotation->calculation->total_discount,
            'total_after_discount' => $quotation->calculation->total_after_discount,
            'vat' => $quotation->calculation->vat,
            'total_after_vat' => $quotation->calculation->total_after_vat,
            'total' => $quotation->calculation->total,
        ];
        
        return $invoice->updateCalculation($calculationData);
    }
    
    /**
     * Get calculation summary for a model.
     */
    public function getCalculationSummary($model): array
    {
        if (!$model->calculation) {
            return [
                'total_before_discount' => 0,
                'discount_type' => 0,
                'discount' => 0,
                'total_discount' => 0,
                'total_after_discount' => 0,
                'vat' => 0,
                'total_after_vat' => 0,
                'total' => 0,
            ];
        }
        
        return [
            'total_before_discount' => $model->calculation->total_before_discount,
            'discount_type' => $model->calculation->discount_type,
            'discount' => $model->calculation->discount,
            'total_discount' => $model->calculation->total_discount,
            'total_after_discount' => $model->calculation->total_after_discount,
            'vat' => $model->calculation->vat,
            'total_after_vat' => $model->calculation->total_after_vat,
            'total' => $model->calculation->total,
        ];
    }
}
