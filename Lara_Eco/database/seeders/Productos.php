<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class Productos extends Seeder
{
    public function run()
    {

        // Productos
        $products = [
            [
                'id_categoria' => 1,
                'id_proveidor' => 1,
                'nom_producte' => 'Botella de agua de acero inoxidable',
                'imatge' => 'botella_acero.jpg',
                'stock' => 100,
                'preu' => 15.99,
                'descripcio' => 'Botella de agua reutilizable hecha de acero inoxidable.',
                'venut' => 0,
            ],
            [
                'id_categoria' => 3,
                'id_proveidor' => 1,
                'nom_producte' => 'Vaso para el café reutilizable',
                'imatge' => 'vaso_cafe_reutilizable.jpg',
                'stock' => 50,
                'preu' => 9.99,
                'descripcio' => 'Vaso para café reutilizable ideal para llevar contigo.',
                'venut' => 0,
            ],
            [
                'id_categoria' => 2,
                'id_proveidor' => 2,
                'nom_producte' => 'Bolsas plegables y reutilizables para la compra',
                'imatge' => 'bolsas_reutilizables_compra.jpg',
                'stock' => 200,
                'preu' => 5.49,
                'descripcio' => 'Bolsas plegables y reutilizables perfectas para hacer la compra.',
                'venut' => 0,
            ],
            [
                'id_categoria' => 2,
                'id_proveidor' => 1,
                'nom_producte' => 'Bolsas de basura biodegradables',
                'imatge' => 'bolsas_biodegradables.jpg',
                'stock' => 150,
                'preu' => 7.99,
                'descripcio' => 'Bolsas de basura biodegradables respetuosas con el medio ambiente.',
                'venut' => 0,
            ],
            [
                'id_categoria' => 4,
                'id_proveidor' => 2,
                'nom_producte' => 'Camisetas recicladas',
                'imatge' => 'camisetas_recicladas.jpg',
                'stock' => 80,
                'preu' => 12.99,
                'descripcio' => 'Camisetas fabricadas con material reciclado, ecológicas y cómodas.',
                'venut' => 0,
            ],
        ];

        DB::table('producte')->insert($products);
    }
}
