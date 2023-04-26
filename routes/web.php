<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Application\HomeController;
use App\Http\Controllers\Application\OfficeController;


Route::get('/', [HomeController::class, "index"])->name("home");

Route::prefix('office')->name('office.')->group(function(){
    Route::get('/office/{code}', [OfficeController::class, "getOffice"])->name("one");
    Route::post('/office', [OfficeController::class, "bookOffice"])->name("reserver");
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__.'/auth.php';
