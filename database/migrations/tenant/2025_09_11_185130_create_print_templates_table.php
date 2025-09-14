<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('print_templates', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('module'); // invoice, purchase, quotation, expense, etc.
            $table->string('template_key')->unique(); // unique identifier for the template
            $table->string('display_name');
            $table->text('description')->nullable();
            $table->boolean('is_default')->default(false);
            $table->boolean('is_active')->default(true);
            $table->json('template_config'); // stores template configuration (colors, fonts, layout, etc.)
            $table->text('html_template'); // stores the HTML template
            $table->text('css_styles'); // stores custom CSS styles
            $table->json('preview_data')->nullable(); // sample data for preview
            $table->integer('sort_order')->default(0);
            $table->timestamps();
            
            $table->index(['module', 'is_active']);
            $table->index(['module', 'is_default']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('print_templates');
    }
};
