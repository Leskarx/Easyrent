import prisma from "../../../prisma/prismaClient";
export default async function getListingBycategory(category){
    const listing= await prisma.listing.findMany({
        where:{
            type:category
        }
    });
    // console.log("listing data",listing);
    return listing

} 

















