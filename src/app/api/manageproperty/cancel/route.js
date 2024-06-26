import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/prismaClient";
export async function POST(request){
    const {id}=await request.json()
    if(
        !id
    ){
        return NextResponse.error(new Error("Invalid reservationId"))
    }  
    try {
        const updatedReservation=await prisma.reservation.update({
            where:{
                id:id
            },
            data:{
                status:"cancelled"
            }

        }) 
        if(!updatedReservation){
            return NextResponse.error(new Error("Invalid reservationId"))
        }
        return NextResponse.json({
            message:"Reservation canceled successfully",
        })
        
    } catch (error) {
        return NextResponse.error(new Error("Invalid reservationId"))
        
    }
    
   
    
    
   
}