import { SupabaseAdminDatabase } from "@/components/database/databaseAdminClass";
import { SupabaseDatabase } from "@/components/database/databaseClass";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const runtime = 'edge';

export async function POST(req: Request) {

  try {
    if (req.method === "POST") {
      const user = await currentUser();
      if (!user) {
        return new NextResponse("Unauthorized", { status: 401 });
      }

      const { firstName, lastName, imageUrl, phoneNumbers, emailAddresses } =
        user;

      const { userId } = await req.json();

      const database = new SupabaseDatabase();
      const adminDatabase = new SupabaseAdminDatabase();

      if (!(await database.checkUser(userId as string))) {
        const createUser = await adminDatabase.addUser(
          emailAddresses[0].emailAddress as string,
          userId as string
        );

        const login = await database.signIn(
          emailAddresses[0].emailAddress as string,
          userId as string
        );

        if (login !== "Successful") {
          return new NextResponse("Login Failed", { status: 400 });
        }

        const insertData = await database.insertData("User", {
          userId: userId as string,
          username: ((firstName as string) + lastName) as string,
          picture: imageUrl as string,
          phoneNum: phoneNumbers[0].phoneNumber as string,
          emailAddress: emailAddresses[0].emailAddress as string,
          supabase_uid: createUser as string,
        });

        if (insertData !== "Successful") {
          return new NextResponse("Sign Up Failed", { status: 400 });
        }
      }

      const login = await database.signIn(
        emailAddresses[0].emailAddress as string,
        userId as string
      );

      if (login !== "Successful") {
        return new NextResponse("Login Failed", { status: 400 });
      }

      return NextResponse.json("Successful", { status: 200 });
    }

    return new NextResponse("Invalid Method", { status: 405 });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
