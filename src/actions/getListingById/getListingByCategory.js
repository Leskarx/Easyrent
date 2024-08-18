import prisma from "../../../prisma/prismaClient";
export default async function getListingBycategory(category){
    const listing= await prisma.listing.findMany({
        where:{
            type:category,
            available:true
        },
        orderBy: {
            createdAt: 'desc' // or 'updatedAt' if you want to order by the update timestamp
        }
    });
    // console.log("listing data",listing);
    return listing

} 

export function getListingById(id){
    return prisma.listing.findUnique({
        where:{
            id:id
        }
    })
}

















