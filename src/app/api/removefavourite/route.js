import { NextResponse } from "next/server";
import prisma from "../../../../prisma/prismaClient";

export async function POST(request) {
    const {id} = await request.json();
    const {userId,listingId}=id

    if (!userId || !listingId) {
        return NextResponse.json({ error: "Invalid userId or listingId" }, { status: 400 });
    }

    try {
        const user = await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                favroiteIds: {
                    // Remove listingId from favoriteIds array
                    set: (await prisma.user.findUnique({
                        where: { id: userId },
                        select: { favroiteIds: true }
                    })).favroiteIds.filter(id => id !== listingId)
                }
            }
        });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({
            message: "Listing removed from favorites successfully",
        }, { status: 200 });

    } catch (error) {
        console.log("errorr.......>",error);
        return NextResponse.json({ error: "Error removing listing from favorites" }, { status: 500 });
    }
}
