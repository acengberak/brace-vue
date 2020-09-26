<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->group(function () {
    Route::resource('user', 'UserController')->only(['index','show']);
    Route::get('user', 'UserController@index')->middleware('isAdmin');
    Route::get('user/{id}', 'UserController@show')->middleware('isAdminOrSelf');
});

// Route::prefix('v1')->group(function () {
//     Route::prefix('auth')->group(function () {
//         // Route dibawah adalah route public, user dapat akses semaunya.

//         // register user baru
//         Route::post('register', 'AuthController@register');

//         // Login user
//         Route::post('login', 'AuthController@login');

//         // Refresh JWT token
//         Route::get('refresh', 'AuthController@refresh');

//         // Dibawah ini route khusus authenticated user saja.
//         Route::middleware('auth:api')->group(function (){
//             // dapetin info user
//             Route::get('user', 'AuthController@user');

//             // logout user dari aplikasi
//             Route::post('logout', 'AuthController@logout');
           
//         });
//     });
// });

Route::prefix('auth')->group(function () {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');
    Route::get('refresh', 'AuthController@refresh');
    Route::group(['middleware' => 'auth:api'], function(){
        Route::get('user', 'AuthController@user');
        Route::post('logout', 'AuthController@logout');

        // Route::get('users', 'UserController@index')->middleware('isAdmin');
        // Route::get('users/{id}', 'UserController@show')->middleware('isAdminOrSelf');
    });
});