<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class CheckIsAdminOrSelf
{
  
    public function handle($request, Closure $next)
    {
        $requestUserId = $request->route()->parameter('id');
        if (
            Auth::user()->role === 2 || 
            Auth::user()->id == $requestUserId) {
            return $next($request);
        } else {
            return \response()->json(['error' => 'Unauthorized'], 403);
        }
    }
}
