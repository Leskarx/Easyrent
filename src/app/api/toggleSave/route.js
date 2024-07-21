import { NextResponse } from "next/server";
import prisma from "../../../../prisma/prismaClient";

export async function POST(request) {
  try {
    const { listingId, userId } = await request.json();
    console.log("listingId.............>", listingId);
    console.log("userID.............>", userId);

    // Fetch the current favroiteIds for the user
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { favroiteIds: true },
    });

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "User not found",
      });
    }

    // Ensure favroiteIds is an array
    const favroiteIds = user.favroiteIds ?? [];

    let updatedFavroiteIds;

    // Check if listingId already exists in favroiteIds
    if (favroiteIds.includes(listingId)) {
      // Remove listingId from favroiteIds
      updatedFavroiteIds = favroiteIds.filter(id => id !== listingId);
      console.log("Removing listingId from favorites");
    } else {
      // Add listingId to favroiteIds
      updatedFavroiteIds = [...favroiteIds, listingId];
      console.log("Adding listingId to favorites");
    }

    // Update the user's favroiteIds
    const response = await prisma.user.update({
      where: { id: userId },
      data: {
        favroiteIds: updatedFavroiteIds,
      },
    });

    return NextResponse.json({
      data: response,
      success: true,
    });
  } catch (error) {
    console.log("error..............>", error);
    return NextResponse.json({
      success: false,
      message: "An error occurred",
    });
  }
}
