import { ElementContent, ElementType, TargetElementsProps } from "@/components/props/propsInterface";

class chatFactory {
    private element:HTMLBodyElement;

    constructor (element:HTMLBodyElement) {
        this.element = element;
    }

    public createElement(targetElements:Array<TargetElementsProps>) {
        if (!targetElements || targetElements.length <= 0) {
            return "Required data not passed or missing.";
        }

        for (let item of targetElements) {
            if (item.type === ElementType.Post) {
                
            } else if (item.type === ElementType.Chat) {

            }
        }
    }

    public createChat(content:ElementContent) {
        if (!content) {
            return "Required data is not passed or not entered.";
        }

        if (!this.element) {
            return "Element is not passed or not found.";
        }

        const frame = document.createElement("div");
        frame.classList.add("frameDesign");
    }
}