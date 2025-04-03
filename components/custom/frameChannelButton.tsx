import { FrameChannelButtonProps } from "../props/propsInterface"
import { Button } from "../ui/button"
import Image from "next/image"

export const FrameChannelButton = ({ channelImage, channelName }: FrameChannelButtonProps) => {
    return (
        <Button className="flex gap-2 w-full justify-start mb-2 hover:bg-gray-600">
            {channelImage ? <Image src={channelImage} alt={channelName} className="w-[16px] h-[16px]" /> : ""}
            {channelName}
        </Button>
    )
}