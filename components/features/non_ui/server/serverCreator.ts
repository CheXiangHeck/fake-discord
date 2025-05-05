import { uploadBlob } from "@/components/blob/blobFunction";
import { SupabaseDatabase } from "@/components/database/databaseClass";
import { PutBlobResult } from "@vercel/blob";
import { CreationAbstract } from "../abstract/creationClassAbstract";
import { IDCreator } from "../IDCreator";

interface ServerSetting {
  isFriendOnly: boolean;
  customEmoji: boolean;
  event: boolean;
  notification: boolean;
}

const serverSetting = {
  BASIC: "basic",
  CUSTOM: "custom",
  RESTRICT: "restricted"
}

//This is working properly
export class ServerCreator implements CreationAbstract {
  private database: SupabaseDatabase;
  private name: string;
  private picture: File;
  private setting: ServerSetting;
  private serverId: string | undefined;

  constructor(name: string, picture: File, setting: ServerSetting) {
    this.database = new SupabaseDatabase();
    this.name = name;
    this.picture = picture;
    this.setting = setting;
  }

  //The method for starting the creation of server
  //The method will have Channel creation and others so it will be 
  public async activate(): Promise<string> {
    return this.createServer(this.name, this.picture, this.setting);
  }

  //Activation of create server process.
  public async createServer(name: string, picture: File, setting: ServerSetting) {
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
    let result = "";
    const characters = "0123456789";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  public async insertIntoDatabase(name: string, picture: string, setting: ServerSetting, serverNum: string) {
    const ID = IDCreator();
    this.serverId = ID;

    const status = await this.database.insertData("Server", {
      serverId: ID,
      name: name,
      picture: picture,
      settings: setting,
      server_num: serverNum
    });

    return status;
  }

  public getID(): string {
    return this.serverId ?? "Server ID not created.";
  }
}


