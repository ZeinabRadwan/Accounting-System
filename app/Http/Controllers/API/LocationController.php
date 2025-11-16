<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LocationController extends Controller
{
    /**
     * Get regions (مناطق) for Saudi Arabia
     */
    public function getRegions()
    {
        try {
            // Return regions data directly without caching to avoid tagging issues
            $regions = [
                ['id' => 1, 'name_ar' => 'الرياض', 'name_en' => 'Riyadh', 'code' => '01'],
                ['id' => 2, 'name_ar' => 'مكة المكرمة', 'name_en' => 'Makkah', 'code' => '02'],
                ['id' => 3, 'name_ar' => 'المدينة المنورة', 'name_en' => 'Madinah', 'code' => '03'],
                ['id' => 4, 'name_ar' => 'القصيم', 'name_en' => 'Qassim', 'code' => '04'],
                ['id' => 5, 'name_ar' => 'الشرقية', 'name_en' => 'Eastern Province', 'code' => '05'],
                ['id' => 6, 'name_ar' => 'عسير', 'name_en' => 'Asir', 'code' => '06'],
                ['id' => 7, 'name_ar' => 'تبوك', 'name_en' => 'Tabuk', 'code' => '07'],
                ['id' => 8, 'name_ar' => 'حائل', 'name_en' => 'Hail', 'code' => '08'],
                ['id' => 9, 'name_ar' => 'الحدود الشمالية', 'name_en' => 'Northern Borders', 'code' => '09'],
                ['id' => 10, 'name_ar' => 'جازان', 'name_en' => 'Jazan', 'code' => '10'],
                ['id' => 11, 'name_ar' => 'نجران', 'name_en' => 'Najran', 'code' => '11'],
                ['id' => 12, 'name_ar' => 'الباحة', 'name_en' => 'Al Baha', 'code' => '12'],
                ['id' => 13, 'name_ar' => 'الجوف', 'name_en' => 'Al Jawf', 'code' => '13'],
            ];

            return response()->json([
                'success' => true,
                'data' => $regions
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error fetching regions: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get cities (مدن) for a specific region in Saudi Arabia
     */
    public function getCitiesByRegion(Request $request)
    {
        try {
            $regionId = $request->input('region_id');
            $regionCode = $request->input('region_code');

            if (!$regionId && !$regionCode) {
                return response()->json([
                    'success' => false,
                    'message' => 'Region ID or code is required'
                ], 400);
            }

            // Get cities directly without caching to avoid tagging issues
            $allCities = $this->getAllSaudiCities();
            
            if ($regionId) {
                $cities = array_values(array_filter($allCities, function($city) use ($regionId) {
                    return $city['region_id'] == $regionId;
                }));
            } elseif ($regionCode) {
                $cities = array_values(array_filter($allCities, function($city) use ($regionCode) {
                    return $city['region_code'] == $regionCode;
                }));
            } else {
                $cities = [];
            }

            return response()->json([
                'success' => true,
                'data' => array_values($cities)
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error fetching cities: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get all cities for Saudi Arabia
     */
    public function getAllCities()
    {
        try {
            // Return cities directly without caching to avoid tagging issues
            $cities = $this->getAllSaudiCities();

            return response()->json([
                'success' => true,
                'data' => $cities
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error fetching cities: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get districts/neighbourhoods (أحياء) for a specific city
     */
    public function getDistrictsByCity(Request $request)
    {
        try {
            $cityId = $request->input('city_id');
            $cityName = $request->input('city_name');

            if (!$cityId && !$cityName) {
                return response()->json([
                    'success' => false,
                    'message' => 'City ID or name is required'
                ], 400);
            }

            // For now, return empty array as districts data is extensive
            // You can integrate with National Address API here
            $districts = [];

            return response()->json([
                'success' => true,
                'data' => $districts
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error fetching districts: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get all Saudi cities data
     * This is a sample data structure - you can expand it or use external API
     */
    private function getAllSaudiCities()
    {
        // Sample cities - in production, you might want to use a database or external API
        return [
            // Riyadh Region
            ['id' => 1, 'name_ar' => 'الرياض', 'name_en' => 'Riyadh', 'region_id' => 1, 'region_code' => '01'],
            ['id' => 2, 'name_ar' => 'الدرعية', 'name_en' => 'Diriyah', 'region_id' => 1, 'region_code' => '01'],
            ['id' => 3, 'name_ar' => 'الخرج', 'name_en' => 'Al Kharj', 'region_id' => 1, 'region_code' => '01'],
            ['id' => 4, 'name_ar' => 'الدوادمي', 'name_en' => 'Dawadmi', 'region_id' => 1, 'region_code' => '01'],
            ['id' => 5, 'name_ar' => 'المجمعة', 'name_en' => 'Majmaah', 'region_id' => 1, 'region_code' => '01'],
            ['id' => 6, 'name_ar' => 'القويعية', 'name_en' => 'Quwayiyah', 'region_id' => 1, 'region_code' => '01'],
            ['id' => 7, 'name_ar' => 'الأفلاج', 'name_en' => 'Al Aflaj', 'region_id' => 1, 'region_code' => '01'],
            ['id' => 8, 'name_ar' => 'وادي الدواسر', 'name_en' => 'Wadi Al Dawasir', 'region_id' => 1, 'region_code' => '01'],
            ['id' => 9, 'name_ar' => 'الزلفي', 'name_en' => 'Az Zulfi', 'region_id' => 1, 'region_code' => '01'],
            ['id' => 10, 'name_ar' => 'شقراء', 'name_en' => 'Shaqra', 'region_id' => 1, 'region_code' => '01'],
            ['id' => 11, 'name_ar' => 'عفيف', 'name_en' => 'Afif', 'region_id' => 1, 'region_code' => '01'],
            ['id' => 12, 'name_ar' => 'السليل', 'name_en' => 'As Sulayyil', 'region_id' => 1, 'region_code' => '01'],
            ['id' => 13, 'name_ar' => 'الدلم', 'name_en' => 'Ad Dilam', 'region_id' => 1, 'region_code' => '01'],
            ['id' => 14, 'name_ar' => 'الرماح', 'name_en' => 'Ar Rass', 'region_id' => 1, 'region_code' => '01'],
            ['id' => 15, 'name_ar' => 'ثادق', 'name_en' => 'Thadiq', 'region_id' => 1, 'region_code' => '01'],
            ['id' => 16, 'name_ar' => 'حريملاء', 'name_en' => 'Huraymila', 'region_id' => 1, 'region_code' => '01'],
            ['id' => 17, 'name_ar' => 'الحريق', 'name_en' => 'Al Hariq', 'region_id' => 1, 'region_code' => '01'],
            ['id' => 18, 'name_ar' => 'الغاط', 'name_en' => 'Al Ghat', 'region_id' => 1, 'region_code' => '01'],
            ['id' => 19, 'name_ar' => 'مرات', 'name_en' => 'Marat', 'region_id' => 1, 'region_code' => '01'],
            ['id' => 20, 'name_ar' => 'رماح', 'name_en' => 'Rumah', 'region_id' => 1, 'region_code' => '01'],
            
            // Makkah Region
            ['id' => 21, 'name_ar' => 'مكة المكرمة', 'name_en' => 'Makkah', 'region_id' => 2, 'region_code' => '02'],
            ['id' => 22, 'name_ar' => 'جدة', 'name_en' => 'Jeddah', 'region_id' => 2, 'region_code' => '02'],
            ['id' => 23, 'name_ar' => 'الطائف', 'name_en' => 'Taif', 'region_id' => 2, 'region_code' => '02'],
            ['id' => 24, 'name_ar' => 'رابغ', 'name_en' => 'Rabigh', 'region_id' => 2, 'region_code' => '02'],
            ['id' => 25, 'name_ar' => 'خليص', 'name_en' => 'Khulays', 'region_id' => 2, 'region_code' => '02'],
            ['id' => 26, 'name_ar' => 'القنفذة', 'name_en' => 'Qunfudhah', 'region_id' => 2, 'region_code' => '02'],
            ['id' => 27, 'name_ar' => 'الليث', 'name_en' => 'Al Lith', 'region_id' => 2, 'region_code' => '02'],
            ['id' => 28, 'name_ar' => 'الجموم', 'name_en' => 'Al Jumum', 'region_id' => 2, 'region_code' => '02'],
            ['id' => 29, 'name_ar' => 'خميس مشيط', 'name_en' => 'Khamis Mushait', 'region_id' => 2, 'region_code' => '02'],
            ['id' => 30, 'name_ar' => 'أبها', 'name_en' => 'Abha', 'region_id' => 2, 'region_code' => '02'],
            
            // Madinah Region
            ['id' => 31, 'name_ar' => 'المدينة المنورة', 'name_en' => 'Madinah', 'region_id' => 3, 'region_code' => '03'],
            ['id' => 32, 'name_ar' => 'ينبع', 'name_en' => 'Yanbu', 'region_id' => 3, 'region_code' => '03'],
            ['id' => 33, 'name_ar' => 'العلا', 'name_en' => 'Al Ula', 'region_id' => 3, 'region_code' => '03'],
            ['id' => 34, 'name_ar' => 'المهد', 'name_en' => 'Al Mahd', 'region_id' => 3, 'region_code' => '03'],
            ['id' => 35, 'name_ar' => 'خيبر', 'name_en' => 'Khaybar', 'region_id' => 3, 'region_code' => '03'],
            
            // Qassim Region
            ['id' => 36, 'name_ar' => 'بريدة', 'name_en' => 'Buraydah', 'region_id' => 4, 'region_code' => '04'],
            ['id' => 37, 'name_ar' => 'عنيزة', 'name_en' => 'Unayzah', 'region_id' => 4, 'region_code' => '04'],
            ['id' => 38, 'name_ar' => 'الرس', 'name_en' => 'Ar Rass', 'region_id' => 4, 'region_code' => '04'],
            ['id' => 39, 'name_ar' => 'المذنب', 'name_en' => 'Al Midhnab', 'region_id' => 4, 'region_code' => '04'],
            ['id' => 40, 'name_ar' => 'البكيرية', 'name_en' => 'Al Bukayriyah', 'region_id' => 4, 'region_code' => '04'],
            
            // Eastern Province
            ['id' => 41, 'name_ar' => 'الدمام', 'name_en' => 'Dammam', 'region_id' => 5, 'region_code' => '05'],
            ['id' => 42, 'name_ar' => 'الخبر', 'name_en' => 'Khobar', 'region_id' => 5, 'region_code' => '05'],
            ['id' => 43, 'name_ar' => 'الجبيل', 'name_en' => 'Jubail', 'region_id' => 5, 'region_code' => '05'],
            ['id' => 44, 'name_ar' => 'القطيف', 'name_en' => 'Qatif', 'region_id' => 5, 'region_code' => '05'],
            ['id' => 45, 'name_ar' => 'الأحساء', 'name_en' => 'Al Ahsa', 'region_id' => 5, 'region_code' => '05'],
            ['id' => 46, 'name_ar' => 'حفر الباطن', 'name_en' => 'Hafr Al Batin', 'region_id' => 5, 'region_code' => '05'],
            ['id' => 47, 'name_ar' => 'الخفجي', 'name_en' => 'Al Khafji', 'region_id' => 5, 'region_code' => '05'],
            ['id' => 48, 'name_ar' => 'رأس تنورة', 'name_en' => 'Ras Tanura', 'region_id' => 5, 'region_code' => '05'],
            ['id' => 49, 'name_ar' => 'النعيرية', 'name_en' => 'An Nuayriyah', 'region_id' => 5, 'region_code' => '05'],
            ['id' => 50, 'name_ar' => 'بقيق', 'name_en' => 'Buqayq', 'region_id' => 5, 'region_code' => '05'],
        ];
    }
}
