<?php

namespace Statikbe\NovaTranslationManager\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
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
        return [
            'locale' => ['required', 'string', Rule::in(TranslationManager::getLocales())],
            'group' => ['required', 'string', Rule::in(TranslationManager::getAllowedGroups())],
            'key' => ['required', 'string'],
            'value' => ['required', 'string'],
        ];
    }
}
