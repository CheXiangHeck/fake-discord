import {
  ChatElementContent,
  ElementType,
  TargetElementsProps,
} from "@/components/props/propsInterface";
import { ChatCreator } from "./ChatCreator";

export class chatFactory {
  private element: HTMLElement;
  private chatConstructor: ChatCreator;

  constructor(element: HTMLElement) {
    this.element = element;
    this.chatConstructor = new ChatCreator();
    this
  }

  public createElement(targetElements: Array<TargetElementsProps>) {
    if (!targetElements || targetElements.length <= 0) {
      return "Required data not passed or missing.";
    }

    for (let item of targetElements) {
      if (item.type === ElementType.Post) {
      } else if (item.type === ElementType.Chat) {
      }
    }
  }

  public createChat(content: ChatElementContent) {
    if (!content) {
      return "Required data is not passed or not entered.";
    }

    if (!this.element) {
      return "Element is not passed or not found.";
    }

    try {
      const frame = document.createElement("div");
      frame.classList.add("frameDesign");

      const randomId = Math.floor(Math.random() * 1000000);

      const chat = this.chatConstructor.createChat(
        content.userImage,
        content.username,
        content.date,
        content.time,
        randomId
      );
      frame.appendChild(chat);

      this.element.appendChild(frame);

      if (content.text) {
        this.chatConstructor.insertText(content.text, content.username + ";" + randomId);
      }

      return "Chat created.";
    } catch (error) {
      return error;
    }
  }
}
