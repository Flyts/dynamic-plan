<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->bigIncrements("id");
            $table->string("nom");
            $table->string("prenom");
            $table->string("email");
            $table->string("tel");
            $table->enum("sexe",["homme", "femme"]);
            $table->enum("status", [1,0])->default(1);
            
            $table->foreignId('offices_id')->constrained();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
