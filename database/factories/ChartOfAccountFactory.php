<?php

namespace Database\Factories;

use App\Models\ChartOfAccount;
use App\Models\ChartOfAccountType;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class ChartOfAccountFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ChartOfAccount::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->unique()->words(3, true),
            'code' => $this->faker->unique()->regexify('[A-Z]{2}[0-9]{3}'),
            'type_id' => ChartOfAccountType::factory(),
            'parent_id' => null,
            'order' => $this->faker->numberBetween(1, 100),
            'is_active' => $this->faker->boolean(90), // 90% chance of being active
            'created_by' => User::factory(),
        ];
    }

    /**
     * Indicate that the account is active.
     */
    public function active()
    {
        return $this->state(function (array $attributes) {
            return [
                'is_active' => true,
            ];
        });
    }

    /**
     * Indicate that the account is inactive.
     */
    public function inactive()
    {
        return $this->state(function (array $attributes) {
            return [
                'is_active' => false,
            ];
        });
    }

    /**
     * Create an asset account.
     */
    public function asset()
    {
        return $this->state(function (array $attributes) {
            return [
                'type_id' => ChartOfAccountType::where('name', 'Asset')->first() ?? ChartOfAccountType::factory(['name' => 'Asset']),
                'name' => $this->faker->randomElement([
                    'Cash',
                    'Bank Accounts',
                    'Accounts Receivable',
                    'Inventory',
                    'Equipment',
                    'Buildings',
                    'Land'
                ]),
            ];
        });
    }

    /**
     * Create a liability account.
     */
    public function liability()
    {
        return $this->state(function (array $attributes) {
            return [
                'type_id' => ChartOfAccountType::where('name', 'Liability')->first() ?? ChartOfAccountType::factory(['name' => 'Liability']),
                'name' => $this->faker->randomElement([
                    'Accounts Payable',
                    'Notes Payable',
                    'Accrued Expenses',
                    'Taxes Payable',
                    'Loans Payable'
                ]),
            ];
        });
    }

    /**
     * Create a revenue account.
     */
    public function revenue()
    {
        return $this->state(function (array $attributes) {
            return [
                'type_id' => ChartOfAccountType::where('name', 'Revenue')->first() ?? ChartOfAccountType::factory(['name' => 'Revenue']),
                'name' => $this->faker->randomElement([
                    'Sales Revenue',
                    'Service Revenue',
                    'Interest Income',
                    'Rental Income',
                    'Commission Income'
                ]),
            ];
        });
    }

    /**
     * Create an expense account.
     */
    public function expense()
    {
        return $this->state(function (array $attributes) {
            return [
                'type_id' => ChartOfAccountType::where('name', 'Expense')->first() ?? ChartOfAccountType::factory(['name' => 'Expense']),
                'name' => $this->faker->randomElement([
                    'Cost of Goods Sold',
                    'Salaries and Wages',
                    'Rent Expense',
                    'Utilities',
                    'Insurance',
                    'Depreciation'
                ]),
            ];
        });
    }

    /**
     * Create an accounts receivable account (commonly used for clients).
     */
    public function accountsReceivable()
    {
        return $this->state(function (array $attributes) {
            return [
                'type_id' => ChartOfAccountType::where('name', 'Asset')->first() ?? ChartOfAccountType::factory(['name' => 'Asset']),
                'name' => 'Accounts Receivable',
                'code' => 'AR001',
            ];
        });
    }
}
