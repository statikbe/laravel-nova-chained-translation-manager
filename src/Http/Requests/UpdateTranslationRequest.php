<?php

namespace Statikbe\NovaTranslationManager\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Statikbe\NovaTranslationManager\TranslationManager;

class UpdateTranslationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $locales = implode(',', TranslationManager::getLocales());

        return [
            'locale' => ['required', 'string', 'in:' . $locales],
            'group' => ['required', 'string'],
            'key' => ['required', 'string'],
            'value' => ['nullable', 'string'],
        ];
    }
}
