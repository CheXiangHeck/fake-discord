import { auth } from "@clerk/nextjs/server"


export const currentProfile = async (): Promise<boolean> => {
    const { userId } = await auth();

    if (!userId) return false;

    return true;
}