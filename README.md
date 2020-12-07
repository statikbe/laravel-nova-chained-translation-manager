# Laravel Nova Chained Translation Manager

This translation manager for Laravel Nova provides a UI to edit the translations managed by the Laravel Chained 
Translator. The chained translator allows to override the default translations with translations from a content manager. 

Typically at some point during the development phase, a content manager wants to translate or finetune the translation 
strings added by developers. This often results in merge and versioning issues, when developers and content managers 
are working on the translation files at the same time.  

The Chained Translator package allows translations created by developers to exist separately from translations edited by 
the content manager in separate `lang` directories. The library merges the translations of both language directories, 
where the translations of the content manager (the custom translations) override those of the developer (the default 
translations). Check the documentation of the [Laravel Chained Translator](https://github.com/statikbe/laravel-chained-translator) 
for more info.

## Installation

The package can be installed through Composer.

```
composer require statikbe/laravel-nova-chained-translation-manager
```

## Configuration

You can configure the custom language directory name and extend or finetune the service provider of the Laravel Chained
Translator. Have a look at the configuration options of the [Laravel Chained Translator library](https://github.com/statikbe/laravel-chained-translator). 

### Supported locales

There are two ways to change the supported locales.
 
#### Option 1
The first option is to add the key `supported_locales` to your `config/app.php` config file. 
E.g.
```php
    /*
    |--------------------------------------------------------------------------
    | Application Supported Locale Configuration
    |--------------------------------------------------------------------------
    |
    | The application locale determines the possible locales that can be used.
    | You are free to fill this array with any of the locales which will be 
    | supported by the application.
    |
    */

    'supported_locales' => [
        'en',
        'nl'
    ],
```

#### Option 2
If your application already has a config that declares your locales than you are able to set the supported locales in 
any service provider. Create a new one or use the `app/Providers/AppServiceProvider.php` and set the supported locales 
as an array in the boot function as follows:

```php
use Statikbe\NovaTranslationManager\TranslationManager;

public function boot()
{
    TranslationManager::setLocales(['en', 'nl']);
}
```

## License
The MIT License (MIT). Please see [license file](LICENSE.md) for more information.
