import { CreationAbstract } from "../../abstract/creationClassAbstract";
import { RoleInfo } from "@/components/props/propsInterface";
import { SupabaseAdminDatabase } from "@/components/database/databaseAdminClass";

export class RoleCreator implements CreationAbstract {
    private adminSupabase: SupabaseAdminDatabase
    private roles: Array<RoleInfo>;

    constructor(roles: Array<RoleInfo>) {
        this.adminSupabase = new SupabaseAdminDatabase();
        this.roles = roles;
    }

    async activate(): Promise<string> {
        var error = 0;
        for (let i = 0; i < this.roles.length; i++) {
            const res = await this.roleAuthorities(this.roles[i]);

            if (res !== "Successful") {
                error++;
            }
        }

        if (error !== 0) {
            return error + "failed";
        }

        return "Successful";
    }

    public async roleAuthorities(role: RoleInfo) {
        const createRole = await this.adminSupabase.insertData("RoleAvailable", {
            name: role.name,
            settings: role.role
        });

        return createRole;
    }
}