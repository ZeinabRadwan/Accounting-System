<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\PrintTemplate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PrintTemplateController extends Controller
{
    /**
     * Get all print templates for a specific module
     */
    public function index(Request $request)
    {
        $module = $request->get('module', 'invoice');
        
        $templates = PrintTemplate::byModule($module)
            ->active()
            ->orderBy('sort_order')
            ->orderBy('name')
            ->get();

        return response()->json([
            'status' => 'success',
            'data' => $templates
        ]);
    }

    /**
     * Get a specific print template
     */
    public function show($id)
    {
        $template = PrintTemplate::findOrFail($id);
        
        return response()->json([
            'status' => 'success',
            'data' => $template
        ]);
    }

    /**
     * Create a new print template
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'module' => 'required|string|in:invoice,purchase,quotation,expense',
            'template_key' => 'required|string|max:255|unique:print_templates',
            'display_name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'is_default' => 'boolean',
            'is_active' => 'boolean',
            'template_config' => 'required|array',
            'html_template' => 'required|string',
            'css_styles' => 'required|string',
            'preview_data' => 'nullable|array',
            'sort_order' => 'integer|min:0'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        // If this is set as default, unset other defaults for this module
        if ($request->is_default) {
            PrintTemplate::byModule($request->module)->update(['is_default' => false]);
        }

        $template = PrintTemplate::create($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'Print template created successfully',
            'data' => $template
        ], 201);
    }

    /**
     * Update a print template
     */
    public function update(Request $request, $id)
    {
        $template = PrintTemplate::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|required|string|max:255',
            'module' => 'sometimes|required|string|in:invoice,purchase,quotation,expense',
            'template_key' => 'sometimes|required|string|max:255|unique:print_templates,template_key,' . $id,
            'display_name' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'is_default' => 'boolean',
            'is_active' => 'boolean',
            'template_config' => 'sometimes|required|array',
            'html_template' => 'sometimes|required|string',
            'css_styles' => 'sometimes|required|string',
            'preview_data' => 'nullable|array',
            'sort_order' => 'integer|min:0'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        // If this is set as default, unset other defaults for this module
        if ($request->has('is_default') && $request->is_default) {
            PrintTemplate::byModule($template->module)->where('id', '!=', $id)->update(['is_default' => false]);
        }

        $template->update($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'Print template updated successfully',
            'data' => $template
        ]);
    }

    /**
     * Delete a print template
     */
    public function destroy($id)
    {
        $template = PrintTemplate::findOrFail($id);
        
        // Don't allow deleting the default template
        if ($template->is_default) {
            return response()->json([
                'status' => 'error',
                'message' => 'Cannot delete the default template'
            ], 422);
        }

        $template->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Print template deleted successfully'
        ]);
    }

    /**
     * Set a template as default for a module
     */
    public function setDefault(Request $request, $id)
    {
        $template = PrintTemplate::findOrFail($id);
        
        // Unset other defaults for this module
        PrintTemplate::byModule($template->module)->update(['is_default' => false]);
        
        // Set this one as default
        $template->update(['is_default' => true]);

        return response()->json([
            'status' => 'success',
            'message' => 'Template set as default successfully',
            'data' => $template
        ]);
    }

    /**
     * Preview a template with sample data
     */
    public function preview($id)
    {
        $template = PrintTemplate::findOrFail($id);
        
        // Use preview data or generate sample data
        $data = $template->preview_data ?: $this->generateSampleData($template->module);
        
        return response()->json([
            'status' => 'success',
            'data' => [
                'template' => $template,
                'preview_data' => $data
            ]
        ]);
    }

    /**
     * Get the default template for a module
     */
    public function getDefault(Request $request)
    {
        $module = $request->get('module', 'invoice');
        
        $template = PrintTemplate::byModule($module)->default()->first();
        
        if (!$template) {
            return response()->json([
                'status' => 'error',
                'message' => 'No default template found for this module'
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'data' => $template
        ]);
    }

    /**
     * Generate sample data for preview
     */
    private function generateSampleData($module)
    {
        $baseData = [
            'date' => now()->format('Y-m-d'),
            'sub_total' => 1000.00,
            'tax_amount' => 100.00,
            'total' => 1100.00,
            'items' => [
                [
                    'name' => 'Sample Product 1',
                    'quantity' => 2,
                    'price' => 500.00,
                    'total' => 1000.00
                ]
            ]
        ];

        switch ($module) {
            case 'invoice':
                return array_merge($baseData, [
                    'invoice_no' => 'INV-001',
                    'client' => [
                        'name' => 'John Doe',
                        'company_name' => 'Acme Corp',
                        'email' => 'john@acme.com',
                        'phone' => '+1 234 567 8900',
                        'address' => '123 Main St, City, State 12345'
                    ],
                    'invoice_date' => now()->format('Y-m-d'),
                    'due_date' => now()->addDays(30)->format('Y-m-d'),
                ]);
                
            case 'purchase':
                return array_merge($baseData, [
                    'purchase_no' => 'PUR-001',
                    'supplier' => [
                        'name' => 'Supplier Name',
                        'company_name' => 'Supplier Corp',
                        'email' => 'supplier@example.com',
                        'phone' => '+1 234 567 8900',
                        'address' => '123 Supplier St, City, State 12345'
                    ],
                    'purchase_date' => now()->format('Y-m-d'),
                ]);
                
            case 'quotation':
                return array_merge($baseData, [
                    'quotation_no' => 'QUO-001',
                    'client' => [
                        'name' => 'Client Name',
                        'company_name' => 'Client Corp',
                        'email' => 'client@example.com',
                        'phone' => '+1 234 567 8900',
                        'address' => '123 Client St, City, State 12345'
                    ],
                    'quotation_date' => now()->format('Y-m-d'),
                    'valid_until' => now()->addDays(30)->format('Y-m-d'),
                ]);
                
            default:
                return $baseData;
        }
    }
}
