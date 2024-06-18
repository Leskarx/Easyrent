import { NextResponse } from "next/server";
import prisma from "../../../../prisma/prismaClient";
import next from "next";
async function searchByLocation(location){
    let data=await prisma.listing.findMany({
        where :{
            location:location
        }
    })
    return data;

}
async function searchByPincode(pinCode){
    let data=await prisma.listing.findMany({
        where :{
            pinCode:pinCode
        }
    })
    return data;


}
export async function POST(request){
    const { location, pinCode } = await request.json();
   let data;
    if(!location && !pinCode){
        return NextResponse.json({
            message:"Location and pinCode are required"
        })
    
    }
    if(location && pinCode){
        let combineResult = await prisma.listing.aggregateRaw({
            pipeline:[
        
                {
                    $match: { pinCode: pinCode }
                  },
                  // Using $facet to handle conditional logic
                  {
                    $facet: {
                      // First pipeline: Further filter the documents with roomcount 5
                      filtered: [
                        { $match: { location: location } }
                      ],
                      // Second pipeline: Keep the documents from the first stage as a backup
                      backup: [
                        { $match: {} }  // This will include all documents from the previous stage
                      ]
                    }
                  },
                  // Using $project to check if filtered results are empty and decide which result set to use
                  {
                    $project: {
                      results: {
                        $cond: {
                          if: { $eq: [{ $size: "$filtered" }, 0] },
                          then: "$backup",
                          else: "$filtered"
                        }
                      }
                    }
                  },
                  // Unwind the results array to return documents individually
                  {
                    $unwind: "$results"
                  },
                  // Replace the root with the documents in results array
                  {
                    $replaceRoot: { newRoot: "$results" }
                  }
        
        
            ]

          });
          if(!combineResult || combineResult.length==0){
            data=await searchByLocation(location)
           return  NextResponse.json({
                data:data
            })
           
          }
          if(combineResult){
              return NextResponse.json({
                  data:combineResult
              })
          }

    }

    if(location && !pinCode){
        data=await searchByLocation(location)
        return NextResponse.json({
            data:data
        })
    }

    if(!location && pinCode){
        data=await searchByPincode(pinCode)
        return NextResponse.json({
            data:data
        })
    }
  
    return NextResponse.json({
        messagasge:"Success"
    })
}