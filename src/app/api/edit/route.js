import { NextResponse } from "next/server";
import prisma from "../../../../prisma/prismaClient";

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("body in edit route...................>>>>>>>....", body);

    if (!body?.id) {
      return NextResponse.json({ message: "User ID is required" }, { status: 409 });
    }

    // Filter out undefined or null fields
    const updatedData = {};
    if (body.location) updatedData.location = body.location.trim();
    if (body.state) updatedData.state = body.state.trim();
    if (body.type) updatedData.type = body.type.toLowerCase();
    if (body.paymentInterval) updatedData.paymentInterval = body.paymentInterval;
    if (body.waterSupply) updatedData.waterSupply = body.waterSupply;
    if (body.electricitySupply) updatedData.electricitySupply = body.electricitySupply;
    if (body.bathroomType) updatedData.bathroomType = body.bathroomType;
    if (body.genderType) updatedData.genderType = body.genderType;
    if (body.pinCode) updatedData.pinCode = body.pinCode.trim();
    if (body.tagLine) updatedData.tagLine = body.tagLine;
    if (body.locationName) updatedData.locationName = body.locationName.trim();
    if (body.price) updatedData.price = parseInt(body.price);
    if (body.description) updatedData.description = body.description;
    if (body.mainImageSrc) updatedData.mainImageSrc = body.mainImageSrc;
    if (body.imagesSrc) updatedData.imagesSrc = body.imagesSrc;
    if (body.roomCount) updatedData.roomCount = parseInt(body.roomCount);
    if (body.bathroomCount) updatedData.bathroomCount = parseInt(body.bathroomCount);

    // Proceed with the update if there's data to update
    if (Object.keys(updatedData).length === 0) {
      return NextResponse.json({ message: "No valid fields provided for update" }, { status: 400 });
    }

    const updatedUser = await prisma.listing.update({
      where: {
        id: body.id,
      },
      data: updatedData,
    });

    if (!updatedUser) {
      return NextResponse.json({ message: "User not found or update failed" }, { status: 404 });
    }

    return NextResponse.json({ message: "Success", user: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
