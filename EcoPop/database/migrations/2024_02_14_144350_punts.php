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
        Schema::create('punts', function (Blueprint $table) {
            $table->id('id_punts');
            $table->id('id_usuari');
            $table->integer('punts_guanyats');
            $table->string('data_transaccio');
            $table->foreign('id_usuari')->references('id_usuari')->on('users');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('punts');
    }
};
