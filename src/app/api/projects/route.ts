import { NextResponse } from "next/server";
import { time } from "@/types/common";
import { createClient } from "@/supabase/client";

export async function GET(){
    const supabase = await createClient();
    const { data: projects } = await supabase.from("Project").select();

    return NextResponse.json(projects, {
        headers: {
            'Cache-Control': `s-maxage=${time}, stale-while-revalidate=${time}`
        }
    });
}