"use client"
import { ChannelInfo } from "@/components/props/propsInterface";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import { useState } from "react";

export const ChannelInfoHolder = () => {
    const [channelInfo, setChannelInfo] = useState<Array<ChannelInfo>>();

    return (
        <Accordion type="single" collapsible>
            <Button>
                <PlusCircleIcon /> Add
            </Button>
        </Accordion>
    );
}