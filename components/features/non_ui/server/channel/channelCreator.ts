import { SupabaseDatabase } from "@/components/database/databaseClass";
import { CreationAbstract } from "../../abstract/creationClassAbstract";
import { ChannelInfo } from "@/components/props/propsInterface";
import { IDCreator } from "../../IDCreator";

export class ChannelCreator implements CreationAbstract {
    private supabase: SupabaseDatabase;
    private channels: Array<ChannelInfo>;

    constructor(channels: Array<ChannelInfo>) {
        this.supabase = new SupabaseDatabase();
        this.channels = channels;
    }

    

    activate(): Promise<string> {
        throw new Error("Method not implemented.");
    }
    
    //method made for generate server's code for the system.
    //Use 16 for generateServerNum
    public generateServerNum(length: number): string {
        var num = 0;
        for (let i = 1; i < length; i++) {
        num += Math.floor(Math.random() * 10)
        }
        return JSON.stringify(num);
    }

    public async insertIntoDatabase(name: string, settings: JSON, channel_num: number, server_id: string) {
        const status = await this.supabase.insertData("Channel", {
            channelId: IDCreator(),
            name: name,
            settings: settings,
            channel_num: channel_num,
            serverId: server_id
        });

        return status;
    }
}