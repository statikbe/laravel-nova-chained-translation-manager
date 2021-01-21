<?php
return [

    /*
    |--------------------------------------------------------------------------
    | Editor to use
    |--------------------------------------------------------------------------
    |
    | Choose what type of editor you want to use while editing your translations
    | input - For really dead simple input
    | textarea - For a larger textarea to deal with
    | trix - Will use Trix Editor for editing locales supporting some HTML on it.
    |
    | Note : Please keep in mind while using Trix to configure your allowed HTML
    | tags. Otherwise it may pose XSS attacks risk if field could be edited by the user.
    |
    | Values : trix, input, textarea
    |
    */

    'editor' => 'input',
    'trix_allowed_tags' => '<code><p><b><u><a><br><ul><li><ol><pre><h2><h3><h4><h5><del><blockquote><dl><dd><strong>',

    /*
    |--------------------------------------------------------------------------
    | Application Supported Locale Configuration
    |--------------------------------------------------------------------------
    |
    | The application locale determines the possible locales that can be used.
    | You are free to fill this array with any of the locales which will be
    | supported by the application.
    |
    |
    */

    'supported_locales' => [
        'en',
        'nl'
    ],
];
