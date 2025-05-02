import { auth } from "@clerk/nextjs/server"
import { checkUser } from "./checkUser";


export const currentProfile = async (): Promise<boolean> => {
    const { userId } = await auth();

    if (!userId) return false;

    //check user info in database
    if (!await checkUser(userId)) return false;

    return true;
}