<?php

namespace Statikbe\NovaTranslationManager\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

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
            'locale' => ['required', 'string'], //TODO (opkuist): Check with locales
            'group' => ['required', 'string'], //TODO (opkuis): Check with groups
            'key' => ['required', 'string'], //TODO (opkuis): Check with keys
            'value' => ['nullable', 'string'],
        ];
    }
}
