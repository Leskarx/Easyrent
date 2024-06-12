import { NextResponse } from "next/server"
import prisma from "../../../../../prisma/prismaClient"
import getUser from "@/actions/nextAuthActions/getUser"

export async function POST(request) {
   try {

    const data=await request.json()
    const user=await getUser()
  if(!user){
    return NextResponse.json({
        success:false,
        message:"user not found",
      
    })
  }
    // console.log(user);
    
    const dataFromDB=await prisma.listing.create({
        data:{
            userId:user.id,
            location:data.location,
            locationName:data.locationName,
            price:parseInt(data.price),
            description:data.description,
            mainImageSrc:data.mainImageSrc,
            imagesSrc:data.imagesSrc,
            roomCount:parseInt(data.roomCount),
            bathroomCount:parseInt(data.bathroomCount),
        }
    
    })
    

    return NextResponse.json(
        {
            success:true,
            message:"successfully added ",
        }

    )


    
   } catch (error) {
    return NextResponse.json(
        {
            success:false,
            message:"failed",
        },
        

    )
    
   }



}  