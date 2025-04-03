import { FrameChannelButton } from "@/components/custom/frameChannelButton";
import { Button } from "@/components/ui/button";
import { ChannelChat } from "./channelChat";

export const Frame = () => {
  return (
    <div className="w-full h-full rounded-xl border-2 border-gray-700 flex overflow-hidden">
      <div className="h-full w-1/4 bg-slate-900">
        <p className="border-b-2 border-gray-700 p-3 text-center">Solana</p>
        <div className="w-full h-full p-3">
          <Button className="flex gap-2 w-full justify-start mb-2 hover:bg-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="currentColor"
            >
              <path d="M7 2v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7zm12 18H5V10h14v10zM7 12h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z" />
            </svg>
            Event
          </Button>
          <div className="w-full px-3 h-0.5 bg-gray-700 mb-2"></div>
          <div className="w-full h-full overflow-y-scroll scroll-hidden">
          </div>
        </div>
      </div>
      <ChannelChat />
    </div>
  );
};
