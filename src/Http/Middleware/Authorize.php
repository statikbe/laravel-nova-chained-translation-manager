<?php

namespace Statikbe\NovaTranslationManager\Http\Middleware;

use Illuminate\Http\Response;
use Laravel\Nova\Nova;
use Statikbe\NovaTranslationManager\TranslationManager;

class Authorize
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return \Illuminate\Http\Response
     *
     * @throws \Symfony\Component\HttpKernel\Exception\HttpException
     * @throws \Symfony\Component\HttpKernel\Exception\NotFoundHttpException
     */
    public function handle($request, $next)
    {
        $tool = collect(Nova::registeredTools())->first([$this, 'matchesTool']);

        if(optional($tool)->authorize($request)) {
            return $next($request);
        }
        else abort(Response::HTTP_FORBIDDEN);
    }

    /**
     * Determine whether this tool belongs to the package.
     *
     * @param  \Laravel\Nova\Tool  $tool
     * @return bool
     */
    public function matchesTool($tool)
    {
        return $tool instanceof TranslationManager;
    }
}
