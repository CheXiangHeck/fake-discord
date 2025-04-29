import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        
    } catch (error) {
        return new NextResponse("Internal Error", { status: 500 });
    }
}