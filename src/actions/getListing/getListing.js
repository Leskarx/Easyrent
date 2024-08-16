import prisma from "../../../prisma/prismaClient";
async function getListing() {
    const listing = await prisma.listing.findMany({
        where: {
            available: true
        },
        take: 6,
        orderBy: {
            createdAt: 'desc' // or 'updatedAt' if you want to order by the update timestamp
        }
    });
    // console.log("listing data", listing);
    return listing;
}



export  async function getListingById(id){
    
   try {
     const listing= await prisma.listing.findUnique({
         where:{
             id:id
         }
     })
     const owner=await prisma.user.findUnique({
         where:{
             id:listing.userId
         }
     })
 
 
     return [listing,owner]
   } catch (error) {
         console.log("error in getListingById",error);
        return [null,null]
    
   }
}
















export default getListing;
