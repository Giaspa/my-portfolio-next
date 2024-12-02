import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/db";

export const time = 1*60*10; //10 min

export async function GET(){
    const projects = await prisma.project.findMany();
    return NextResponse.json(projects, {
        headers: {
            'Cache-Control': `s-maxage=${time}, stale-while-revalidate=${time}`
        }
    });
}