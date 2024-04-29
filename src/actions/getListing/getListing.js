import prisma from "../../../prisma/prismaClient";
async function getListing(){
    const listing= await prisma.listing.findMany();
    // console.log("listing data",listing);
    return listing

} 
export default getListing;