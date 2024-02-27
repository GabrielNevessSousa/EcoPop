<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

use Illuminate\Database\Eloquent\ModelNotFoundException;

class AuthenticationController extends Controller
{
    /* PÁGINA INICIAL */
    public function index()
    {
        try {
            $usuari = User::all();

            return response()->json($usuari, 200);

        } catch (ModelNotFoundException $e) {
            return response()->json([$e,'error' => 'usuari no encontrado'], 404);
        }
    }

    public function show($id)
    {
        try {
            $usuari = User::findOrFail($id);

            return response()->json($usuari, 200);

        } catch (ModelNotFoundException $e) {
            
            return response()->json([$e,'error' => 'usari no encontrado'], 404);
        }
    }

    /* CREACIÓN */
    public function create()
    {
        
    }

    /* GUARDAR */
    public function store(Request $request)
    {
        $request->merge(['rol' => $request->input('rol', 'usuari')]);

        $token = Str::random(10);
        $request->merge(['remember_token' => $request->input('remember_token', $token)]);

        try {
            $request->validate([
                'nom' => 'required|string',
                'cognom' => 'required|string',
                'password' => 'required|string',
                'email' => 'required|string',
                'role' =>'string',
                'remember_token'=> 'string',
            ]);

            User::create($request->all());

            return response()->json(['message' => 'usuari creado correctamente'], 200);

        } catch (ModelNotFoundException $e) {

            return response()->json(['error' => 'usuari no insertado'], 404);
        }
    }



    public function login(Request $request){
        try {
            $request->validate([
                'email' => 'required|string',
                'password' => 'required',
            ]);
    
            if (!Auth::attempt($request->only(['email', 'password']))) {
                 return response()->json(['error' => 'invalid credencialss'], 404);
            }
    
            $user = Auth::user();
            $token = $user->createToken('token')->plainTextToken;
    
            return response()->json(['succes' => $token], 200);
        } catch (ModelNotFoundException $e) {
            // Puedes personalizar el manejo de ModelNotFoundException aquí
            return response()->json(['error' => 'usuari no encontrado'], 404);
        }
    }


}