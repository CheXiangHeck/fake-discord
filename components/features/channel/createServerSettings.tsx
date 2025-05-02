"use client";
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

interface Props {
    friendOnly: boolean;
    setFriendOnly: (value: boolean) => void;
    customEmoji: boolean;
    setCustomEmoji: (value: boolean) => void;
    event: boolean;
    setEvent: (value: boolean) => void;
}

export const CreateServerSettings = ({
    friendOnly,
    setFriendOnly,
    customEmoji,
    setCustomEmoji,
    event,
    setEvent,
}: Props) => {
    return (
        <div className="w-full h-full flex gap-2 justify-center items-center text-black">
            <div className="flex items-center space-x-2">
                <Switch id="friend-only" className="cursor-pointer" checked={friendOnly} onCheckedChange={setFriendOnly} />
                <Label htmlFor="friend-only">Friend Only</Label>
            </div>
            <div className="flex items-center space-x-2">
                <Switch id="custom-emoji" className="cursor-pointer" checked={customEmoji} onCheckedChange={setCustomEmoji} />
                <Label htmlFor="custom-emoji">Custom Emoji</Label>
            </div>
            <div className="flex items-center space-x-2">
                <Switch id="event" className="cursor-pointer" checked={event} onCheckedChange={setEvent} />
                <Label htmlFor="event">Event</Label>
            </div>
        </div>
    )
}
