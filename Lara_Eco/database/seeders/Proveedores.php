<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class Proveedores extends Seeder
{
    public function run()
    {
        $proveedors = [
            [
                'nom_empresa' => 'Eco Solutions',
                'telefon' => '+123456789',
                'direccio' => 'C/Gran Via, 22, Barcelona',
            ],
            [
                'nom_empresa' => 'GreenEarth Industries',
                'telefon' => '+987654321',
                'direccio' => 'C/La Palma, 13, Lleida',
            ],
        ];

        DB::table('proveidor')->insert($proveedors);
    }
}
