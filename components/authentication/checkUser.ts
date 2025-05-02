import { SupabaseDatabase } from "../database/databaseClass";

export const checkUser = async (userId: string): Promise<boolean> => {
    if (!userId) return false;

    const database = new SupabaseDatabase();
    
    const status = await database.checkUser(userId);

    const currentUser = await database.getCurrentLoginUser();

    return status && typeof currentUser !== "string";
}