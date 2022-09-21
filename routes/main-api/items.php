<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Items\ItemsController;
use App\Http\Controllers\Items\ItemController;

Route::get("items/list", [ItemsController::class, 'list']);
Route::post("items/create", [ItemController::class, 'create']);
Route::get("items/get/{id}", [ItemController::class, 'get']);
Route::delete("items/destroy/{id}", [ItemController::class, 'destroy']);
Route::put("items/update/{id}", [ItemController::class, 'update']);