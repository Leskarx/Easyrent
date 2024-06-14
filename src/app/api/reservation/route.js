// This is the route file for the reservation API
import { NextResponse } from "next/server";
import prisma from "../../../../prisma/prismaClient";

export async function POST(request) {
  
    const {listingId,userId,startDate} = await request.json();

    if(!listingId || !userId || !startDate){
        // return NextResponse.json({ message: "Invalid data" }, { status: 400 });
        throw new Error("Invalid data");

    }
    const reservation = await prisma.reservation.create({
        data: {
            listingId,
            userId,
            startDate
        }
    });
    if(!reservation){
        // return NextResponse.json({ message: "Reservation failed" }, { status: 400 });
        throw new Error("Reservation failed");

    }

    // console.log(body);

    return NextResponse.json({ message: "Reservation successful",
    reservation }, { status: 200
    });


}
