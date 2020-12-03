<?php

namespace Statikbe\NovaTranslationManager;

use Laravel\Nova\Nova;
use Laravel\Nova\Tool;

class TranslationManager extends Tool
{

    /**
     * The locales array for the tool.
     *
     * @var string
     */
    public static $locales;

    /**
     * Perform any tasks that need to happen when the tool is booted.
     *
     * @return void
     */
    public function boot()
    {
        Nova::script('translation-manager', __DIR__.'/../dist/js/tool.js');
        Nova::style('translation-manager', __DIR__.'/../dist/css/tool.css');
    }

    /**
     * Build the view that renders the navigation links for the tool.
     *
     * @return \Illuminate\View\View
     */
    public function renderNavigation()
    {
        return view('translation-manager::navigation');
    }

    public static function setLocales(array $locales)
    {
        static::$locales = $locales;
    }

    public static function getLocales()
    {
        return static::$locales;
    }
}
