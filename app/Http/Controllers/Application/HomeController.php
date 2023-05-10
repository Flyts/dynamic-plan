<?php

namespace App\Http\Controllers\Application;

use Inertia\Inertia;
use App\Models\Offices;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    public function index()
    {
        $data = Offices::all(["id", "code", "name", "status", "categorie_id"]);
        $offices = [];

        foreach($data as $value) 
        {
            array_push($offices, [
                "id" => $value->id,
                "code" => $value->code,
                "name" => $value->name,
                "status" => $value->status,
                "categorie" => $value->categorie->name,
            ]);
        }

        return Inertia::render("Home", ["offices" => $offices]);
    }
}
