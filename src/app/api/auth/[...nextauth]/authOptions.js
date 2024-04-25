import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "../../../../../prisma/prismaClient";
import { PrismaAdapter } from "@auth/prisma-adapter"
import GoogleProvider from "next-auth/providers/google";
export const authOption = {
    adapter: PrismaAdapter(prisma),

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          }),


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