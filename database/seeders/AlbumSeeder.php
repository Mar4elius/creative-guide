<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Schema;
// Models
use App\Models\Album;

class AlbumSeeder extends Seeder
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

            foreach ($data->album as $album)
                Album::create(
                    [
                        'user_id' => '1', // default to 1
                        'title' => $album->title,
                        'description' => $album->description,
                        'image' => $album->img,
                        'is_featured' => $album->featured,
                        'date'  => $album->date
                    ]
                );
        }
    }
}
