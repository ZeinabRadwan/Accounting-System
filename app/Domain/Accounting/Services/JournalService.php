<?php

namespace App\Domain\Accounting\Services;

use App\Domain\Accounting\Models\JournalEntry;
use Illuminate\Support\Facades\DB;
use InvalidArgumentException;

class JournalService
{
    /**
     * @param  array<int, array{account_type:string,account_reference_id:?int,debit?:float,credit?:float}>  $lines
     */
    public function create(
        string $description,
        array $lines,
        ?string $referenceType = null,
        ?int $referenceId = null,
        ?int $createdBy = null,
        mixed $entryDate = null,
    ): JournalEntry {
        $debitTotal = 0.0;
        $creditTotal = 0.0;
        foreach ($lines as $line) {
            $debitTotal += (float) ($line['debit'] ?? 0);
            $creditTotal += (float) ($line['credit'] ?? 0);
        }

        if (round($debitTotal, 2) !== round($creditTotal, 2)) {
            throw new InvalidArgumentException('Journal entry is not balanced.');
        }

        if ($debitTotal <= 0) {
            throw new InvalidArgumentException('Journal entry must have amounts.');
        }

        return DB::transaction(function () use ($description, $lines, $referenceType, $referenceId, $createdBy, $entryDate) {
            /** @var JournalEntry $entry */
            $entry = JournalEntry::query()->create([
                'entry_date' => $entryDate ?? now(),
                'description' => $description,
                'reference_type' => $referenceType,
                'reference_id' => $referenceId,
                'created_by' => $createdBy,
            ]);

            foreach ($lines as $line) {
                $entry->lines()->create([
                    'account_type' => $line['account_type'],
                    'account_reference_id' => $line['account_reference_id'] ?? null,
                    'debit' => (float) ($line['debit'] ?? 0),
                    'credit' => (float) ($line['credit'] ?? 0),
                ]);
            }

            return $entry->load('lines');
        });
    }
}
