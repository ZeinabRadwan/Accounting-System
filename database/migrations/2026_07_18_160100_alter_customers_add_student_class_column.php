<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('customers', function (Blueprint $table) {
            if (! Schema::hasColumn('customers', 'student_class')) {
                $table->string('student_class')->nullable()->after('type');
                $table->index(['student_class']);
            }
        });
    }

    public function down(): void
    {
        Schema::table('customers', function (Blueprint $table) {
            if (Schema::hasColumn('customers', 'student_class')) {
                $table->dropIndex(['student_class']);
                $table->dropColumn('student_class');
            }
        });
    }
};
