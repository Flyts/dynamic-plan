<?php

namespace Database\Seeders;

use App\Models\Categories;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Categories::create([
            "name" => "Auditorium",
            "description" => "Salle aménagée pour les auditions, les émissions de radio ou de télévision.",
        ]);

        Categories::create([
            "name" => "Shop",
            "description" => "Available on iOS and Android, the Shop app makes it easy to find and track the things you love, earn exclusive rewards, and discover the world's greatest ...",
        ]);

        Categories::create([
            "name" => "Bureau Type 1",
            "description" => "Type 1 - Pièce où est installée la table de travail, avec les meubles indispensables (bibliothèque, etc.)",
        ]);

        Categories::create([
            "name" => "Bureau Type 2",
            "description" => "Type 2 - Pièce où est installée la table de travail, avec les meubles indispensables (bibliothèque, etc.)",
        ]);

        Categories::create([
            "name" => "Bureau Type 3",
            "description" => "Type 3 - Pièce où est installée la table de travail, avec les meubles indispensables (bibliothèque, etc.)",
        ]);

        Categories::create([
            "name" => "Coworking",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
        ]);
    }
}
