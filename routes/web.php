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

Route::get('/tiposDatos', function () {
    return view('seccion3');
});

Route::get('/est_IfElse', function () {
    return view('seccion4');
});

Route::get('/est_IfElseAnidada', function () {
    return view('seccion4_2');
});

Route::get('/est_Switch', function () {
    return view('seccion4_3');
});


Route::get('/est_While', function () {
    return view('seccion4_4');
});


Route::get('/est_For', function () {
    return view('seccion4_5');
});

Route::get('/funciones', function () {
    return view('seccion5');
});

Route::get('/funcionesTable', function () {
    return view('seccion5_1');
});

Route::get('/tarea', function () {
    return view('seccion5_2');
});

Route::get('/arrays', function () {
    return view('seccion5_3');
});


