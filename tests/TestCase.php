<?php

namespace Statikbe\NovaTranslationManager\Tests;

use Illuminate\Auth\GenericUser;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Facades\Gate;
use Laravel\Nova\Nova;
use Laravel\Nova\NovaCoreServiceProvider;
use Orchestra\Testbench\TestCase as Orchestra;
use Statikbe\LaravelChainedTranslator\ChainedTranslationManager;
use Statikbe\LaravelChainedTranslator\ChainedTranslatorConfig;
use Statikbe\LaravelChainedTranslator\ChainLoader;
use Statikbe\LaravelChainedTranslator\TranslationServiceProvider;
use Statikbe\NovaTranslationManager\ToolServiceProvider;
use Statikbe\NovaTranslationManager\TranslationManager;

abstract class TestCase extends Orchestra
{
    public const API_PREFIX = '/nova-vendor/translation-manager';

    protected string $tempPath;

    protected string $langPath;

    protected string $customLangPath;

    /**
     * The tool that is registered with Nova when Nova is served.
     */
    protected ?TranslationManager $tool = null;

    protected function setUp(): void
    {
        $this->tempPath = sys_get_temp_dir().'/nova-translation-manager-tests/'.uniqid('', true);
        $this->langPath = $this->tempPath.'/lang';
        $this->customLangPath = $this->tempPath.'/lang-custom';

        $this->createTranslationFiles();

        parent::setUp();

        $this->useTemporaryTranslationDirectories();

        Gate::define('viewNova', fn ($user) => (bool) ($user->can_view_nova ?? false));
        Nova::auth(fn ($request) => Gate::check('viewNova', [Nova::user($request)]));

        $this->tool = new TranslationManager;
        Nova::serving(fn () => Nova::tools([$this->tool]));
    }

    protected function tearDown(): void
    {
        Nova::flushState();
        Nova::$authUsing = null;

        (new Filesystem)->deleteDirectory($this->tempPath);

        parent::tearDown();
    }

    protected function getPackageProviders($app): array
    {
        return [
            NovaCoreServiceProvider::class,
            TranslationServiceProvider::class,
            ToolServiceProvider::class,
        ];
    }

    protected function defineEnvironment($app): void
    {
        $app['config']->set('app.key', 'base64:'.base64_encode(str_repeat('a', 32)));
        $app['config']->set('app.locale', 'en');
        $app['config']->set('nova-chained-translation-manager', [
            'editor' => 'input',
            'supported_locales' => ['en', 'nl'],
            'ignore_groups' => ['secret'],
        ]);

        $app->useLangPath($this->langPath);
    }

    /**
     * Points the chained translator to the temporary lang and lang-custom directories of this test.
     */
    private function useTemporaryTranslationDirectories(): void
    {
        $this->app->instance('chained-translator.path.lang.custom', $this->customLangPath);

        foreach (['translator', 'translation.loader', 'translation.loader.custom', 'translation.loader.default', ChainedTranslationManager::class] as $abstract) {
            $this->app->forgetInstance($abstract);
        }

        $this->app->singleton(ChainedTranslationManager::class, fn ($app) => new ChainedTranslationManager(
            $app->make(Filesystem::class),
            $app->make(ChainLoader::class),
            $this->customLangPath,
            $app->make(ChainedTranslatorConfig::class),
        ));
    }

    private function createTranslationFiles(): void
    {
        $files = new Filesystem;

        foreach (['en', 'nl'] as $locale) {
            $files->ensureDirectoryExists($this->langPath.'/'.$locale);
            $files->ensureDirectoryExists($this->customLangPath.'/'.$locale);
        }

        $files->put($this->langPath.'/en/test.php', "<?php return ['hello' => 'Hello'];");
        $files->put($this->langPath.'/nl/test.php', "<?php return ['hello' => 'Hallo'];");
        $files->put($this->langPath.'/en/secret.php', "<?php return ['key' => 'Secret'];");
    }

    protected function actingAsNovaUser(bool $canViewNova = true): static
    {
        return $this->actingAs(new GenericUser(['id' => 1, 'can_view_nova' => $canViewNova]));
    }

    protected function customTranslationFile(string $locale, string $group): string
    {
        return $this->customLangPath.'/'.$locale.'/'.$group.'.php';
    }

    /**
     * Returns all files that were written to the custom lang directory or the temporary directory of this test.
     *
     * @return array<int, string>
     */
    protected function writtenFiles(): array
    {
        return array_merge(
            glob($this->customLangPath.'/*/*') ?: [],
            glob($this->customLangPath.'/*.php') ?: [],
            glob($this->tempPath.'/*.php') ?: [],
            glob($this->langPath.'/*.php') ?: [],
        );
    }
}
