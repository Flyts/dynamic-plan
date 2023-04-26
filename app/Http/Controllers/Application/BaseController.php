<?php

namespace App\Http\Controllers\Application;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BaseController extends Controller
{
    public function sendResponse($result, $message, $code, $count=null)
    {
    	$response = [
            'success' => true
        ];

        if(!empty($result))
        {
            $response['result'] = $result;
        }

        if(!empty($message))
        {
            $response['message'] = $message;
        }

        if(!empty($count))
        {
            $response['count'] = $count;
        }

        return response()->json($response, $code);
    }



    public function sendError($error, $errorMessages, $code)
    {
    	$response = [
            'success' => false,
        ];


        if(!empty($error)){
            $response['data'] = $error;
        }

        if(!empty($errorMessages))
        {
            $response['message'] = $errorMessages;
        }

        return response()->json($response, $code);
    }
}
