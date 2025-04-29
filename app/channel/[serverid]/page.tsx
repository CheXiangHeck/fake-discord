import { Frame } from "@/components/features/channel/channelFrame";
import { FriendSideDisplay } from "@/components/features/channel/defaultFrame(User)/friendSideDisplay";

export default function Page() {
    return (
        <>
            <Frame>
                <FriendSideDisplay />
            </Frame>
        </>
    )
}