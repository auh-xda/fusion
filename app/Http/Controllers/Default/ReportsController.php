<?php

namespace App\Http\Controllers\Default;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class ReportsController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Reports/Index');
    }

    public function reports(): Response
    {
        return Inertia::render('Reports/Index');
    }
}
