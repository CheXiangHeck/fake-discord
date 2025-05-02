import { CreationAbstract } from "../abstract/creationClassAbstract";

export class RoleCreator implements CreationAbstract {
    activate(): Promise<string> {
        throw new Error("Method not implemented.");
    }
}