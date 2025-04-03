import { FrameChannelButton } from "@/components/custom/frameChannelButton";
import { ChannelBoxProps } from "@/components/props/propsInterface";

export const ChannelBox = ({ channelName, channels }: ChannelBoxProps) => {
  return (
    <div className="flex flex-col gap-2 justify-start">
      <p>{channelName}</p>
      {channels.length > 0 ? (
        channels.map((channel) => (
          <FrameChannelButton
            channelName={channel.channelName}
            channelImage={channel.channelImage ?? ""}
          />
        ))
      ) : (
        <p>Channel not found.</p>
      )}
    </div>
  );
};
