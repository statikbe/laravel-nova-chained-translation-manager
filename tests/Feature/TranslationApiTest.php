<?php

use Statikbe\NovaTranslationManager\Tests\TestCase;

function validTranslation(array $overrides = []): array
{
    return array_merge([
        'locale' => 'nl',
        'group' => 'test',
        'key' => 'hello',
        'value' => 'Hallo daar',
    ], $overrides);
}

describe('authentication', function () {
    it('rejects guests', function (string $method, string $uri) {
        $response = $this->json($method, TestCase::API_PREFIX.$uri, validTranslation());

        expect($response->status())->toBe(401)
            ->and($this->writtenFiles())->toBe([]);
    })->with([
        'list translations' => ['GET', '/translations'],
        'list languages' => ['GET', '/languages'],
        'save translation' => ['PUT', '/translations'],
    ]);

    it('rejects users that may not view Nova', function (string $method, string $uri) {
        $this->actingAsNovaUser(canViewNova: false);

        $this->json($method, TestCase::API_PREFIX.$uri, validTranslation())->assertForbidden();

        expect($this->writtenFiles())->toBe([]);
    })->with([
        'list translations' => ['GET', '/translations'],
        'list languages' => ['GET', '/languages'],
        'save translation' => ['PUT', '/translations'],
    ]);

    it('rejects users that may not see the tool', function (string $method, string $uri) {
        $this->tool->canSee(fn () => false);
        $this->actingAsNovaUser();

        $this->json($method, TestCase::API_PREFIX.$uri, validTranslation())->assertForbidden();

        expect($this->writtenFiles())->toBe([]);
    })->with([
        'list translations' => ['GET', '/translations'],
        'list languages' => ['GET', '/languages'],
        'save translation' => ['PUT', '/translations'],
    ]);
});

describe('index', function () {
    it('lists the translations without the ignored groups', function () {
        $this->actingAsNovaUser();

        $response = $this->getJson(TestCase::API_PREFIX.'/translations')->assertOk();

        expect($response->json('groups'))->toBe(['test'])
            ->and(collect($response->json('translations.data'))->pluck('group')->unique()->values()->all())->toBe(['test']);
    });

    it('lists the languages', function () {
        $this->actingAsNovaUser();

        $this->getJson(TestCase::API_PREFIX.'/languages')
            ->assertOk()
            ->assertJsonPath('*.locale', ['en', 'nl']);
    });
});

describe('save', function () {
    it('saves a valid translation', function () {
        $this->actingAsNovaUser();

        $this->putJson(TestCase::API_PREFIX.'/translations', validTranslation())
            ->assertOk()
            ->assertJson(['success' => true]);

        $file = $this->customTranslationFile('nl', 'test');
        expect($file)->toBeFile()
            ->and(require $file)->toBe(['hello' => 'Hallo daar']);
    });

    it('rejects invalid locales', function (string $locale) {
        $this->actingAsNovaUser();

        $this->putJson(TestCase::API_PREFIX.'/translations', validTranslation(['locale' => $locale]))
            ->assertUnprocessable()
            ->assertJsonValidationErrors('locale');

        expect($this->writtenFiles())->toBe([]);
    })->with([
        'path traversal' => '../x',
        'not configured' => 'xx',
        'list of locales' => 'en,nl',
    ]);

    it('rejects invalid groups', function (string $group) {
        $this->actingAsNovaUser();

        $this->putJson(TestCase::API_PREFIX.'/translations', validTranslation(['group' => $group]))
            ->assertUnprocessable()
            ->assertJsonValidationErrors('group');

        expect($this->writtenFiles())->toBe([]);
    })->with([
        'path traversal' => '../../evil',
        'unknown group' => 'unknown',
        'ignored group' => 'secret',
    ]);

    it('rejects values that are not a non-empty string', function (mixed $value) {
        $this->actingAsNovaUser();

        $this->putJson(TestCase::API_PREFIX.'/translations', validTranslation(['value' => $value]))
            ->assertUnprocessable()
            ->assertJsonValidationErrors('value');

        expect($this->writtenFiles())->toBe([]);
    })->with([
        'null' => [null],
        'empty string' => [''],
        'array' => [['a' => 'b']],
    ]);

    it('rejects a missing value', function () {
        $this->actingAsNovaUser();

        $data = validTranslation();
        unset($data['value']);

        $this->putJson(TestCase::API_PREFIX.'/translations', $data)
            ->assertUnprocessable()
            ->assertJsonValidationErrors('value');

        expect($this->writtenFiles())->toBe([]);
    });

    it('rejects keys that are not a string', function () {
        $this->actingAsNovaUser();

        $this->putJson(TestCase::API_PREFIX.'/translations', validTranslation(['key' => ['a']]))
            ->assertUnprocessable()
            ->assertJsonValidationErrors('key');

        expect($this->writtenFiles())->toBe([]);
    });
});
