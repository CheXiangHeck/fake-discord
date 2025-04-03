import { ChannelButtonProps } from "../props/propsInterface";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../ui/tooltip";
import Image from "next/image";

export const ChannelButton: React.FC<ChannelButtonProps> = ({ image, channelName }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="w-[48px] h-[48px] mb-2 rounded-xl bg-gray-600 cursor-pointer p-2 hover:bg-indigo-400">
            {image ? (
              <Image
                src={image}
                alt={channelName || "Channel"}
                width={32}
                height={32}
              />
            ) : (
              <div className="w-[32px] h-[32px] bg-gray-400 rounded-full"></div> // Placeholder if no image
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent side="right" className="bg-gray-600">
          <p>{channelName || "Unnamed Channel"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
