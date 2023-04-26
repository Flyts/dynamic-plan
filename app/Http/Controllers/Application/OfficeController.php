<?php

namespace App\Http\Controllers\Application;

use App\Models\Offices;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Application\BaseController;

class OfficeController extends BaseController
{
    public function getOffice($code)
    {
        $office = Offices::where("code", $code)->first();

        return $this->sendResponse($office, null, 200);
    }

    public function bookOffice(Request $request)
    {
        $code = htmlspecialchars($request->code);

        $exist = Offices::where("code", $code)->first();

        if($exist)
        {
            $exist->update([
                "status" => 1
            ]);

            $offices = Offices::all();

            return $this->sendResponse($offices, "Vous venez de réserver le $exist->name", 201);
        }

        return $this->sendError( null, "Le bureau que vous avez choisi n'existe pas", 401);
    }
}
