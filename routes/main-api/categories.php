<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Categories\CategoriesController;
use App\Http\Controllers\Categories\CategoryController;


Route::get("categories/list", [CategoriesController::class, 'list']);

Route::post("categories/create", [CategoryController::class, 'create']);

Route::get("categories/get/{id}", [CategoryController::class, 'get']);
Route::delete("categories/destroy/{id}", [CategoryController::class, 'destroy']);
Route::put("categories/update/{id}", [CategoryController::class, 'update']);