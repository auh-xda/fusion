<?php

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\JsonResponse;

if (!function_exists('render')) {

    function render($component, $props = []) : Response
    {
        return Inertia::render($component, $props);
    }
}

function successResponse($message = '', $data = [], $code = 200): JsonResponse
{
    $response['status'] = true;
    $response['data'] = $data;

    empty($message) ? : $response['message'] = $message;

    return jsonResponse($response, $code);
}

function errorResponse($message = '', $data = [], $code = 400): JsonResponse
{
    $response['status'] = false;
    $response['data'] = $data;

    empty($message) ? : $response['message'] = $message;

    return jsonResponse($response, $code);
}

function jsonResponse($data, $code = 200): JsonResponse
{
    return response()->json($data, $code);
}
