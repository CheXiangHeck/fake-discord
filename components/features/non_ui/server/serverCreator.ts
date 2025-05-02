import { uploadBlob } from "@/components/blob/blobFunction";
import { SupabaseDatabase } from "@/components/database/databaseClass";
import { PutBlobResult } from "@vercel/blob";
import { CreationAbstract } from "../abstract/creationClassAbstract";

const serverSetting = {
  BASIC: "basic",
  CUSTOM: "custom",
  RESTRICT: "restricted"
}

export class ServerCreator implements CreationAbstract {
  private database: SupabaseDatabase;

  constructor() {
    this.database = new SupabaseDatabase();
  }

  public async activate(): Promise<string> {
    throw new Error("Method not implemented.");
  }

  //Activation of create server process.
  public async createServer(name: string, picture: File, setting: JSON) {
    return this.insertIntoDatabase(name, await this.uploadImage(picture), setting, this.generateServerNum(16));
  }

  //Upload image to nextjs blob
  public async uploadImage(picture: File): Promise<string> {
    const blobUpdate:PutBlobResult = await uploadBlob(picture);

    return blobUpdate.url;
  }

  //Useless for now
  //Changes will be taken when modifying setting
  public serverSetting(type: (typeof serverSetting)[keyof typeof serverSetting], isFriendOnly?: boolean, customEmoji?: boolean, event?: boolean, notification?: boolean) {
    var setting = {};

    switch (type) {
      case "basic":
        setting = {
          isFriendOnly: false,
          customEmoji: true,
          event: true,
          notification: true,
        }
        break;
      case "custom":
        setting = {
          isFriendOnly: isFriendOnly ?? false,
          customEmoji: customEmoji ?? true,
          event: event ?? true,
          notification: notification ?? true,
        }
        break;
      case "restricted":
        setting = {
          isFriendOnly: true,
          customEmoji: false,
          event: event ?? true,
          notification: true,
        }
        break;
    }

    return setting;
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

  public async insertIntoDatabase(name: string, picture: string, setting: JSON, serverNum: string) {
    const status = await this.database.insertData("Server", {
      name: name,
      picture: picture,
      settings: setting,
      server_num: serverNum
    });

    return status;
  }
}


