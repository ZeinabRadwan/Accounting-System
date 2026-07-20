<?php

namespace App\Livewire\Concerns;

trait InteractsWithAdminLayout
{
    use InteractsWithToasts;

    protected function adminView(string $view, array $data = [], string $title = 'Admin')
    {
        return view($view, $data)->layout('layouts.admin', ['title' => __($title)]);
    }

    protected function closeModal(string $name): void
    {
        $this->js('window.dispatchEvent(new CustomEvent("close-modal", { detail: '.json_encode($name).' }))');
    }

    protected function openModal(string $name): void
    {
        $this->js('window.dispatchEvent(new CustomEvent("open-modal", { detail: '.json_encode($name).' }))');
    }
}
