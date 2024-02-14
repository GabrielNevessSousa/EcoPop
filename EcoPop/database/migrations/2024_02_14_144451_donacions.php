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
        Schema::create('donacions', function (Blueprint $table) {
            $table->id('id_donacions');
            $table->id('id_capç');
            $table->id('id_ong');
            $table->foreign('id_capç')->references('id_capç')->on('capç_compres');
            $table->foreign('id_ong')->references('id_ong')->on('ong');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('donacions');
    }
};
