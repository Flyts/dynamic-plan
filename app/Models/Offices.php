<?php

namespace App\Models;

use App\Models\Bookings;
use App\Models\Categories;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Offices extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'img',
        'code',
        'price',
        'location',
        'status',
        'categorie_id'
    ];


    protected $casts = [
        'created_at' => 'datetime:d/m/Y H:i:s',
        'updated_at' => 'datetime:d/m/Y H:i:s',
    ];  


    public function categorie(): BelongsTo
    {
        return $this->belongsTo(Categories::class);
    }   
    
    
    public function booking(): HasMany
    {
        return $this->hasMany(Bookings::class);
    } 
}
