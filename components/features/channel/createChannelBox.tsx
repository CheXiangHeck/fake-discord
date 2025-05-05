"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { CreateServerSettings } from "./createServerSettings";

export const CreateChannel = () => {

    const [file, setFile] = useState<File>();
    const [serverName, setServerName] = useState("");
    const [tempDisplay, setTempDisplay] = useState<string | null>(null);
    const [friendOnly, setFriendOnly] = useState(false);
    const [customEmoji, setCustomEmoji] = useState(true);
    const [event, setEvent] = useState(true);
    const router = useRouter();

    const checkFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const sentFile = e.target.files?.[0];
        if (sentFile && sentFile.type.startsWith("image/")) {
            setFile(sentFile);
        }
    }

    const removeFile = () => {
        const imageContainer = document.getElementById("imageContainer");
        if (imageContainer) {
            imageContainer.remove();
            setTempDisplay(null);
            setFile(undefined);
        }

        const fileInput = document.getElementById("fileInput");
        if (fileInput) {
            fileInput.classList.remove("hidden");
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (file === undefined || serverName === "") {
            console.log("Please fill in values");
        }

        try {
            const formData = new FormData();
            if (file === undefined) {
                return;
            }

            formData.append("file", file);
            formData.append("name", serverName);
            formData.append("friend", JSON.stringify(friendOnly));
            formData.append("emoji", JSON.stringify(customEmoji));
            formData.append("event", JSON.stringify(event));

            const res =  await axios.post("../api/channel", formData);

            if (res.data === "successful") {

            }

            removeFile();
            setServerName("");
            // router.refresh();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (file) {
            const displayLocation = URL.createObjectURL(file);
            setTempDisplay(displayLocation);
        }
    }, [file])

    useEffect(() => {
        if (tempDisplay) {
            const fileInput = document.getElementById("fileInput");
            if (fileInput) {
                fileInput.classList.add("hidden");
            }
            const imageBox = document.getElementById("imageBox");
            if (imageBox) {
                const container = document.createElement('div');
                container.className = "relative w-16 h-16";
                container.id = "imageContainer";

                const removeButton = document.createElement('p');
                removeButton.textContent = "X";
                removeButton.className = "w-4 w-6 flex justify-center items-center absolute top-0 right-0 rounded-full cursor-pointer bg-red-600";
                removeButton.addEventListener('click', () => {
                    removeFile();
                })

                const img = document.createElement('img');
                img.className = "w-16 h-16 object-cover rounded-full border-1 border-gray-200";
                img.src = tempDisplay;
                img.alt = "Upload preview";
                img.id = "previewImage";

                container.appendChild(img);
                container.appendChild(removeButton);
                imageBox.appendChild(container);
            }
        }
    }, [tempDisplay])

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="w-12 h-12 flex justify-center items-center rounded-xl bg-gray-600 cursor-pointer">
                    <PlusIcon />
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader className="text-black">
                    <DialogTitle>Create Your Server</DialogTitle>
                </DialogHeader>
                <form className="w-full h-full flex flex-col gap-3 p-2" onSubmit={(e) => handleSubmit(e)}>
                    <div className="w-full h-10 flex justify-center items-center" id="imageBox">
                        <label className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer text-2xl" id="fileInput">
                            +
                            <input type="file" className="hidden" accept="image/*" onChange={(e) => checkFile(e)} />
                        </label>
                    </div>
                    <input type="text" placeholder="Your server name..." className="text-black m-2 p-2 border-gray-600 border-2" onChange={(e) => setServerName(e.target.value)} />
                    <CreateServerSettings                        friendOnly={friendOnly}
                        setFriendOnly={setFriendOnly}
                        customEmoji={customEmoji}
                        setCustomEmoji={setCustomEmoji}
                        event={event}
                        setEvent={setEvent}
                    />
                    <DialogFooter>
                        <Button type="submit" className="cursor-pointer">
                            Create
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}