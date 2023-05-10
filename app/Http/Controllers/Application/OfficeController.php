<?php

namespace App\Http\Controllers\Application;

use App\Models\Offices;
use App\Models\Bookings;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Application\BaseController;

class OfficeController extends BaseController
{
    public function getOffice($code)
    {
        $code = htmlspecialchars(strtolower($code));

        $exist = Offices::where("code", $code)->first();

        if($exist)
        {
            $office = [
                "name"        => $exist->name,
                "description" => $exist->description,
                "img"         => $exist->img,
                "code"        => $exist->code,
                "price"       => $exist->price,
                "location"    => $exist->location,
                "status"      => $exist->status,
                "categorie"   => [
                    "name"        => $exist->categorie->name,
                    "description" => $exist->categorie->description
                ],
                "booking" => $exist->booking,
            ];

            return $this->sendResponse($office, null, 200);
        }

        return $this->sendError(null, "Aucun bureau trouvé", 402);
    }

    
    public function bookOffice(Request $request)
    {
        $nom    = htmlspecialchars($request->nom);
        $prenom = htmlspecialchars($request->prenom);
        $sexe   = htmlspecialchars(strtolower($request->sexe));
        $email  = htmlspecialchars($request->email);
        $tel    = htmlspecialchars($request->tel);
        $code   = htmlspecialchars(strtolower($request->code));


    	$validator = Validator::make($request->all(), [
            'nom'           => 'required|string|between:2,50',
            'prenom'        => 'required|string|between:2,50',
            'email'         => 'required|email',
            'tel'           => 'required|numeric|digits:9',
            'sexe'          => [
                'required', 
                'string',
                Rule::in(['homme', 'femme']),
            ]
        ]);

        if($validator->fails()) 
        {
            return $this->sendError($validator->errors()->toJson(), "", 422);
        }

        $exist = Offices::where("code", $code)->first(["id", "name"]);

        if($exist)
        {
            $exist_booking = Bookings::where("email", $email)
                                     ->where("offices_id", )
                                     ->orWhere("tel", $tel)
                                     ->where("offices_id", $exist->id)
                                     ->first(["id"]);

            if(!$exist_booking)
            {
                $booking = Bookings::create([
                    "nom"        => $nom,
                    "prenom"     => $prenom,
                    "sexe"       => $sexe,
                    "email"      => $email,
                    "tel"        => $tel,
                    "offices_id" => $exist->id,
                ]);

                return $this->sendResponse($booking, "Vous venez de réserver le $exist->name", 201);
            }

            return $this->sendError(null, "Vous avez déjà reservé", 407);
        }

        return $this->sendError( null, "Le bureau que vous avez choisi n'existe pas", 401);
    }
}
