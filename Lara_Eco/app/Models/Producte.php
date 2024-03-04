<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producte extends Model
{
    protected $table = 'producte';
    protected $primaryKey = 'id_producte';
    protected $fillable = ['id_categoria', 'id_proveidor', 'nom_producte', 'imatge', 'stock', 'preu', 'descripcio', 'venut'];
    use HasFactory;
}
