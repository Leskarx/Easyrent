import { NextResponse } from "next/server";
import prisma from "../../../../prisma/prismaClient";
import bcrypt from "bcryptjs"
export async function POST(request) {
    try {
        const salt = bcrypt.genSaltSync(10);
   

        const body = await request.json()
        const { email, number, password, username } = body
        const hashPassword = bcrypt.hashSync(password, salt);
        // console.log("hash password",hashPassword);
        const user = await prisma.user.create({
            data: {
                email,
                phoneNumber: parseInt(number),
                hasedPassword: hashPassword,
                name: username
            }
        })
        return NextResponse.json({
            message: "user created success",
            userData: user
        })

    } catch (error) {
        // console.log("error in route.js.......",error);
        throw new Error("error in register route.js",error)

    }


}