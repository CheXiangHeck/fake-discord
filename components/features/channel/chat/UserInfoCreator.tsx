export class UserInfoCreator {

    /*
        Example of creation: {
            [🧑] username
                  2025-04-03 09:45 AM
        }
    */

    public createUserInfoBox(userImage: string, username: string, date: string, time: string, id: number): HTMLDivElement {
        const userInfoBox = document.createElement("div");
        userInfoBox.classList.add("infoBox");

        const userInfo = this.createUserInfo(username, date, time);
        const image = this.createImage(userImage, username);

        const chatAndUserInfo = document.createElement("div");
        chatAndUserInfo.appendChild(userInfo);

        const chatTextBox = document.createElement("div");
        chatTextBox.id = username + ";" + id;
        chatTextBox.style.width = "100%";
        chatAndUserInfo.appendChild(chatTextBox);

        userInfoBox.appendChild(image);
        userInfoBox.appendChild(chatAndUserInfo);

        return userInfoBox;
    }

    /*
        Example of creation: {
            username
            date time
        }
    */

    public createUserInfo(username: string, date: string, time: string): HTMLDivElement {
        const userInfo = document.createElement("div");
        userInfo.style.display = "flex";
        userInfo.style.gap = "3px";

        const usernameBox = document.createElement("p");

        usernameBox.textContent = username;

        const dateTimeBox = document.createElement("div");
        dateTimeBox.style.display = "flex";
        dateTimeBox.style.gap = "2px";

        const dateBox = document.createElement("p");
        dateBox.textContent = date;

        const timeBox = document.createElement("p");
        timeBox.textContent = time;

        dateTimeBox.appendChild(dateBox);
        dateTimeBox.appendChild(timeBox);

        userInfo.appendChild(usernameBox);
        userInfo.appendChild(dateTimeBox);

        return userInfo;
    }

    public createImage(userImage:string, username: string): HTMLImageElement {
        const image = document.createElement("img");

        image.src = userImage;
        image.classList.add("avatar");
        image.alt = username;

        return image;
    }
}