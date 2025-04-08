import { ChannelButton } from "@/components/custom/channelButton";
import { LoadingPage } from "@/components/features/loadingPage/LoadingPage";
import { UserInfoBox } from "@/components/features/userBox/userInfoBox";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-slate-900 h-full">
      <nav className="flex justify-between p-2">
        <div></div>
        <div>Solana</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
            className="cursor-pointer"
          >
            <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 12h-4l-1 2h-4l-1-2H5V5h14v10z" />
          </svg>
        </div>
      </nav>
      <div className="flex h-full">
        <div className="p-3 h-full">
          <ChannelButton channelName="Inbox" image="/inbox.png" />
        </div>
        {children}
        <UserInfoBox />
        <LoadingPage />
      </div>
    </div>
  );
}
