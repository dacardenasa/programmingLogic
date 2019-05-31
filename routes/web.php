<?php

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

Route::get('/seccion3', function () {
    return view('seccion3');
});

Route::get('/seccion4', function () {
    return view('seccion4');
});

Route::get('/seccion4_2', function () {
    return view('seccion4_2');
});
