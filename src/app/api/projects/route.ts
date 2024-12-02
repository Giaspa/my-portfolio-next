import { NextResponse } from "next/server";
import { time } from "@/types/common";
import { createClient } from "@/supabase/client";

export async function GET() {
    const supabase = await createClient();
    const { data: projects } = await supabase.from("Project").select();

    const headers = new Headers({
        "Content-Type": "application/json",
        "Cache-Control": `s-maxage=${time}, stale-while-revalidate=${time}`,
        "Access-Control-Allow-Origin": `${process.env.NEXT_PUBLIC_BASE_URL}`,
    });

    return NextResponse.json(projects, { headers });
}