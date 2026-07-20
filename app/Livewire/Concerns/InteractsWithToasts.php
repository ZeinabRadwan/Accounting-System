<?php

namespace App\Livewire\Concerns;

use App\Support\Toast;

trait InteractsWithToasts
{
    /**
     * @param  array<string, mixed>  $replace
     */
    protected function toast(string $message, string|array $typeOrReplace = Toast::SUCCESS, array $replace = []): void
    {
        if (is_array($typeOrReplace)) {
            $replace = $typeOrReplace;
            $type = Toast::SUCCESS;
        } else {
            $type = $typeOrReplace;
        }

        $this->pushToast(Toast::make($message, $type, null, $replace));
    }

    /**
     * @param  array<string, mixed>  $replace
     */
    protected function toastSuccess(string $message, array $replace = [], ?string $title = null): void
    {
        $this->pushToast(Toast::make($message, Toast::SUCCESS, $title, $replace));
    }

    /**
     * @param  array<string, mixed>  $replace
     */
    protected function toastError(string $message, array $replace = [], ?string $title = null): void
    {
        $this->pushToast(Toast::make($message, Toast::ERROR, $title, $replace));
    }

    /**
     * @param  array<string, mixed>  $replace
     */
    protected function toastWarning(string $message, array $replace = [], ?string $title = null): void
    {
        $this->pushToast(Toast::make($message, Toast::WARNING, $title, $replace));
    }

    /**
     * @param  array<string, mixed>  $replace
     */
    protected function toastInfo(string $message, array $replace = [], ?string $title = null): void
    {
        $this->pushToast(Toast::make($message, Toast::INFO, $title, $replace));
    }

    /**
     * @param  array{type: string, title: string, message: string, duration: int}  $payload
     */
    protected function pushToast(array $payload): void
    {
        $this->js(Toast::script($payload));
    }
}
