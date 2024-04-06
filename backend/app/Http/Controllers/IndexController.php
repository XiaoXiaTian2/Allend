<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class IndexController extends Controller
{
    public function __invoke(Request $request)
    {
        //最新服務
        $query = DB::table('service')
                ->join('members','service.mid','=','members.mid')
                ->select('service.mid','s_name','s_amount','name','image','sid',
                DB::raw('date_format(service.created_at, "%Y/%m/%d") as created_at'));

        //最新刊登
        $dammand_query = DB::table('demmand')
                        ->join('country', 'country_id', '=', 'd_active_location')
                        ->select('d_name','d_amount','country_city as d_active_location','did',
                        DB::raw('date_format(created_at, "%Y/%m/%d") as created_at'));

        // //發案名稱
        // if($request->has('d_name')){
        //     $dammand_query->where('d_name',$request->d_name);
        // }
        // //價錢
        // if($request->has('d_amount')){
        //     $dammand_query->where('d_amount',$request->d_amount);
        // }
        // //地點
        // if($request->has('d_active_location')){
        //     $dammand_query->where('d_active_location',$request->d_active_location);
        // }
        // if($request->has('created_at')){
        //     $dammand_query->where('created_at',$request->created_at);
        // }

        //作品
        $project_query = DB::table('project')->select('image');

        $Date_response = [
            'service' => $query->orderBy('created_at','desc')->orderBy('sid', 'desc')->get(),
            'demmand'=>$dammand_query->orderBy('created_at','desc')->get(),
            'project'=>$project_query->get(),
        ];

        return response()->json($Date_response);
    }
}
