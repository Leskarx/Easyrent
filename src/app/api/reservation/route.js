import { NextResponse } from "next/server";
import prisma from "../../../../prisma/prismaClient";

export async function POST(request) {
    try {
        const { listingId, userId, startDate, phoneNumber, bookedName } = await request.json();

        if (!listingId || !userId || !startDate) {
            throw new Error("Invalid data");
        }

        const reservation = await prisma.reservation.create({
            data: {
                listingId,
                userId,
                startDate,
                phoneNumber: BigInt(phoneNumber),
                bookedName
            }
        });

        if (!reservation) {
            throw new Error("Reservation failed");
        }

        // Convert BigInt to string for JSON serialization
        return NextResponse.json({
            message: "Reservation successful",
            reservation: {
                ...reservation,
                phoneNumber: reservation.phoneNumber.toString()
            }
        }, {
            status: 200
        });

    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}
