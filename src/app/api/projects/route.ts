import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/db";
import { time } from "@/types/common";

export async function GET(){
    const projects = await prisma.project.findMany();
    return NextResponse.json(projects, {
        headers: {
            'Cache-Control': `s-maxage=${time}, stale-while-revalidate=${time}`
        }
    });
}