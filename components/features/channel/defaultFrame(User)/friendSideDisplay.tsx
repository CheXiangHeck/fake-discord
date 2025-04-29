import { Button } from "@/components/ui/button";

export const FriendSideDisplay = () => {
    return (
        <div className="w-1/2 md:w-1/4 h-full bg-slate-900 mx-2">
            <Button className="my-1 bg-gray-800 w-full">
                Find or start conversation
            </Button>
            <p className="w-full h-0.5 bg-gray-700 mb-1"></p>
            <div className="w-full h-[87%] overflow-y-scroll scroll-hidden">
                
            </div>
        </div>
    );
}