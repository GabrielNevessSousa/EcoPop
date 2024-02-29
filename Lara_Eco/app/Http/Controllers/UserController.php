<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function update(Request $request, $id){
        try {
            $request->validate([
                'nom' => 'required|string',
                'cognom' => 'string',
                'email' => 'required|string',
                'password' => 'required|string',
                'rol' => 'required|string',
            ]);

            // Obtener el usuario
            $xuxemons = Xuxemon::find($id);

            if (!$xuxemons) {
                return response()->json(['error' => 'Usuari no trobat'], 404);
            }

            // Hash de la contraseña
            $passwordHashed = Hash::make($request->input('password'));

            // Actualizar el usuario
            $xuxemons->update([
                'nom' => $request->input('nom'),
                'cognom' => $request->input('cognom'),
                'email' => $request->input('email'),
                'password' => $passwordHashed, // Guardar la contraseña hasheada
                'rol' => $request->input('rol')
            ]);

            return response()->json('Usuari actualitzat', 200);
        } catch(ModelNotFoundException $e) {
            return response()->json(['error'=>'Error al actualizar usuari'], 500);
        }
    }
}
