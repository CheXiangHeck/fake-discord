"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageDisplayProps {
  file: File;
}

export const ImageDisplay = ({ file }: ImageDisplayProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    const objectUrl = URL.createObjectURL(file);
    console.log(objectUrl);
    setPreviewUrl(objectUrl);

    // Cleanup on unmount
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  if (!previewUrl) return null;

  return (
    <div className="w-20 h-20 flex flex-col justify-center items-center rounded-xl bg-slate-900">
      <Image src={previewUrl} alt={file.name} width={40} height={40} />
      <p className="w-full p-2 text-center truncate">{file.name}</p>
    </div>
  );
};
