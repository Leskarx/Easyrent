import { NextResponse } from "next/server";
import prisma from "../../../../prisma/prismaClient";
export async function POST(request){
    const {reservationId}=await request.json()
    if(
        !reservationId
    ){
        return NextResponse.error(new Error("Invalid reservationId"))
    }  
    try {
        const deletedReservation=await prisma.reservation.delete({
            where:{
                id:reservationId
            }
        }) 
        if(!deletedReservation){
            return NextResponse.error(new Error("Invalid reservationId"))
        }
        return NextResponse.json({
            message:"Reservation deleted successfully",
        })
        
    } catch (error) {
        return NextResponse.error(new Error("Invalid reservationId"))
        
    }
    
   
    
    
   
}