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
        Schema::create('lineas_carrito', function (Blueprint $table) {
            $table->id('id_linea');
            $table->id('id_carrito');
            $table->id('id_producte');
            $table->foreign('id_producte')->references('id_producte')->on('producte');
            $table->foreign('id_carrito')->references('nº_carrito')->on('carrito');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lineas_carrito');
    }
};
