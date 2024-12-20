<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::prefix('ui')->group(function () {

    Route::get('auth/login', [AuthController::class, 'index'])->name('ui.auth.login');

    Route::get('auth/profile', [AuthController::class, 'profile'])->name('ui.auth.profile');

    Route::get('dashboard', [AuthController::class, 'dashboard'])->name('ui.dashboard');
});


Route::prefix('api')->group(function () {

    Route::get('auth/info', [AuthController::class, 'info'])->name('auth.info');

    Route::post('auth/logout', [AuthController::class, 'logout'])->name('auth.logout');

    Route::post('auth/login', [AuthController::class, 'authenticate'])->name('auth.login');
});
