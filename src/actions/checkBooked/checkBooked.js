import prisma from "../../../prisma/prismaClient";
export function checkBooked(listingId, user) {
  return prisma.reservation.findMany({
    where: {
        listingId: listingId,
      userId: user.id
    }
  }).then(data => {
    if (data.length > 0) {
      return true;
    } else {
      return false;
    }
  });

}