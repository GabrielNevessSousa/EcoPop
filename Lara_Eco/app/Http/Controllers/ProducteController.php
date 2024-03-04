<?php

namespace App\Http\Controllers;

use App\Models\Producte;
use Illuminate\Http\Request;

class ProducteController extends Controller
{
    public function index()
    {
        $productes = Producte::all();
        return response() ->json($productes);
    }
}
