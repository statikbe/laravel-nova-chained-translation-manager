<?php

namespace Statikbe\NovaTranslationManager\Http\Controllers;

use Illuminate\Filesystem\Filesystem;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Str;
use Statikbe\NovaTranslationManager\Http\Requests\UpdateTranslationRequest;
use Statikbe\LaravelChainedTranslator\ChainLoader;
use Statikbe\LaravelChainedTranslator\ChainedTranslationManager;

class TranslationController extends AbstractTranslationController
{
    /**
     * @var ChainLoader $translationLoader
     */
    private $translationLoader;

    /**
     * @var FileSystem $fileSystem
     */
    private $fileSystem;

    /**
     * @var ChainedTranslationManager
     */
    private $chainedTranslationManager;

    public function __construct(ChainLoader $translationLoader, Filesystem $filesystem, ChainedTranslationManager $chainedTranslationManager)
    {
        $this->translationLoader = $translationLoader;
        $this->fileSystem = $filesystem;
        $this->chainedTranslationManager = $chainedTranslationManager;
    }

    /**
     * Nova AJAX endpoint to return the translations, translation groups, languages and current locale
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(): JsonResponse
    {
        $groups = $this->chainedTranslationManager->getTranslationGroups();
        $languages = $this->getLocalesData();

        $translations = $this->getTranslations($languages, $groups);

        return response()->json([
            'source_language' => config('app.locale'),
            'groups' => $groups,
            'languages' => $languages,
            'config' => config('nova-chained-translation-manager',[]),
            'translations' => [
                'data' => $translations,
            ],
        ]);
    }

    /**
     * Nova AJAX endpoint to save the translation.
     * @param UpdateTranslationRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateTranslationRequest $request): JsonResponse
    {
        $stripeInvalidHTML = strip_tags($request->input('value'),'<code><p><b><u><a>');

        $this->chainedTranslationManager->save(
            $request->input('locale'),
            $request->input('group'),
            $request->input('key'),
            $stripeInvalidHTML
        );

        return response()->json(['success' => true]);
    }

    private function getTranslations(array $languages, array $allGroups): array
    {
        $data = [];
        foreach ($languages as $language) {
            foreach ($allGroups as $group) {
                $this->addTranslationsToData($data, $language, $group);
            }
        }

        return array_values($data);
    }

    private function addTranslationsToData(array &$data, array $language, string $group): array
    {
        $translations = $this->chainedTranslationManager->getTranslationsForGroup($language['locale'], $group);

        //transform to data structure necessary for frontend
        foreach ($translations as $key => $translation) {
            $dataKey = $group.'.'.$key;
            if (!array_key_exists($dataKey, $data)) {
                $data[$dataKey] = [
                    'id' => Str::random(20),
                    'type' => 'group',
                    'group' => $group,
                    'key' => $key,
                    'translations' => [],
                ];
            }
            $data[$dataKey]['translations'][$language['locale']] = $translation;
        }

        return $data;

    }
}
