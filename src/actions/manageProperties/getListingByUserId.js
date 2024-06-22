import prisma from "../../../prisma/prismaClient";

export default  async function getListingByUserId(userId){
    const listing= await prisma.listing.findMany({
        where:{
            userId:userId
        }
    })
   


    return listing
}









