<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

// Model Image
use App\Models\Image;

class ImageController extends Controller
{
    // save image
    public function save(Request $request)
    {
        // get image
        $image = $request->file('image');

        // get image name
        $imageName = time() . '.' . $image->extension();

        // move image to public folder
        $image->move(public_path('images'), $imageName);

        // save image to database
        $image = new Image();
        $image->name_image = $imageName;
        $image->save();

        // return response
        return response()->json([
            'success' => true,
            'message' => 'Image saved successfully',
            'data' => $image
        ], 200);
    }

    // get images by id
    public function get($id)
    {
        // get image by id
        $image = Image::find($id);

        $image_file = public_path('images') . '/' . $image->name_image;
        $headers = array('Content-Type: image/png',);

        if (file_exists($image_file)) {
            // convert image to base64
            $image_base64 = base64_encode(file_get_contents($image_file));

            // return response
            return response()->json([
                'success' => true,
                'message' => 'Image retrieved successfully',
                'data' => $image_base64
            ], 200, $headers);
        } else {
            // return response
            return response()->json([
                'success' => false,
                'message' => 'Image not found',
            ], 404);
        }
    }
}
