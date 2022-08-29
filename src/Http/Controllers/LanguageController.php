<?php

namespace Statikbe\NovaTranslationManager\Http\Controllers;

class LanguageController extends AbstractTranslationController
{
    /**
     * Returns all available locales with their language names.
     */
    public function index()
    {
        return response()->json($this->getLocalesData());
    }
}
