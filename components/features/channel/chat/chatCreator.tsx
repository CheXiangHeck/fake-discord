export class chatCreator {

    public createUserInfoBox(userImage: string, username: string, date: string, time: string) {
        const UserInfoBox = document.createElement("div");

        UserInfoBox.classList.add("infoBox");

    }

    public createUserInfo() {
        
    }

    public createImage(userImage:string, username: string): HTMLImageElement {
        const Image = document.createElement("img");

        Image.src = userImage;
        Image.classList.add("avatar");
        Image.alt = username;

        return Image;
    }
}