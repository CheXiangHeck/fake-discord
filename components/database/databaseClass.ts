import { createClient } from "@/app/utils/supabase/server";

export class SupabaseDatabase {
  public async insertData(table: string, data: Record<string, string>): Promise<string> {
    const supabase = await createClient();

    const { error } = await supabase.from(table).insert(data);

    if (error) {
        return error.message;
    }
    
    return "successful";
  }

  public async deleteDataById(table: string, id: number[]): Promise<string> {
    const supabase = await createClient();

    const { error } = await supabase.from(table).delete().in('id', id);

    if (error) {
        return error.message;
    }

    return "successful";
  }

  public async deleteDataByWhere(table: string, column: string, value: any): Promise<string> {
    const supabase = await createClient();

    const { error } = await supabase.from(table).delete().gte(column, value);

    if (error) {
        return error.message;
    }

    return "successful";
  }
}
