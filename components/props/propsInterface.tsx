export interface ChannelButtonProps {
    image: string;
    channelName: string;
}

export interface FrameChannelButtonProps {
    channelImage?: string,
    channelName: string,
}

export interface ChannelBoxProps {
    channelName: string,
    channels: Array<FrameChannelButtonProps>
}

export interface TargetElementsProps {
    type: ElementType,
    content: ElementContent,
}

export interface ElementContent {
    text: string,
    username: string,
    time: string,
    date: string,
    userImage: string,
    tags?: Array<string>
}

export enum ElementType {
    Chat = "chat",
    Post = "post"
}