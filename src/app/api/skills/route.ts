import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/db";
import { time } from "../projects/route";

export async function GET() {
    const skills = await prisma.skill.findMany();
    return NextResponse.json(skills, {
        headers: {
            'Cache-Control': `s-maxage=${time}, stale-while-revalidate=${time}`
        }
    })
}