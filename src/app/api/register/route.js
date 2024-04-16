import { NextResponse } from "next/server";
import prisma from "../../../../prisma/prismaClient";
export async function POST(request) {
    try {
        const body = await request.json()
        const { email, number, password, username } = body
        const user = await prisma.user.create({
            data: {
                email,
                phoneNumber: parseInt(number),
                hasedPassword: password,
                name: username
            }
        })
        return NextResponse.json({
            message: "user created success",
            userData: user
        })

    } catch (error) {
        throw new Error("error in register route.js")

    }


}