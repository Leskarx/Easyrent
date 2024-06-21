import prisma from "../../../prisma/prismaClient";
export default async function getMybooking(user){
    // console.log(user);
    if(
        !user
    ){
        return null
    }       
    
    
    const userId=user.id;
    if(!userId ){
        return null
    }
    
  
    const reservation=await prisma.reservation.findMany({
        where:{
            userId:userId
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    if(!reservation || reservation.length===0){
        return null
    }
    let data=[]

await Promise.all(
    reservation.map(async (items)=>{
        let listing= await prisma.listing.findUnique({
            where:{
                id:items.listingId
            }
        })
  
        listing={...listing,startDate:items.startDate,status:items?.status,reservationId:items.id}
        data=[...data,listing]

       
     

        
    })
)
return data
    
    
   


   

}



// reservation.map(async (items)=>{
//     let listing= await prisma.listing.findUnique({
//         where:{
//             id:items.listingId
//         }
//     })

//     listing={...listing,startDate:items.startDate,status:items?.status}
//     data=[...data,listing]
//     console.log("print in getMybooking --->",data)
   
 

    
// })
