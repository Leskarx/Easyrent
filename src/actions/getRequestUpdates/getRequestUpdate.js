import prisma from "../../../prisma/prismaClient";
export default async function getRequestUpdate(listing){
    // console.log(user);
    if(
        !listing || listing.length===0
    ){
        return null
    }     
    // console.log("listing data",listing);  
    let data=[]

await Promise.all(
    listing.map(async (items)=>{
        let reservations= await prisma.reservation.findMany({
            where:{
                listingId:items.id
            }
        })
        if(!reservations || reservations.length===0){
            return null
        }
        // console.log("reservation data",reservation);
        reservations={reservations,name:items.locationName,location:items?.location}
        data=[...data,reservations]

       
     

        
    })
)
return data
    
    
   


   

}