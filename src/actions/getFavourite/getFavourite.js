import prisma from "../../../prisma/prismaClient";

export async function getF(user) {
   
    const arrayOfId = user?.favroiteIds;

    if (!arrayOfId || arrayOfId.length === 0) {
        return false;
    }

   let favouriteData = await Promise.all(arrayOfId.map(async (id) => {
        const data = await prisma.listing.findUnique({
            where: {
                id: id
            }
        });
        return data;
    }));

    return favouriteData;
}
