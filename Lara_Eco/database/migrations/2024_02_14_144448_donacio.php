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
        Schema::create('donacio', function (Blueprint $table) {
            $table->id('id_donacio');
            $table->unsignedBigInteger('id_usuari');
            $table->date('data_donacio');
            $table->string('ong_desti');
            $table->integer('diners_donat');
            $table->string('producte_donat');
            $table->integer('quantitat');
            $table->foreign('id_usuari')->references('id')->on('users'); // Corrected foreign key reference
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('donacio');
    }
};
