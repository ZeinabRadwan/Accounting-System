<?php

namespace App\Domain\Notifications\Services;

use App\Domain\Auth\Enums\UserRole;
use App\Domain\Notifications\Enums\NotificationEvent;
use App\Models\User;
use App\Notifications\SystemNotification;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Notification;

class NotificationDispatcher
{
    public function __construct(private readonly NotificationSettingsService $settings)
    {
    }

    /**
     * @param  list<string>|null  $roles  Override default roles for the event
     * @param  list<int>  $extraUserIds  Always include these user IDs (if active)
     * @param  int|null  $branchId  When set, Sales recipients are limited to this branch
     * @param  array<string, mixed>  $meta
     */
    public function send(
        NotificationEvent $event,
        string $title,
        string $body,
        ?string $url = null,
        ?array $roles = null,
        array $extraUserIds = [],
        ?int $branchId = null,
        ?string $tone = null,
        ?string $icon = null,
        array $meta = [],
        ?string $fingerprint = null,
        int $dedupeMinutes = 10,
    ): void {
        if (! $this->settings->isEnabled($event)) {
            return;
        }

        $fingerprint = $fingerprint ?: $this->buildFingerprint($event, $meta);

        $recipients = $this->resolveRecipients($roles ?? $event->defaultRoles(), $extraUserIds, $branchId);

        if ($recipients->isEmpty()) {
            return;
        }

        if ($fingerprint && $dedupeMinutes > 0) {
            $alreadyNotified = $this->alreadyNotifiedUserIds($recipients->pluck('id')->all(), $fingerprint, $dedupeMinutes);
            $recipients = $recipients->reject(fn (User $u) => in_array($u->id, $alreadyNotified, true))->values();
        }

        if ($recipients->isEmpty()) {
            return;
        }

        $notification = new SystemNotification(
            event: $event,
            title: $title,
            body: $body,
            url: $url,
            tone: $tone,
            icon: $icon,
            meta: $meta,
            fingerprint: $fingerprint,
        );

        Notification::send($recipients, $notification);
    }

    /**
     * @param  list<string>  $roles
     * @param  list<int>  $extraUserIds
     * @return Collection<int, User>
     */
    public function resolveRecipients(array $roles, array $extraUserIds = [], ?int $branchId = null): Collection
    {
        $roles = array_values(array_unique(array_filter($roles)));

        $query = User::query()->where('is_active', true);

        $users = collect();

        if ($roles !== []) {
            $roleUsers = (clone $query)
                ->whereIn('role', $roles)
                ->when(
                    $branchId !== null && in_array(UserRole::Sales->value, $roles, true),
                    function ($q) use ($branchId, $roles) {
                        // Non-sales roles unrestricted; sales filtered by branch when provided.
                        $q->where(function ($qq) use ($branchId, $roles) {
                            $nonSales = array_values(array_filter(
                                $roles,
                                fn ($r) => $r !== UserRole::Sales->value
                            ));
                            if ($nonSales !== []) {
                                $qq->whereIn('role', $nonSales);
                            }
                            $qq->orWhere(function ($salesQ) use ($branchId) {
                                $salesQ->where('role', UserRole::Sales->value)
                                    ->where('branch_id', $branchId);
                            });
                        });
                    }
                )
                ->get();

            $users = $users->merge($roleUsers);
        }

        if ($extraUserIds !== []) {
            $extra = User::query()
                ->where('is_active', true)
                ->whereIn('id', $extraUserIds)
                ->get();
            $users = $users->merge($extra);
        }

        return $users->unique('id')->values();
    }

    /**
     * @param  list<int>  $userIds
     * @return list<int>
     */
    protected function alreadyNotifiedUserIds(array $userIds, string $fingerprint, int $withinMinutes): array
    {
        if ($userIds === [] || $fingerprint === '') {
            return [];
        }

        return DB::table('notifications')
            ->whereIn('notifiable_id', $userIds)
            ->where('notifiable_type', User::class)
            ->where('created_at', '>=', now()->subMinutes($withinMinutes))
            ->where('data', 'like', '%"fingerprint":"'.addcslashes($fingerprint, '%_"\\').'"%')
            ->pluck('notifiable_id')
            ->map(fn ($id) => (int) $id)
            ->unique()
            ->values()
            ->all();
    }

    /**
     * @param  array<string, mixed>  $meta
     */
    protected function buildFingerprint(NotificationEvent $event, array $meta): ?string
    {
        $parts = [$event->value];

        foreach (['reference_type', 'reference_id', 'branch_id', 'product_id', 'user_id', 'treasury_id'] as $key) {
            if (isset($meta[$key]) && $meta[$key] !== null && $meta[$key] !== '') {
                $parts[] = $key.':'.$meta[$key];
            }
        }

        return count($parts) > 1 ? implode('|', $parts) : null;
    }
}
