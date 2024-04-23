import { getServerSession } from "next-auth/next"
import { authOption } from "../app/api/auth/[...nextauth]/authOptions"
import prisma from "../../prisma/prismaClient";
async function getSession() {
    const session = await getServerSession(authOption)
    return session;
}
export default async function getUser() {
    const session = await getSession();
    if (!session) {
        return null
    }
    const user = await prisma.user.findUnique({
            where: {
                email: session.user.email
            }
        })
        // console.log("print in get suer user->>>", user);
    return user;

}