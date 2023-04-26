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
        $offices = Offices::all();

        return Inertia::render("Home", ["offices" => $offices]);
    }
}
