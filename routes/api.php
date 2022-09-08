<?php

use Illuminate\Support\Facades\Route;
use Statikbe\NovaTranslationManager\Http\Controllers\LanguageController;
use Statikbe\NovaTranslationManager\Http\Controllers\TranslationController;

    /*
    |--------------------------------------------------------------------------
    | Tool API Routes
    |--------------------------------------------------------------------------
    |
    | Here is where you may register API routes for your tool. These routes
    | are loaded by the ServiceProvider of your tool. They are protected
    | by your tool's "Authorize" middleware by default. Now, go build!
    |
    */


Route::get('/languages', [LanguageController::class, 'index'])
    ->name('languages.index');

Route::get('/translations', [TranslationController::class, 'index'])
    ->name('translation.index');

Route::put('translations', [TranslationController::class, 'update'])
    ->name('translation.update');
