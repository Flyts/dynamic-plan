<?php

namespace App\Models;

use App\Models\Offices;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Bookings extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom',
        'prenom',
        'email',
        'tel',
        'sexe',
        'status',
        'offices_id',
    ];


    protected $casts = [
        'created_at' => 'datetime:d/m/Y H:i:s',
        'updated_at' => 'datetime:d/m/Y H:i:s',
    ];  


    public function office(): BelongsTo
    {
        return $this->belongsTo(Offices::class);
    } 
}
