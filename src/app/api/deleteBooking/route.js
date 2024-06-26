import { NextResponse } from "next/server";
import prisma from "../../../../prisma/prismaClient";
export async function POST(request){
    const {id}=await request.json()
    console.log("ID in route",id)
    if(
        !id
    ){
        return NextResponse.error(new Error("Invalid reservationId"))
    }  
    try {
        const deletedReservation=await prisma.reservation.delete({
            where:{
                id:id
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