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
            $table->unsignedBigInteger('id_carrito');
            $table->id('id_linea');

            $table->unsignedBigInteger('id_producte'); // Change to unsignedBigInteger
            $table->foreign('id_producte')->references('id_producte')->on('producte');
            $table->foreign('id_carrito')->references('nº_carrito')->on('carrito');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('lineas_carrito');
    }
};
