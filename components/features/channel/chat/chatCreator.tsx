import { UserInfoCreator } from "./UserInfoCreator";

export class ChatCreator {
    public userInfoClass: UserInfoCreator;

    constructor() {
        this.userInfoClass = new UserInfoCreator();
    }

    public createChat(userImage: string, username: string, date: string, time: string, randomId: number) {
        const chat = document.createElement("div");

        const userInfoBox = this.userInfoClass.createUserInfoBox(userImage, username, date, time, randomId);

        chat.appendChild(userInfoBox);

        return chat;
    }

    public insertText(text: string, id: string) {
        const element = document.getElementById(id);

        if (!element) {
            return "Element not found";
        }

        const chatContent = document.createElement("p");
        chatContent.textContent = text;

        element?.appendChild(chatContent);
    }

    public insertBlob(blob: string, id: string) {
        const element = document.getElementById(id);

        if (!element) {
            return "Element not found";
        }
    }
}