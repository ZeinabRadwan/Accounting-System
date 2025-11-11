<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Barryvdh\Snappy\Facades\SnappyPdf as PDF;

class Utility extends Model
{
    /**
     * Build PDF using Snappy
     * 
     * @param array $data - PDF configuration data
     * @param int|null $type_id - Type ID for generate type
     * @param string|null $type - Type name for generate type
     * @param string $orientation - PDF orientation (portrait/landscape)
     * @param bool $headerFooter - Whether to include header/footer
     * @return mixed
     */
    public static function buildPdf($data, $orientation = "portrait", $headerFooter = true)
    {
        // Load view with data
        $pdf = PDF::loadView($data['view'], $data['view_data']);
        $pdf->setPaper('a4');
        
        // Set orientation
        $pdf->setOption('orientation', $orientation);
        
        // Set quality and encoding options
        $pdf->setOption('lowquality', false);
        $pdf->setOption('enable-local-file-access', true);
        $pdf->setOption('images', true);
        $pdf->setOption('encoding', 'UTF-8');
        
        // Handle footer
        $footer = '';
        if (!empty($data['footer'])) {
            if (isset($data['footer_data'])) {
                $footer = view($data['footer'], $data['footer_data'])->render();
            } else {
                $footer = view($data['footer'])->render();
            }
        }
        
        // Handle header
        $header = '';
        if (!empty($data['header'])) {
            if (isset($data['header_data'])) {
                $header = view($data['header'], $data['header_data'])->render();
            } else {
                $header = view($data['header'])->render();
            }
        }
        
        // Set margins
        $pdf->setOption('minimum-font-size', 0);
        $pdf->setOption('margin-top', $data['margins']['top'] ?? '10mm');
        $pdf->setOption('margin-bottom', $data['margins']['bottom'] ?? '10mm');
        $pdf->setOption('margin-left', 0);
        $pdf->setOption('margin-right', 0);
        
        // Set script options
        $pdf->setOption('no-stop-slow-scripts', true);
        $pdf->setOption('disable-javascript', true);
        
        // Set header/footer line options
        $pdf->setOption('no-header-line', true);
        $pdf->setOption('header-line', false);
        
        // Only set header and footer if they are not empty and headerFooter is enabled
        // This prevents wkhtmltopdf from treating empty headers as repeating headers
        if ($headerFooter && !empty($header)) {
            $pdf->setOption('header-html', $header);
            $pdf->setOption('header-spacing', $data['header_spacing'] ?? '2');
        } else {
            // Explicitly disable header to prevent repetition
            $pdf->setOption('header-html', '');
            $pdf->setOption('header-spacing', 0);
            // Additional options to prevent header repetition
            $pdf->setOption('disable-smart-shrinking', false);
        }
        
        if ($headerFooter && !empty($footer)) {
            $pdf->setOption('footer-html', $footer);
        } else {
            // Explicitly disable footer
            $pdf->setOption('footer-html', '');
        }
        
        // Handle different output types
        if ($data['type'] == 'preview') {
            return $pdf->inline($data['file_name']);
        } else if ($data['type'] == 'download') {
            return $pdf->download($data['file_name']);
        } else if ($data['type'] == 'generate') {
            // For generate type, return the PDF output
            // Note: Google Drive functionality removed as requested
            $pdf->setOption('lowquality', false);
            return $pdf->output();
        }
        
        // Default: return download
        return $pdf->download($data['file_name']);
    }
}

