<?php

namespace Statikbe\NovaTranslationManager;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Http\Middleware\Authenticate;
use Laravel\Nova\Nova;
use Statikbe\NovaTranslationManager\Http\Middleware\Authorize;

class ToolServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // This can be overwritten by any service provider
        // Here we need some kind of "migration" to keep the old config still valid for people still using the package with
        // Old config file.
        // TODO : Probably setLocales no longer make sense and could be migrated to a central config repository.

        $supportedLocales = config(
            'nova-chained-translation-manager.supported_locales',
            config('app.supported_locales',['en'])
        );

        TranslationManager::setLocales($supportedLocales);
        TranslationManager::setConfig(config('nova-chained-translation-manager', [
            'editor' => 'trix'
        ]));

        $this->loadViewsFrom(__DIR__.'/../resources/views', 'translation-manager');

        $this->app->booted(function () {
            $this->routes();
        });

        Nova::serving(function (ServingNova $event) {
            //
        });
    }

    /**
     * Register the tool's routes.
     *
     * @return void
     */
    protected function routes()
    {
        if ($this->app->routesAreCached()) {
            return;
        }

        Nova::router(['nova', Authenticate::class, Authorize::class], 'translation-manager')
            ->group(__DIR__.'/../routes/inertia.php');

        Route::middleware(['nova', Authorize::class])
            ->prefix('nova-vendor/translation-manager')
            ->group(__DIR__.'/../routes/api.php');
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->publishes([
            __DIR__ . '/config/nova-chained-translation-manager.php' => config_path('nova-chained-translation-manager.php'),
        ], ['nova-chained-translation-manager','config']);
    }
}
