"use server"
import { currentProfile } from "@/components/authentication/current-profile";
import { ServerCreator } from "@/components/features/non_ui/server/serverCreator";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const runtime = process.env.NEXT_PUBLIC_RUNTIME;

  try {
    if (req.method === "POST") {
      const formData = await req.formData();

      const name = formData.get("name");
      const file = formData.get("file") as File;
      const friend = formData.get("friend") === "true";
      const emoji = formData.get("emoji") === "true";
      const event = formData.get("event") === "true";

      if (!name || !file || friend === null || emoji === null || event === null)
        return new NextResponse("Missing Content", { status: 412 });

      const authCheck = await currentProfile();

      if (!authCheck)
        return new NextResponse("Unauthorized", { status: 401 });

      //Insert to database
      const serverCreator = new ServerCreator(name.toString(), file, {
        isFriendOnly: friend,
        customEmoji: emoji,
        event: event,
        notification: true,
      });

      const creationStatus = await serverCreator.activate();

      return new NextResponse(creationStatus , { status: 200 })
    }

    return new NextResponse("Invalid Method", { status: 405 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
