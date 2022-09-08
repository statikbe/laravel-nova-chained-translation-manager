<?php

namespace Statikbe\NovaTranslationManager;

use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Laravel\Nova\Menu\MenuSection;
use Laravel\Nova\Nova;
use Laravel\Nova\Tool;

class TranslationManager extends Tool
{

    /**
     * The locales array for the tool.
     *
     * @var array
     */
    public static $locales;

    /**
     * The config array for the tool.
     *
     * @var array
     */
    public static $config;

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
    public function menu(Request $request)
    {
        return MenuSection::make(__('Translations'))->path('/translation-manager')->icon('globe-alt');
    }

    /**
     * @param  array  $locales
     */
    public static function setLocales(array $locales)
    {
        static::$locales = $locales;
    }

    /**
     * @return array
     */
    public static function getLocales(): array
    {
        return static::$locales;
    }

    /**
     * @param  array  $config
     */
    public static function setConfig(array $config)
    {
        static::$config = $config;
    }

    /**
     * @param  null  $key
     * @param  null  $default
     * @return array|mixed
     */
    public static function getConfig($key = null, $default = null)
    {
        # At PHP 8.0 We can use return types as follows : :array|string
        return $key !== null ? Arr::get(static::$config, $key, $default) : static::$config;
    }
}
