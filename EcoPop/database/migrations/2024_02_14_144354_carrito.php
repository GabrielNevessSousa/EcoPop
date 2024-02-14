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
        Schema::create('carrito', function (Blueprint $table) {
            $table->id('nº_carrito');
            $table->id('id_usuari');
            $table->id('id_punts');
            $table->date('data_creacio');
            $table->string('estat');
            $table->number('total');
            $table->string('descompte');
            $table->foreign('id_usuari')->references('id_usuari')->on('users');
            $table->foreign('id_punts')->references('id_punts')->on('punts');
            $table->rememberToken();
            $table->timestamps();
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('punts');
    }
};
