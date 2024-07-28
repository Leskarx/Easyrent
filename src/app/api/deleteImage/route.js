import { NextResponse } from "next/server";
import cloudinary from "../../../../cloudinary/cloudinary";

export async function POST(request) {
    const { imageId } = await request.json();

    if (!imageId) {
        return NextResponse.json({ error: 'No imageId provided' }, { status: 400 });
    }

    try {
        await cloudinary.uploader.destroy(imageId);
        return NextResponse.json({ message: 'Image deleted successfully' });
    } catch (error) {
        console.error('Error deleting image:', error);
        return NextResponse.json({ error: 'Failed to delete image' }, { status: 500 });
    }
}

