"use server"
import { currentProfile } from "@/components/authentication/current-profile";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    if (req.method === "POST") {
      const formData = await req.formData();

      const name = formData.get("name");
      const file = formData.get("file") as File;
      const friend = formData.get("friend");
      const emoji = formData.get("emoji");
      const event = formData.get("event");

      if (!name || !file || !friend || !emoji || !event)
        return new NextResponse("Missing Content", { status: 412 });

      const authCheck = await currentProfile();

      if (!authCheck)
        return new NextResponse("Unauthorized", { status: 401 });

      //Insert to database


      return new NextResponse(`Data sent successful`, { status: 200 })
    }

    return new NextResponse("Invalid Method", { status: 405 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
