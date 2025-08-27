<?php

namespace Database\Factories;

use App\Models\ChartOfAccountType;
use Illuminate\Database\Eloquent\Factories\Factory;

class ChartOfAccountTypeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ChartOfAccountType::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->unique()->randomElement(['Asset', 'Liability', 'Equity', 'Revenue', 'Expense']),
            'order' => $this->faker->numberBetween(1, 10),
        ];
    }

    /**
     * Create an asset type.
     */
    public function asset()
    {
        return $this->state(function (array $attributes) {
            return [
                'name' => 'Asset',
                'order' => 1,
            ];
        });
    }

    /**
     * Create a liability type.
     */
    public function liability()
    {
        return $this->state(function (array $attributes) {
            return [
                'name' => 'Liability',
                'order' => 2,
            ];
        });
    }

    /**
     * Create an equity type.
     */
    public function equity()
    {
        return $this->state(function (array $attributes) {
            return [
                'name' => 'Equity',
                'order' => 3,
            ];
        });
    }

    /**
     * Create a revenue type.
     */
    public function revenue()
    {
        return $this->state(function (array $attributes) {
            return [
                'name' => 'Revenue',
                'order' => 4,
            ];
        });
    }

    /**
     * Create an expense type.
     */
    public function expense()
    {
        return $this->state(function (array $attributes) {
            return [
                'name' => 'Expense',
                'order' => 5,
            ];
        });
    }
}
