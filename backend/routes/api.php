<?php

use App\Http\Controllers\AcceptanceIssueController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CommitController;
use App\Http\Controllers\DemmandContentController;
use App\Http\Controllers\IFindCaseController;
use App\Http\Controllers\IFindPeopleController;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\IWantQuoteController;
use App\Http\Controllers\MemberInfoController;
use App\Http\Controllers\MemberServiceController;
use App\Http\Controllers\MemberserviceDeleteController;
use App\Http\Controllers\MemberTakeCaseController;
use App\Http\Controllers\MemberTakeCaseDeleteController;
use App\Http\Controllers\Pop_QuoteAgreeController;
use App\Http\Controllers\Pop_QuoteContorller;
use App\Http\Controllers\PublishCaseController;
use App\Http\Controllers\PublishCaseDeleteController;
use App\Http\Controllers\ServiceContentController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\TalentController;
use App\Http\Controllers\VideoController;
use App\Http\Controllers\WorkController;
use GuzzleHttp\Middleware;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// 首頁
Route::get('/index', IndexController::class);
// 查看我要接案
Route::get('/findcase/{d_type?}', IFindCaseController::class);
// 查看我要找人.
Route::get('/findpeople', IFindPeopleController::class);
// 查看人才頁面
Route::get('/talent/{mid}', TalentController::class);
// 查看案件內容
Route::get('/demmand_content/{did}', DemmandContentController::class);
// 查看服務內容
Route::get('/service_content/{sid}', ServiceContentController::class);

// 送出報價表單
Route::post('/quote', IWantQuoteController::class);//->middleware('auth:api');
// 送出發案表單
Route::post('/commit_crime', CommitController::class);//->middleware('auth:api');
// 查看報價、同意、不同意
Route::get('/pop_quote', Pop_QuoteContorller::class);
Route::get('/pop_agree', [Pop_QuoteAgreeController::class, 'Agree']);
Route::get('/pop_disagree', [Pop_QuoteAgreeController::class, 'Disagree']);

// 接發案內容
Route::get('/pulish_view', [AcceptanceIssueController::class,'publishgetData']); //發案主的刊登中
Route::post('/pulish_save', [AcceptanceIssueController::class,'publishsaveData']); //刊登中按鈕
Route::get('/publish_progress_view', [AcceptanceIssueController::class,'publishprogressData']); //發案主的進行中
Route::post('/publish_recevice', [AcceptanceIssueController::class,'receviceData']); //發案主收到的按鈕
Route::get('/take_view', [AcceptanceIssueController::class,'takegetData']); //接案者的儲存變更按鈕
Route::post('/take_save', [AcceptanceIssueController::class,'takesaveData']); //接案者的提交按鈕
Route::get('/take_progress_view', [AcceptanceIssueController::class,'takeprogressData']); //接案者的進行中
Route::post('/take_submit', [AcceptanceIssueController::class,'submitData']); //接案者的提交按鈕
Route::post('/publicEvaluation', [AcceptanceIssueController::class,'publicEvaluation']); //發案者的評價按鈕
Route::post('/takeEvaluation', [AcceptanceIssueController::class,'takeEvaluation']); //接案者的評價按鈕

//結案畫面
Route::get('/publishclose_view', [AcceptanceIssueController::class,'publishClose']); //結案畫面
Route::get('/takeclose_view', [AcceptanceIssueController::class,'takeClose']); //結案畫面

Route::controller(AuthController::class)->group(function(){
    // 註冊
    Route::post('/register', 'register');
    // 登入
    Route::post('/login', 'login');
    // 更新資料
    Route::post('/updateprofiles', 'update');
    // 登出
    Route::post('/logout', 'logout');
});//->middleware('auth:api');
// 忘記密碼(發信)
Route::post('/forgot-password', [PasswordResetLinkController::class, 'store']);
// 重設密碼
Route::post('/reset-password', [NewPasswordController::class, 'store']);
// 信箱驗證
Route::get('/verifyemail/{id}/{hash}', VerifyEmailController::class)
                ->middleware(['auth:api', 'throttle:6,1']);
// 重寄驗證信
Route::post('/emailverification-notification', [EmailVerificationNotificationController::class, 'store'])
                ->middleware(['auth', 'throttle:6,1']);
// 會員功能
Route::controller(MemberInfoController::class)->group(function(){
    // 會員儀表板
    Route::get('/dashboard', 'dashboard');
    // 獲取會員資料
    Route::post('/mem', 'getMemInfo');
    // 修改密碼
    Route::post('/fixp', 'updatePassword');
    // 獲取接案紀錄
    Route::get('/memtakecase', 'getTakeCase');
    // 刪除接案紀錄
    Route::post('/delmembertakecase', 'delTakeCase');
    // 獲取發案紀錄
    Route::get('/mempublishcase', 'getPublishCase');
    // 刪除發案紀錄
    Route::post('/delpublishcase', 'delPublishCase');

    // 獲取服務管理頁面
    Route::get('/memservice', 'getService');
    // 新增服務
    Route::post('/addservice', 'addService');
    // 刪除服務
    Route::get('/delmemser', 'delService');
    // 新增作品
    Route::post('/work', 'addWork');
    // 新增影音
    Route::post('/video', 'addVideo');
    // 我的收藏
    Route::post('/collection', 'getCollection');
});//->middleware(['verified']);

// 接發案內容
Route::controller(AcceptanceIssueController::class)->group(function (){
    Route::get('/pulish_view', 'publishgetData'); // 發案主的刊登中
    Route::post('/pulish_save', 'publishsaveData'); // 刊登中按鈕
    Route::get('/publish_progress_view', 'publishprogressData'); // 發案主的進行中
    Route::post('/publish_recevice', 'receviceData'); // 發案主收到的按鈕
    Route::get('/take_view', 'takegetData'); // 接案者的儲存變更按鈕
    Route::post('/take_save', 'takesaveData'); // 接案者的提交按鈕
    Route::get('/take_progress_view', 'takeprogressData'); // 接案者的進行中
    Route::post('/take_submit', 'submitData'); // 接案者的提交按鈕
    Route::post('/publicClose', 'publicClose'); // 發案者的評價按鈕
    Route::post('/takeClose', 'takeClose'); // 接案者的評價按鈕
});

//會員服務管理，刪除
// Route::get('/memservice',MemberServiceController::class);
// Route::post('/memserviceDelete',MemberserviceDeleteController::class);
//會員接案紀錄，刪除
// Route::get('/memberTakeCase',MemberTakeCaseController::class);
// Route::post('/memberTakeCaseDelete',MemberTakeCaseDeleteController::class);
//會員發案紀錄，刪除
// Route::get('/publishCase',PublishCaseController::class);
// Route::post('/publishCaseDelete',PublishCaseDeleteController::class);
// 新增服務
// Route::post('/service',ServiceController::class);
// 新增作品
// Route::post('/work',WorkController::class);
// 新增影音
// Route::post('/video',VideoController::class);
// 會員服務管理、刪除
// Route::get('/memservice',MemberServiceController::class);
// Route::post('/memserviceDelete',MemberserviceDeleteController::class);
// 會員接案紀錄
// Route::get('/memTakeCase',MemberTakeCaseController::class);




