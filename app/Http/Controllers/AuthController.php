<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;

class AuthController extends Controller
{
    public function index(): \Inertia\Response
    {
        return inertia('Auth/Login');
    }

    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');

        $attempt = Auth::attempt($credentials, $request->input('remember', false));

        return $attempt ? redirect('ui/dashboard') : redirect('ui/auth/login');

    }

    public function logout()
    {
        Auth::logout();

        return redirect('ui/auth/login');
    }

    public function dashboard(): Response
    {
        return inertia('UI/Dashboard');
    }

    public function profile(): Response
    {
        return inertia('UI/Profile');
    }
    public function info(): \Illuminate\Http\JsonResponse
    {
        return successResponse('', Auth::user());
    }
}
