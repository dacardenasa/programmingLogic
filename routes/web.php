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

Route::get('/arraysPractice', function () {
    return view('seccion5_4');
});

Route::get('/poo', function () {
    return view('seccion6');
});

Route::get('/arrayObject', function () {
    return view('seccion6_1');
});

Route::get('/clases', function () {
    return view('seccion6_2');
});

Route::get('/practica1', function () {
    return view('seccion7_1');
});

Route::get('/practica2', function () {
    return view('seccion7_2');
});

Route::get('/practica3', function () {
    return view('seccion7_3');
});

Route::get('/practica4', function () {
    return view('seccion7_4');
});

Route::get('/practica5', function () {
    return view('seccion7_5');
});

Route::get('/practica6', function () {
    return view('seccion7_6');
});

Route::get('/practica7', function () {
    return view('seccion7_7');
});

Route::get('/practica8', function () {
    return view('seccion7_8');
});

Route::get('/practica9', function () {
    return view('seccion7_9');
});

Route::get('/helloWorld', function () {
    return view('seccion8_0');
});



