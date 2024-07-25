import prisma from "../../../prisma/prismaClient";
async function getListing(){
    const listing= await prisma.listing.findMany({
        take:6,
    });
    // console.log("listing data",listing);
    return listing

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
