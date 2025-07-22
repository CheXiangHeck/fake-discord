import { Frame } from "@/components/features/channel/channelFrame";
import { DefaultChannel } from "@/components/features/channel/defaultChannel";
import { FriendSideDisplay } from "@/components/features/channel/defaultFrame(User)/friendSideDisplay";

export default function Page() {
    return (
        <>
            <Frame>
                <FriendSideDisplay />
                <DefaultChannel />
            </Frame>
        </>
    )
}