export interface SupabaseDatabaseBasic {
  signUp(emailAddress: string, password: string): Promise<string>;
  signIn(emailAddress: string, password: string): Promise<string>;
  insertData(table: string, data: Record<string, string>): Promise<string>;
}
