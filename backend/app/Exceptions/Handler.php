<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        // $this->renderable(function (ValidationException $e, Request $request) {
        //     $data = $request->all();
        //     return app(ValidationExceptionAPI::class)->render($request, $e, $data);
        // });

        // $this->renderable(function (ValidationException $e, $request) {
        //     if ($e instanceof ValidationExceptionAPI) {
        //         return $e->render($request);
        //     }

        //     return parent::render($request, $e);
        // });
    }
}
