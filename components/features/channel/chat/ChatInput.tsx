"use client";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import "@/app/css/FileButton.css";
import { FileInputBox } from "../../input/FileInputBox";

export const ChatInput = () => {
  const [fileInput, setFileInput] = useState<File[]>([]);

  const handleDeleteFile = (indexToRemove: number) => {
    setFileInput((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  useEffect(() => {
    const input = document.getElementById("Input") as HTMLInputElement | null;

    if (!input) return;

    const handleKeyPress = (ev: KeyboardEvent) => {
      if (ev.key === "Enter") {
        console.log(input.value);
      }
    };

    input.addEventListener("keypress", handleKeyPress);

    return () => {
      input.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  const fileSending = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileInput((prev) => [...prev, ...Array.from(e.target.files ?? [])]);
    }
  };

  return (
    <div className="px-3 py-5 w-full absolute bottom-23 items-center">
      <div className="w-full h-20 rounded-t-md mb-2">
        <FileInputBox files={fileInput} handleDelete={handleDeleteFile} />
      </div>
      <div className="flex gap-2">
        <Input type="textarea" className="rounded-md relative" id="Input" />
        <Input
          type="file"
          className="FileUpload absolute right-5 bottom-5.5"
          accept=".jpeg, .jpg, .mp4, .gif, .word, .xls, .ppt"
          id="FileInput"
          name="FileInput"
          onChange={fileSending}
        />
      </div>
    </div>
  );
};
