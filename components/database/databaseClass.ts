import { createClient } from "@/app/utils/supabase/server";
import { SupabaseDatabaseBasic } from "./abstract/supabaseInterface";

export class SupabaseDatabase implements SupabaseDatabaseBasic {
  public async signUp(emailAddress: string, password: string):Promise<string> {
    const supabase = await createClient();

    const { error } = await supabase.auth.admin.createUser({
      email: emailAddress,
      password: password,
      email_confirm: true
    })

    if (error) return error.message;

    return "Successful";
  }

  public async signIn(emailAddress: string, password: string): Promise<string> {
    const supabase = await createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email: emailAddress,
      password: password
    })

    if (error) return error.message;

    return "Successful";
  }

  public async insertData(
    table: string,
    data: Record<string, any>
  ): Promise<string> {
    const supabase =  await createClient();

    const { error } = await supabase.from(table).insert(data);

    if (error) {
      return error.message;
    }

    return "successful";
  }

  public async checkUser(userId: string): Promise<boolean> {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("User")
      .select("*")
      .eq("userId", userId);

    if (error) {
      return false;
    }

    return data.length > 0;
  }

  public async getCurrentLoginUser() {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.getUser();

    if (error) {
      return error.message;
    }

    return data;
  }

  public async getUser(userId: string) {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("User")
      .select("*")
      .eq("userId", userId);

    if (error) {
      return false;
    }

    return data[0];
  }

  public async deleteDataById(table: string, id: number[]): Promise<string> {
    const supabase = await createClient();

    const { error } = await supabase.from(table).delete().in("id", id);

    if (error) {
      return error.message;
    }

    return "successful";
  }

  public async deleteDataByWhere(
    table: string,
    column: string,
    value: any
  ): Promise<string> {
    const supabase = await createClient();

    const { error } = await supabase.from(table).delete().gte(column, value);

    if (error) {
      return error.message;
    }

    return "successful";
  }
}
