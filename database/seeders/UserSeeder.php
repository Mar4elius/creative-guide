<?php

namespace Database\Seeders;

// Support
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
// Models
use App\Models\User;

class UserSeeder extends Seeder
{

    /**
     * Path to the data file
     *
     * @var string
     */
    private $data_file_path = 'database/data/landscapes.json';

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (Schema::hasTable('users')) {
            // get data from json file
            $json_data = File::get($this->data_file_path);

            if (!$json_data) {
                error_log('Data file is not found. Check if data file exists.');
                return;
            }

            $data = json_decode($json_data);
            // Would be great if the data was an array of users. But based on the provided file, looks like we can have only
            // one user. So hard coded INSERT will be used.
            $name = explode(' ', $data->name);
            User::firstOrCreate(
                ['email' => $data->email],
                [
                    'first_name' => $name[0],
                    'last_name' => $name[1],
                    'phone' => $data->phone,
                    'bio' => $data->bio,
                    'profile_picture' => $data->profile_picture,
                    'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                    'remember_token' => Str::random(10),
                ]
            );
        }
    }
}
