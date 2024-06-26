import prisma from "../../../prisma/prismaClient";
async function getListing(){
    const listing= await prisma.listing.findMany({
        take:6,
    });
    // console.log("listing data",listing);
    return listing

} 
export  async function getListingById(id){
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
}
















export default getListing;
