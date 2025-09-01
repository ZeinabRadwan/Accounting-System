<?php

namespace Database\Factories;

use App\Models\Client;
use App\Models\ChartOfAccount;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ClientFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Client::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $type = $this->faker->randomElement(['Company', 'Individual']);
        $name = $type === 'Company' 
            ? $this->faker->company() 
            : $this->faker->name();
        
        return [
            'name' => $name,
            'client_id' => $this->faker->unique()->numberBetween(1000, 9999),
            'slug' => Str::slug($name),
            'type' => $type,
            'email' => $this->faker->unique()->safeEmail(),
            'phone' => $this->faker->phoneNumber(),
            'company_name' => $type === 'Company' ? $name : null,
            'address' => $this->faker->address(),
            'tax_registration_number' => $this->faker->optional(0.7)->numerify('TRN-########'),
            'status' => $this->faker->boolean(80), // 80% chance of being active
            'image_path' => $this->faker->optional(0.3)->imageUrl(200, 200, 'business'),
            'chart_of_account_id' => null, // Will be set in state methods
        ];
    }

    /**
     * Indicate that the client is a company.
     */
    public function company()
    {
        return $this->state(function (array $attributes) {
            return [
                'type' => 'Company',
                'company_name' => $this->faker->company(),
            ];
        });
    }

    /**
     * Indicate that the client is an individual.
     */
    public function individual()
    {
        return $this->state(function (array $attributes) {
            return [
                'type' => 'Individual',
                'company_name' => null,
            ];
        });
    }

    /**
     * Indicate that the client is active.
     */
    public function active()
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => true,
            ];
        });
    }

    /**
     * Indicate that the client is inactive.
     */
    public function inactive()
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => false,
            ];
        });
    }

    /**
     * Indicate that the client has a chart of account.
     */
    public function withChartOfAccount()
    {
        return $this->state(function (array $attributes) {
            return [
                'chart_of_account_id' => ChartOfAccount::factory(),
            ];
        });
    }

    /**
     * Create a client with minimal required data for testing.
     */
    public function minimal()
    {
        return $this->state(function (array $attributes) {
            return [
                'email' => null,
                'company_name' => null,
                'address' => null,
                'tax_registration_number' => null,
                'image_path' => null,
            ];
        });
    }
}
