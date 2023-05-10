<?php

namespace App\Models;

use App\Models\Offices;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Categories extends Model
{
    use HasFactory; 

    protected $fillable = [
        'name',
        'description',
    ];


    protected $casts = [
        'created_at' => 'datetime:d/m/Y H:i:s',
        'updated_at' => 'datetime:d/m/Y H:i:s',
    ];  
    
    
    public function offices(): HasMany
    {
        return $this->hasMany(Offices::class);
    } 
}
