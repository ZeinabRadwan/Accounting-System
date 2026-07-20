<?php

namespace App\View\Components;

use Illuminate\View\Component;
use Illuminate\View\View;

class PosLayout extends Component
{
    public function __construct(public ?string $title = 'POS')
    {
    }

    public function render(): View
    {
        return view('layouts.pos');
    }
}
