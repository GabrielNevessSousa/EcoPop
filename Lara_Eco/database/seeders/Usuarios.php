<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class Usuarios extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Definir los datos de los Xuxemons
        $users = [
            [
                'nom' => 'usu',
                'cognom' => 'usu',
                'email' => 'usu@usu.com',
                'password' => Hash::make('123'),
                'rol' => 'usuario'
            ],
            [
                'nom' => 'admin',
                'cognom' => 'admin',
                'email' => 'admin@admin.com',
                'password' => Hash::make('123'),
                'rol' => 'administrador'
            ],
            // Agregar más Xuxemons si es necesario
        ];

        // Insertar los datos en la tabla 'xuxemons'
        DB::table('users')->insert($users);
    }
}