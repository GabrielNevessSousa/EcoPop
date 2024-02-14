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
        Schema::create('capç_compres', function (Blueprint $table) {
            $table->id('id_capç');
            $table->id('id_usuari');
            $table->boolean('pagat');
            $table->date('data_compra');
            $table->foreign('id_usuari')->references('id_usuari')->on('users');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('capç_compres');
    }
};
