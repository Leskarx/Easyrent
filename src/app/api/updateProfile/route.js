import { NextResponse } from "next/server";
import prisma from "../../../../prisma/prismaClient";
export async function POST(request){
    const body=await request.json();
   
    try {
        const user=await prisma.user.update({
            where:{
                id:body.id
            },
            data:{
                name:body?.name,
                email:body?.email,
                image:body?.image,
                age:parseInt(body?.age),
                address:body?.address,
                phoneNumber:body?.phoneNumber,
                gender:body?.gender


                
            }})
            if(!user){
                return NextResponse.json({
                    message:"error"
                })}
            return NextResponse.json({
                message:"success"
            })
        
    } catch (error) {
        throw new Error(error.message)
       
        
    }
   
}