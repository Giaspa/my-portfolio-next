import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/db";
import { time } from "@/types/common";

export async function GET(){
    const experiences = await prisma.experience.findMany();
    return NextResponse.json(experiences, {
        headers: {
            'Cache-Control': `s-maxage=${time}, stale-while-revalidate=${time}`
        }
    });
}