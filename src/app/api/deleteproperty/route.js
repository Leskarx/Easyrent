import { NextResponse } from "next/server";
import prisma from "../../../../prisma/prismaClient";
export async function POST(request){
    const {id}=await request.json()
    if(
        !id
    ){
        return NextResponse.error(new Error("Invalid reservationId"))
    }  
    try {
        const deletedProperty=await prisma.listing.delete({
            where:{
                id:id
            }
        }) 
        if(!deletedProperty){
            return NextResponse.error(new Error("Invalid reservationId"))
        }
        return NextResponse.json({
            message:"Reservation deleted successfully",
        })
        
    } catch (error) {
        return NextResponse.error(new Error("Invalid reservationId"))
        
    }
    
   
    
    
   
}