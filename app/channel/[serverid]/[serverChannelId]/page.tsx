import { FriendChannel } from "@/components/custom/friendChannelButton";
import { ChannelChat } from "@/components/features/channel/channelChat";
import { Frame } from "@/components/features/channel/channelFrame";
import { ServerFrame } from "@/components/features/channel/serverFrame";

export const config = {
  runtime: process.env.NEXT_PUBLIC_RUNTIME,
};

export default function Page() {
  return (
    <>
      <Frame>
        <ServerFrame>
          <FriendChannel
            username="Ali"
            className="w-full justify-start cursor-pointer p-3 transition-all hover:bg-gray-700"
          />
        </ServerFrame>
        <ChannelChat />
      </Frame>
    </>
  );
}
