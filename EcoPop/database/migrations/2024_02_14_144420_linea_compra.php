<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('linea_compra', function (Blueprint $table) {
            $table->id('id_linea');
            $table->id('id_capç');
            $table->foreign('id_capç')->references('id_capç')->on('capç_compres');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('linea_compra');
    }
};
