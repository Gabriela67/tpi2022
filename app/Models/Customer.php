<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;
    public static function UsuariosJson(){
        $personaData = file_get_contents('../users.json');
        return $personaData;
    }
}
