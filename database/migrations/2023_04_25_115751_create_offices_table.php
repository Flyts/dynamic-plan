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
        Schema::create('offices', function (Blueprint $table) 
        {
            $table->id();
            $table->string("name");
            $table->text("description");
            $table->string("img");
            $table->string("code")->unique();
            $table->float("price", 8, 2);
            $table->string("location");
            $table->enum("status", [1,0])->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('offices');
    }
};
