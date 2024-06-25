import prisma from "../../../../prisma/prismaClient";
import { NextResponse } from "next/server";
export async function POST(request){
    const {listingId,value} =  await request.json();
   
    const updatedListing = await prisma.listing.update({
        where: {
        id: listingId,
        },
        data: {
            available:!value,
        },
    });
    return NextResponse.json({message:"Updated successfully"})
}