<?php

namespace Statikbe\NovaTranslationManager\Http\Controllers;

use Illuminate\Foundation\Validation\ValidatesRequests;
use Statikbe\NovaTranslationManager\TranslationManager;

abstract class AbstractTranslationController
{
    use ValidatesRequests;

    /**
     * Returns a list of the configured, supported locales (key: locale) with their names (key: language).
     * @return array
     */
    protected function getLocalesData(): array
    {
        $locales = TranslationManager::getLocales();
        $localesData = [];

        foreach($locales as $locale){
            $localesData[] = [
                'locale' => $locale,
                'language' => trans($locale),
            ];
        }

        return $localesData;
    }
}
