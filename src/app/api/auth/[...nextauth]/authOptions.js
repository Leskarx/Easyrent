import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "../../../../../prisma/prismaClient";
export const authOption = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: "email", type: "text", placeholder: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials) {
                    return null
                }
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    },
                });
                if (!user) {
                    return null
                }


                // console.log("api option .js", credentials);
                return credentials
            }
        })
    ],
    pages: {
        signIn: '/login'

    },
    session: {
        strategy: "jwt"
    },



    secret: process.env.NEXTAUTH_SECRET,
    debug: true
}