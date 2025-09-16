    /**
     * Create journal entry for balance adjustment
     */
    public function createBalanceAdjustmentJournal(AccountTransaction $accountTransaction, int $userId): JournalEntry
    {
        DB::beginTransaction();
        
        try {
            // Check if journal entry already exists for this balance adjustment
            $existingJournalEntry = JournalEntry::where('source_type', AccountTransaction::class)
                ->where('source_id', $accountTransaction->id)
                ->first();
                
            if ($existingJournalEntry) {
                Log::info("Journal entry already exists for balance adjustment {$accountTransaction->slug} with ID: {$existingJournalEntry->id}");
                DB::rollBack();
                return $existingJournalEntry;
            }

            // Get the cashbook account
            $cashbookAccount = $accountTransaction->cashbookAccount;

            if (!$cashbookAccount) {
                throw new Exception('Cashbook account not found for balance adjustment.');
            }

            // Validate that the account is connected to a chart of account
            if (!$cashbookAccount->isChartOfAccountConnected()) {
                throw new Exception($cashbookAccount->getChartOfAccountValidationMessage());
            }

            // Get chart of account ID
            $chartOfAccountId = $cashbookAccount->getChartOfAccountIdForJournal();

            if (!$chartOfAccountId) {
                throw new Exception('Chart of accounts not found for balance adjustment account.');
            }

            // Determine the adjustment type and create appropriate journal entry
            $isAddBalance = $accountTransaction->type == 1; // 1 = Add, 0 = Remove
            
            // For balance adjustments, we need to create a journal entry that affects:
            // - The cashbook account (Asset)
            // - An equity account (Owner's Equity or Retained Earnings)
            
            // Get the appropriate equity account
            $equityAccount = $this->getDefaultAccount('Owner\'s Equity', 'Equity');
            if (!$equityAccount) {
                $equityAccount = $this->getDefaultAccount('Retained Earnings', 'Equity');
            }
            if (!$equityAccount) {
                throw new Exception('Equity account not found. Please ensure Owner\'s Equity or Retained Earnings account exists.');
            }

            // Create journal entry
            $journalEntry = JournalEntry::create([
                'entry_number' => JournalEntry::generateEntryNumber(),
                'entry_date' => $accountTransaction->transaction_date,
                'reference' => $accountTransaction->slug,
                'description' => "Balance Adjustment: {$accountTransaction->reason}",
                'total_debit' => $accountTransaction->amount,
                'total_credit' => $accountTransaction->amount,
                'status' => 'posted',
                'created_by' => $userId,
                'posted_by' => $userId,
                'posted_at' => now(),
                'source_type' => AccountTransaction::class,
                'source_id' => $accountTransaction->id,
            ]);

            if ($isAddBalance) {
                // Adding balance: Debit Cashbook Account, Credit Equity
                $this->createJournalEntryLine(
                    $journalEntry, 
                    $chartOfAccountId, 
                    $accountTransaction->amount, 
                    0, 
                    1, 
                    "Balance Added to {$cashbookAccount->bank_name} [{$cashbookAccount->account_number}]"
                );

                $this->createJournalEntryLine(
                    $journalEntry, 
                    $equityAccount->id, 
                    0, 
                    $accountTransaction->amount, 
                    2, 
                    "Owner's Equity - Balance Adjustment"
                );
            } else {
                // Removing balance: Debit Equity, Credit Cashbook Account
                $this->createJournalEntryLine(
                    $journalEntry, 
                    $equityAccount->id, 
                    $accountTransaction->amount, 
                    0, 
                    1, 
                    "Owner's Equity - Balance Adjustment"
                );

                $this->createJournalEntryLine(
                    $journalEntry, 
                    $chartOfAccountId, 
                    0, 
                    $accountTransaction->amount, 
                    2, 
                    "Balance Removed from {$cashbookAccount->bank_name} [{$cashbookAccount->account_number}]"
                );
            }

            // Update the account transaction to link it to the journal entry
            $accountTransaction->update(['journal_entry_id' => $journalEntry->id]);

            DB::commit();
            return $journalEntry;
            
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }







