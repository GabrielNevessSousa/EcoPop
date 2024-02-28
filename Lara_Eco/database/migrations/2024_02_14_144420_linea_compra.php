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
            $table->unsignedBigInteger('id_capç');
            $table->id('id_linea');
            $table->integer('punts');
            $table->string('ong');
            $table->integer('donacio');
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
