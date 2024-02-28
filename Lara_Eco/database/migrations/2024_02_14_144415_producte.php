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
        Schema::create('producte', function (Blueprint $table) {
            $table->id('id_producte');
            $table->unsignedBigInteger('id_categoria');
            $table->unsignedBigInteger('id_proveidor');
            $table->string('nom_producte');
            $table->string('imatge');
            $table->integer('stock');
            $table->integer('preu');
            $table->string('descripcio');
            $table->boolean('venut');
            $table->foreign('id_categoria')->references('id_categoria')->on('categoria');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('producte');
    }
};
