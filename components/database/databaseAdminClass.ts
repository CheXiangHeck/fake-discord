import { createAdminClient } from "@/app/utils/supabase/admin";
import { SupabaseDatabaseBasic } from "./abstract/supabaseInterface";

export class SupabaseAdminDatabase implements SupabaseDatabaseBasic {
    signUp(emailAddress: string, password: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    
    signIn(emailAddress: string, password: string): Promise<string> {
        throw new Error("Method not implemented.");
    }

    public async insertData(table: string, data: Record<string, any>): Promise<string> {
        const supabase = createAdminClient();

        const { error } = await supabase.from(table).insert(data);

        if (error) {
          return error.message;
        }
    
        return "successful";
    }

    public async addUser(emailAddress: string, password: string) {
        const supabase = createAdminClient();
        
        const { data, error } = await supabase.auth.admin.createUser({
            email: emailAddress,
            password: password,
            email_confirm: true,
        });

        if (error) {
            return error.message;
        }

        return data.user.id;
    }
}