import { UserCircle2Icon } from "lucide-react";

export const DefaultChannel = () => {
    return (
        <div className="md:w-full h-full w-1/2 bg-gray-800">
            <nav className="flex items-center my-1 mx-5 gap-3 h-9">
                <div className="h-full flex justify-center items-center gap-1">
                    <UserCircle2Icon />
                    Friends
                </div>

            </nav>
            <p className="w-full h-0.5 bg-gray-700 mb-1"></p>
            
        </div>
    );
} 