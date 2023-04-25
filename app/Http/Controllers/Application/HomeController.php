<?php

namespace App\Http\Controllers\Application;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render("Home", []);
    }
}
