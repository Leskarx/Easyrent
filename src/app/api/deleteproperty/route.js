import { NextResponse } from "next/server";
import prisma from "../../../../prisma/prismaClient";
import cloudinary from "../../../../cloudinary/cloudinary";// Update the path as per your project structure

export async function POST(request) {
    const { id } = await request.json();

    if (!id) {
        return NextResponse.error(new Error("Invalid reservationId"));
    }

    try {
        // Retrieve the listing data
        const listing = await prisma.listing.findUnique({
            where: { id },
        });

        if (!listing) {
            return NextResponse.error(new Error("Listing not found"));
        }

        // Delete the main image
        const mainImageId = listing.mainImageSrc.split('/').pop().split('.')[0];
        await cloudinary.uploader.destroy(mainImageId);

        // Delete the array of images
        for (const imageSrc of listing.imagesSrc) {
            const imageId = imageSrc.split('/').pop().split('.')[0];
            await cloudinary.uploader.destroy(imageId);
        }

        // Delete the listing
        const deletedProperty = await prisma.listing.delete({
            where: { id },
        });

        if (!deletedProperty) {
            return NextResponse.error(new Error("Invalid reservationId"));
        }

        return NextResponse.json({
            message: "Reservation deleted successfully",
        });
    } catch (error) {
        console.error(error);
        return NextResponse.error(new Error("An error occurred while deleting the reservation"));
    }
}
