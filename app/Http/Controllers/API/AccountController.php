<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\Account\StoreAccountRequest;
use App\Http\Requests\Account\UpdateAccountRequest;
use App\Http\Resources\AccountResource;
use App\Http\Resources\AccountTransactionResource;
use App\Models\Account;
use App\Models\AccountRoutingSetting;
use App\Models\AccountTransaction;
use App\Models\ChartOfAccount;
use App\Services\ImageService;
use App\Traits\ApiResponse;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;

class AccountController extends Controller
{
    use ApiResponse;

    private $imageService;

    // define middleware
    public function __construct(ImageService $imageService)
    {
        $this->middleware('can:account-list', ['only' => ['index', 'search']]);
        $this->middleware('can:account-create', ['only' => ['create']]);
        $this->middleware('can:account-view', ['only' => ['show']]);
        $this->middleware('can:account-edit', ['only' => ['update']]);
        $this->middleware('can:account-delete', ['only' => ['destroy']]);

        $this->imageService = $imageService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return AccountResource::collection(Account::with('chartOfAccount.type')->latest()->paginate($request->perPage));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreAccountRequest $request)
    {
        try {
            // get logged in user
            $user = Auth::user();
            $branchId = (int) ($user->default_branch_id ?? 0);

            // Validate that chart of account is selected
            if (! $request->chartOfAccountId) {
                return $this->responseWithError('Chart of Account is required. Please select a Chart of Account for this cashbook account.');
            }

            // upload thumbnail and set the name
            $imageName = '';
            if ($request->image) {
                $imagePath = public_path('images/accounts/');

                if (! File::exists($imagePath)) {
                    File::makeDirectory($imagePath, 0755, true);
                }

                $imageName = time().'.'.explode('/', explode(':', substr($request->image, 0, strpos($request->image, ';')))[1])[1];
                Image::make($request->image)->save($imagePath.$imageName);
            }

            // store account
            $account = Account::create([
                'bank_name' => $request->bankName,
                'branch_name' => $request->branchName,
                'account_number' => $request->accountNumber,
                'date' => $request->date,
                'image_path' => $imageName,
                'created_by' => auth()->user()->id,
                'chart_of_account_id' => $request->chartOfAccountId,
                'note' => clean($request->note),
                'status' => $request->status,
                'branch_id' => $branchId,
            ]);

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($account)
                ->withProperties([
                    'name' => '',
                    'code' => '['.$request->accountNumber.']',
                    'event' => 'Create',
                ])
                ->useLog('Account Created')
                ->log('Account Created');

            // Load the account with relationships for response
            $account->load('chartOfAccount.type');

            return $this->responseWithSuccess('Account added successfully!', new AccountResource($account));
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        try {
            $account = Account::where('slug', $slug)->with('balanceTransactions.user', 'user', 'chartOfAccount.type', 'chartOfAccount.parent')->first();

            return new AccountResource($account);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateAccountRequest $request, $slug)
    {
        $account = Account::where('slug', $slug)->first();

        try {
            // Validate that chart of account is selected
            if (! $request->chartOfAccountId) {
                return $this->responseWithError('Chart of Account is required. Please select a Chart of Account for this cashbook account.');
            }

            // upload thumbnail and set the name
            $imageName = $account->image_path;
            if ($request->image) {
                $imagePath = public_path('images/accounts/');

                // Ensure the directory exists
                if (! File::exists($imagePath)) {
                    File::makeDirectory($imagePath, 0755, true);
                }

                // Delete the existing image if it exists
                if (! empty($imageName) && File::exists($imagePath.$imageName)) {
                    File::delete($imagePath.$imageName);
                }

                // Generate a new image name and save it
                $imageName = time().'.'.explode('/', explode(':', substr($request->image, 0, strpos($request->image, ';')))[1])[1];
                Image::make($request->image)->save($imagePath.$imageName);
            }

            // update account
            $account->update([
                'bank_name' => $request->bankName,
                'branch_name' => $request->branchName,
                'account_number' => $request->accountNumber,
                'date' => $request->date,
                'image_path' => $imageName,
                'chart_of_account_id' => $request->chartOfAccountId,
                'note' => clean($request->note),
                'status' => $request->status,
            ]);

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($account)
                ->withProperties([
                    'name' => '',
                    'code' => '['.$request->accountNumber.']',
                    'event' => 'Update',
                ])
                ->useLog('Account Updated')
                ->log('Account Updated');

            return $this->responseWithSuccess('Account updated successfully');
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($slug)
    {
        try {
            $account = Account::where('slug', $slug)->first();

            // Check for any transactions linked to this account
            $transactionCount = AccountTransaction::where('account_id', $account->id)->count();
            if ($transactionCount > 0) {
                return $this->responseWithError('This account has transactions and cannot be deleted.', 422);
            }

            // Check for second account transactions (where this account is used as second_account_id)
            $secondAccountTransactionCount = AccountTransaction::where('second_account_id', $account->id)->count();
            if ($secondAccountTransactionCount > 0) {
                return $this->responseWithError('This account is used in other transactions and cannot be deleted.', 422);
            }

            // delete asset image
            if ($account->image_path) {
                @unlink(public_path('images/accounts/'.$account->image_path));
            }

            // add activity log
            activity()
                ->causedBy(Auth::user())
                ->performedOn($account)
                ->withProperties([
                    'name' => '',
                    'code' => '['.$account->account_number.']',
                    'event' => 'Delete',
                ])
                ->useLog('Account Deleted')
                ->log('Account Deleted');

            $account->delete();

            return $this->responseWithSuccess('Account deleted successfully');
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Get chart of accounts for dropdown selection
     *
     * @return \Illuminate\Http\Response
     */
    public function getChartOfAccounts()
    {
        try {
            $branchId = Auth::user()->default_branch_id ?? null;

            // Get all active chart of accounts for this branch with translations
            $chartOfAccounts = ChartOfAccount::where('is_active', true)
                ->forBranch($branchId)
                ->with(['type', 'parent.parent.parent.parent', 'translations'])
                ->orderBy('code')
                ->orderBy('name')
                ->get()
                ->map(function ($account) {
                    $level = $account->getLevel();
                    // Get translated name based on current locale
                    $translatedName = method_exists($account, 'getTranslatedField')
                        ? $account->getTranslatedField('name')
                        : $account->name;

                    // Get parent information if available
                    $parentInfo = null;
                    if ($account->parent) {
                        $parentTranslatedName = method_exists($account->parent, 'getTranslatedField')
                            ? $account->parent->getTranslatedField('name')
                            : $account->parent->name;
                        $parentInfo = [
                            'id' => $account->parent->id,
                            'name' => $parentTranslatedName,
                            'code' => $account->parent->code,
                        ];
                    }

                    return [
                        'id' => $account->id,
                        'name' => $translatedName,
                        'code' => $account->code,
                        'type' => $account->type ? $account->type->name : 'Unknown',
                        'level' => $level,
                        'parent' => $parentInfo,
                    ];
                })
                ->filter(function ($account) {
                    // Only include accounts at level 3
                    return $account['level'] === 3;
                })
                ->map(function ($account) {
                    // Remove level from final output
                    unset($account['level']);

                    return $account;
                })
                ->values(); // Reset keys to ensure proper JSON array serialization

            return $this->responseWithSuccess('Chart of accounts retrieved successfully', $chartOfAccounts);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Check if accounts are properly connected to chart of accounts
     *
     * @return \Illuminate\Http\Response
     */
    public function checkAccountsConnection()
    {
        try {
            $unconnectedAccounts = Account::where('status', 1)
                ->whereNull('chart_of_account_id')
                ->get()
                ->map(function ($account) {
                    return [
                        'id' => $account->id,
                        'bankName' => $account->bank_name,
                        'accountNumber' => $account->account_number,
                        'message' => $account->getChartOfAccountValidationMessage(),
                    ];
                });

            $connectedAccounts = Account::where('status', 1)
                ->whereNotNull('chart_of_account_id')
                ->count();

            $totalAccounts = Account::where('status', 1)->count();

            return $this->responseWithSuccess('Account connection status retrieved successfully', [
                'unconnectedAccounts' => $unconnectedAccounts,
                'connectedAccounts' => $connectedAccounts,
                'totalAccounts' => $totalAccounts,
                'connectionPercentage' => $totalAccounts > 0 ? round(($connectedAccounts / $totalAccounts) * 100, 2) : 0,
            ]);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * search resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function search(Request $request)
    {
        $term = $request->term;
        $query = Account::query();

        if ($request->startDate && $request->endDate) {
            $query = $query->whereBetween('date', [$request->startDate, $request->endDate]);
        }

        $query->where(function ($query) use ($term) {
            $query->where('bank_name', 'Like', '%'.$term.'%')
                ->orWhere('branch_name', 'Like', '%'.$term.'%')
                ->orWhere('account_number', 'Like', '%'.$term.'%');
        });

        return AccountResource::collection($query->latest()->paginate($request->perPage));
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function allAccounts()
    {
        // Global scope automatically filters by user's default branch
        $accounts = Account::where('status', 1)
            ->with('chartOfAccount.type')
            ->latest()
            ->get();

        return AccountResource::collection($accounts);
    }

    // return account transactions
    public function accountTransactions(Request $request, $slug)
    {
        $account = Account::where('slug', $slug)->first();
        $transactions = AccountTransaction::with('user', 'cashbookAccount')->where('account_id', $account->id)->latest()->paginate($request->perPage);

        return AccountTransactionResource::collection($transactions);
    }

    // return search transactions
    public function searchTransactions(Request $request, $slug)
    {
        $term = $request->term;

        $account = Account::where('slug', $slug)->first();
        $transactions = AccountTransaction::with('user', 'cashbookAccount')->where('account_id', $account->id)->where(function ($query) use ($term) {
            $query->orWhere('reason', 'LIKE', '%'.$term.'%')->orWhere('amount', 'LIKE', '%'.$term.'%');
        })->latest()->paginate($request->perPage);

        return AccountTransactionResource::collection($transactions);
    }

    /**
     * Get child chart of accounts under main bank or cash account
     *
     * @return \Illuminate\Http\Response
     */
    public function getChildChartOfAccounts(Request $request)
    {
        try {
            $accountType = $request->input('account_type'); // 'bank' or 'cash'
            $branchId = Auth::user()->default_branch_id ?? null;

            if (! in_array($accountType, ['bank', 'cash'])) {
                return $this->responseWithError('Invalid account type. Must be "bank" or "cash".');
            }

            // Get the routing setting for the account type
            $settingKey = $accountType === 'bank' ? 'main_bank_account' : 'main_cash_account';
            $routingSetting = AccountRoutingSetting::where('branch_id', $branchId)
                ->where('module', 'banking')
                ->where('setting_key', $settingKey)
                ->where('is_active', true)
                ->first();

            if (! $routingSetting || ! $routingSetting->main_account_id) {
                return $this->responseWithSuccess('No main account configured', []);
            }

            // Get the main account
            $mainAccount = ChartOfAccount::forBranch($branchId)
                ->find($routingSetting->main_account_id);

            if (! $mainAccount) {
                return $this->responseWithSuccess('Main account not found', []);
            }

            // Get only direct children (not the main account itself, and not nested children)
            $childAccounts = ChartOfAccount::where('parent_id', $mainAccount->id)
                ->where('is_active', true)
                ->forBranch($branchId)
                ->with(['type', 'translations'])
                ->orderBy('code')
                ->orderBy('name')
                ->get()
                ->map(function ($account) {
                    $translatedName = method_exists($account, 'getTranslatedField')
                        ? $account->getTranslatedField('name')
                        : $account->name;

                    return [
                        'id' => $account->id,
                        'name' => $translatedName,
                        'code' => $account->code,
                        'type' => $account->type ? $account->type->name : 'Unknown',
                    ];
                })
                ->values();

            return $this->responseWithSuccess('Child accounts retrieved successfully', $childAccounts);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }

    /**
     * Create a new chart of account under the main bank or cash account
     *
     * @return \Illuminate\Http\Response
     */
    public function createChildChartOfAccount(Request $request)
    {
        try {
            $accountType = $request->input('account_type'); // 'bank' or 'cash'
            $bankName = $request->input('bank_name');
            $branchId = Auth::user()->default_branch_id ?? null;

            // Validate bank name
            if (empty($bankName) || trim($bankName) === '') {
                return $this->responseWithError('Bank name is required to create a chart of account.');
            }

            if (! in_array($accountType, ['bank', 'cash'])) {
                return $this->responseWithError('Invalid account type. Must be "bank" or "cash".');
            }

            // Get the routing setting for the account type
            $settingKey = $accountType === 'bank' ? 'main_bank_account' : 'main_cash_account';
            $routingSetting = AccountRoutingSetting::where('branch_id', $branchId)
                ->where('module', 'banking')
                ->where('setting_key', $settingKey)
                ->where('is_active', true)
                ->first();

            if (! $routingSetting || ! $routingSetting->main_account_id) {
                return $this->responseWithError('Main account is not configured. Please configure it in Accounting Settings.');
            }

            // Get the main account
            $mainAccount = ChartOfAccount::forBranch($branchId)
                ->find($routingSetting->main_account_id);

            if (! $mainAccount) {
                return $this->responseWithError('Main account not found.');
            }

            // Generate unique account code
            $baseCode = $mainAccount->code;
            $existingCodes = ChartOfAccount::where('parent_id', $mainAccount->id)
                ->pluck('code')
                ->toArray();

            // Determine the pattern - check if children use dash format (e.g., 12301-001)
            $useDashFormat = false;
            foreach ($existingCodes as $code) {
                if (strpos($code, '-') !== false) {
                    $useDashFormat = true;
                    break;
                }
            }

            if ($useDashFormat) {
                // Use dash format: parent-001, parent-002, etc.
                $maxNumber = 0;
                $pattern = '/^'.preg_quote($baseCode, '/').'-(\d+)$/';
                foreach ($existingCodes as $code) {
                    if (preg_match($pattern, $code, $matches)) {
                        $maxNumber = max($maxNumber, (int) $matches[1]);
                    }
                }
                $newCode = $baseCode.'-'.str_pad($maxNumber + 1, 3, '0', STR_PAD_LEFT);
            } else {
                // Use numeric suffix format: 1230101, 1230102, etc.
                $maxNumber = 0;
                $codeLength = strlen($baseCode);
                foreach ($existingCodes as $code) {
                    if (strlen($code) > $codeLength && strpos($code, $baseCode) === 0) {
                        $suffix = substr($code, $codeLength);
                        if (is_numeric($suffix)) {
                            $maxNumber = max($maxNumber, (int) $suffix);
                        }
                    }
                }

                // Determine suffix length based on existing codes
                $suffixLength = 2; // Default
                if (! empty($existingCodes)) {
                    $firstChildCode = $existingCodes[0];
                    $suffixLength = strlen($firstChildCode) - $codeLength;
                    $suffixLength = max(2, $suffixLength); // At least 2 digits
                }

                $newCode = $baseCode.str_pad($maxNumber + 1, $suffixLength, '0', STR_PAD_LEFT);
            }

            // Create the new account
            $newAccount = DB::transaction(function () use ($bankName, $newCode, $mainAccount, $branchId) {
                $account = ChartOfAccount::create([
                    'name' => $bankName,
                    'code' => $newCode,
                    'type_id' => $mainAccount->type_id,
                    'parent_id' => $mainAccount->id,
                    'is_active' => true,
                    'created_by' => Auth::id(),
                    'branch_id' => $branchId,
                ]);

                // Create translations if needed
                $locales = ['ar', 'en'];
                foreach ($locales as $locale) {
                    DB::table('chart_of_account_translations')->insert([
                        'chart_of_account_id' => $account->id,
                        'locale' => $locale,
                        'name' => $bankName,
                        'created_at' => now(),
                        'updated_at' => now(),
                    ]);
                }

                return $account;
            });

            // Load relationships for response
            $newAccount->load(['type', 'translations']);

            $translatedName = method_exists($newAccount, 'getTranslatedField')
                ? $newAccount->getTranslatedField('name')
                : $newAccount->name;

            return $this->responseWithSuccess('Chart of account created successfully', [
                'id' => $newAccount->id,
                'name' => $translatedName,
                'code' => $newAccount->code,
                'type' => $newAccount->type ? $newAccount->type->name : 'Unknown',
            ]);
        } catch (Exception $e) {
            return $this->responseWithError($e->getMessage());
        }
    }
}
