"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export const LoadingPage = () => {
  const [loading, setLoading] = useState("flex");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading("hidden");
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className={`w-full h-full absolute top-0 left-0 ${loading} flex-col justify-center items-center z-50 bg-gray-700`}
    >
      <Image
        src="/icons/favicon.ico"
        alt="fake-discord logo"
        width={100}
        height={100}
      />
      <p>Loading...</p>
    </div>
  );
};
