<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;
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

Route::get('/', function () {
    return view('welcome');
});

Route::controller(CustomerController::class)->group(function () {
    Route::get('Customer', 'index')->name('index.Customer');
    Route::get('Customer/{id}', 'showUser')->name('one.user');
    Route::get('Customer,saludo/{id}', 'showUserSaludo')->name('user.saludo');
    Route::get('Customers/nuevo', 'nuevo')->name('user.crear');
    Route::post('Customer', 'store')->name('Customer.store');

});

///Rutas
// para crear usuario
//personas/nuevo
//para ver todas las clientes
//Customer
//para ver usuatio por id 
//Customer/id
//para ver el saludo
//Customer,saludo/2
