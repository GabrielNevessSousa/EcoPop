<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class Categorias extends Seeder
{
    public function run()
    {
        $categories = [
            [
                'nom_categoria' => 'Botellas',
            ],
            [
                'nom_categoria' => 'Bolsas',
            ],
            [
                'nom_categoria' => 'Envases',
            ],
            [
                'nom_categoria' => 'Ropa',
            ],
        ];
        DB::table('categoria')->insert($categories);
    }
}