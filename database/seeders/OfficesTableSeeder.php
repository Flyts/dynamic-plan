<?php

namespace Database\Seeders;

use App\Models\Offices;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class OfficesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Offices::create([
            "name" => "Auditorium - Rez de chaussée",
            "description" => "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1683637151/f5231eef106142993013d3dfd882fef8_er5br8.jpg",
            "code" => "rc_auditorium",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 1
        ]);


        Offices::create([
            "name" => "Shop 1",
            "description" => "SHOP.COM Marketplace offers great deals on clothes, beauty, health and nutrition, shoes, electronics, and more from over 1500 stores with one easy checkout.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1683637382/photo-1570857502809-08184874388e_vvgjlk.jpg",
            "code" => "rc_shop_1",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 2
        ]);

        Offices::create([
            "name" => "Shop 2",
            "description" => "SHOP.COM Marketplace offers great deals on clothes, beauty, health and nutrition, shoes, electronics, and more from over 1500 stores with one easy checkout.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1683637382/photo-1570857502809-08184874388e_vvgjlk.jpg",
            "code" => "rc_shop_2",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 2
        ]);

        Offices::create([
            "name" => "Shop 3",
            "description" => "SHOP.COM Marketplace offers great deals on clothes, beauty, health and nutrition, shoes, electronics, and more from over 1500 stores with one easy checkout.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1683637382/photo-1570857502809-08184874388e_vvgjlk.jpg",
            "code" => "rc_shop_3",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 2
        ]);

        Offices::create([
            "name" => "Shop 4",
            "description" => "SHOP.COM Marketplace offers great deals on clothes, beauty, health and nutrition, shoes, electronics, and more from over 1500 stores with one easy checkout.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1683637382/photo-1570857502809-08184874388e_vvgjlk.jpg",
            "code" => "rc_shop_4",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 2
        ]);


        Offices::create([
            "name" => "Bureau 1",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424964/3_xvcbu0.jpg",
            "code" => "rc_type_1_b_1",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 3
        ]);

        Offices::create([
            "name" => "Bureau 2",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424964/3_xvcbu0.jpg",
            "code" => "rc_type_1_b_2",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 3
        ]);

        Offices::create([
            "name" => "Bureau 3",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424964/3_xvcbu0.jpg",
            "code" => "rc_type_1_b_3",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 3
        ]);

        Offices::create([
            "name" => "Bureau 4",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424964/3_xvcbu0.jpg",
            "code" => "rc_type_1_b_4",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 3
        ]);

        Offices::create([
            "name" => "Bureau 5",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424964/3_xvcbu0.jpg",
            "code" => "rc_type_1_b_5",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 3
        ]);

        Offices::create([
            "name" => "Bureau 6",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424964/3_xvcbu0.jpg",
            "code" => "rc_type_1_b_6",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 3
        ]);

        Offices::create([
            "name" => "Bureau 7",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424964/3_xvcbu0.jpg",
            "code" => "rc_type_1_b_7",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 3
        ]);

        Offices::create([
            "name" => "Bureau 8",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424964/3_xvcbu0.jpg",
            "code" => "rc_type_1_b_8",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 3
        ]);

        Offices::create([
            "name" => "Bureau 9",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424964/3_xvcbu0.jpg",
            "code" => "rc_type_1_b_9",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 3
        ]);

        Offices::create([
            "name" => "Bureau 10",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424964/3_xvcbu0.jpg",
            "code" => "rc_type_1_b_10",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 3
        ]);

        Offices::create([
            "name" => "Bureau 11",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424964/3_xvcbu0.jpg",
            "code" => "rc_type_1_b_11",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 3
        ]);

        Offices::create([
            "name" => "Bureau 12",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424964/3_xvcbu0.jpg",
            "code" => "rc_type_1_b_12",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 3
        ]);


        Offices::create([
            "name" => "Bureau 1",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682323208/IMG_0539-compressed-scaled_jmd3s6.jpg",
            "code" => "rc_type_2_b_1",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 4
        ]);

        Offices::create([
            "name" => "Bureau 2",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682323208/IMG_0539-compressed-scaled_jmd3s6.jpg",
            "code" => "rc_type_2_b_2",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 4
        ]);

        Offices::create([
            "name" => "Bureau 3",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682323208/IMG_0539-compressed-scaled_jmd3s6.jpg",
            "code" => "rc_type_2_b_3",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 4
        ]);

        Offices::create([
            "name" => "Bureau 4",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682323208/IMG_0539-compressed-scaled_jmd3s6.jpg",
            "code" => "rc_type_2_b_4",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 4
        ]);

        Offices::create([
            "name" => "Bureau 5",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682323208/IMG_0539-compressed-scaled_jmd3s6.jpg",
            "code" => "rc_type_2_b_5",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 4
        ]);

        Offices::create([
            "name" => "Bureau 6",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682323208/IMG_0539-compressed-scaled_jmd3s6.jpg",
            "code" => "rc_type_2_b_6",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 4
        ]);

        Offices::create([
            "name" => "Bureau 7",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682323208/IMG_0539-compressed-scaled_jmd3s6.jpg",
            "code" => "rc_type_2_b_7",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 4
        ]);

        Offices::create([
            "name" => "Bureau 8",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682323208/IMG_0539-compressed-scaled_jmd3s6.jpg",
            "code" => "rc_type_2_b_8",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 4
        ]);

        Offices::create([
            "name" => "Bureau 9",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682323208/IMG_0539-compressed-scaled_jmd3s6.jpg",
            "code" => "rc_type_2_b_9",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 4
        ]);

        Offices::create([
            "name" => "Bureau 10",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682323208/IMG_0539-compressed-scaled_jmd3s6.jpg",
            "code" => "rc_type_2_b_10",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 4
        ]);

        Offices::create([
            "name" => "Bureau 11",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682323208/IMG_0539-compressed-scaled_jmd3s6.jpg",
            "code" => "rc_type_2_b_11",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 4
        ]);

        Offices::create([
            "name" => "Bureau 12",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682323208/IMG_0539-compressed-scaled_jmd3s6.jpg",
            "code" => "rc_type_2_b_12",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 4
        ]);

        Offices::create([
            "name" => "Bureau 13",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682323208/IMG_0539-compressed-scaled_jmd3s6.jpg",
            "code" => "rc_type_2_b_13",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 4
        ]);

        Offices::create([
            "name" => "Bureau 14",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682323208/IMG_0539-compressed-scaled_jmd3s6.jpg",
            "code" => "rc_type_2_b_14",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 4
        ]);

        Offices::create([
            "name" => "Bureau 15",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682323208/IMG_0539-compressed-scaled_jmd3s6.jpg",
            "code" => "rc_type_2_b_15",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 4
        ]);

        Offices::create([
            "name" => "Bureau 16",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682323208/IMG_0539-compressed-scaled_jmd3s6.jpg",
            "code" => "rc_type_2_b_16",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 4
        ]);

        Offices::create([
            "name" => "Bureau 17",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682323208/IMG_0539-compressed-scaled_jmd3s6.jpg",
            "code" => "rc_type_2_b_17",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 4
        ]);

        Offices::create([
            "name" => "Bureau 18",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682323208/IMG_0539-compressed-scaled_jmd3s6.jpg",
            "code" => "rc_type_2_b_18",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 4
        ]);

        Offices::create([
            "name" => "Bureau 19",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682323208/IMG_0539-compressed-scaled_jmd3s6.jpg",
            "code" => "rc_type_2_b_19",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 4
        ]);

        Offices::create([
            "name" => "Bureau 20",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682323208/IMG_0539-compressed-scaled_jmd3s6.jpg",
            "code" => "rc_type_2_b_20",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 4
        ]);


        Offices::create([
            "name" => "Bureau 1",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1683638490/dea1e8136456f07c08fd8c897370d570_pnkuvr.jpg",
            "code" => "rc_type_3_b_1",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 5
        ]);

        Offices::create([
            "name" => "Bureau 2",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1683638490/dea1e8136456f07c08fd8c897370d570_pnkuvr.jpg",
            "code" => "rc_type_3_b_2",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 5
        ]);
        
        Offices::create([
            "name" => "Bureau 3",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1683638490/dea1e8136456f07c08fd8c897370d570_pnkuvr.jpg",
            "code" => "rc_type_3_b_3",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 5
        ]);
        
        Offices::create([
            "name" => "Bureau 4",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1683638490/dea1e8136456f07c08fd8c897370d570_pnkuvr.jpg",
            "code" => "rc_type_3_b_4",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 5
        ]);
        
        Offices::create([
            "name" => "Bureau 5",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1683638490/dea1e8136456f07c08fd8c897370d570_pnkuvr.jpg",
            "code" => "rc_type_3_b_5",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 5
        ]);
        
        Offices::create([
            "name" => "Bureau 6",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1683638490/dea1e8136456f07c08fd8c897370d570_pnkuvr.jpg",
            "code" => "rc_type_3_b_6",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 5
        ]);
        
        Offices::create([
            "name" => "Bureau 7",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1683638490/dea1e8136456f07c08fd8c897370d570_pnkuvr.jpg",
            "code" => "rc_type_3_b_7",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 5
        ]);
        
        Offices::create([
            "name" => "Bureau 8",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1683638490/dea1e8136456f07c08fd8c897370d570_pnkuvr.jpg",
            "code" => "rc_type_3_b_8",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 5
        ]);
        
        Offices::create([
            "name" => "Bureau 9",
            "description" => "Les bureaux fermés. Ces bureaux représentent la « norme » et la forme classique des bureaux. ... ",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1683638490/dea1e8136456f07c08fd8c897370d570_pnkuvr.jpg",
            "code" => "rc_type_3_b_9",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 5
        ]);

        
        Offices::create([
            "name" => "Coworking 1",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_1",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 2",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_2",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 3",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_3",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 4",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_4",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 5",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_5",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 6",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_6",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 7",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_7",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 8",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_8",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 9",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_9",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 10",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_10",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 11",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_11",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 12",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_12",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 13",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_13",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 14",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_14",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 15",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_15",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 16",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_16",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 17",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_17",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 18",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_18",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 19",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_19",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 20",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_20",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 21",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_21",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 22",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_22",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 23",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_23",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 24",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_24",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 25",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_25",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 26",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_26",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 27",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_27",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 28",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_28",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 29",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_29",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 30",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_30",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 31",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_31",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 32",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_32",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 33",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_33",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 34",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_34",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 35",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_35",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 36",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_36",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 37",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_37",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 38",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_38",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 39",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_39",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 40",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_40",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 41",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_41",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 42",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_42",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 43",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_43",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
        
        Offices::create([
            "name" => "Coworking 44",
            "description" => "Fait, pour des professionnels indépendants, de partager un même espace de travail.",
            "img" => "https://res.cloudinary.com/drctiml18/image/upload/v1682424968/1_ubjfwp.jpg",
            "code" => "rc_cow_44",
            "price" => 10.00,
            "location" => "Silikin Village",
            "categorie_id" => 6
        ]);
    }
}
