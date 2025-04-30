"use client";
import { Button } from "@/components/ui/button";
import "./css/Home.css";
import { SignedOut, SignInButton, SignUpButton, useAuth } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { isLoaded, isSignedIn, userId, sessionId } = useAuth();
  const router = useRouter();

  const afterSignIn = async () => {
    if (isLoaded) {
      if (isSignedIn) {
        router.push(`/channel/@me`);
      }
    }
  }

  useEffect(() => {
    afterSignIn();
  }, [isLoaded, isSignedIn, userId, router, sessionId]);

  return (
    <div className="h-screen flex flex-row BackgroundImage BorderImage">
      <div className="w-full flex relative justify-center items-center backdrop-blur-md">
        <div className="h-3/5 rounded-3xl w-[300px] flex flex-col items-center gap-8 bg-green-400 border-r-8 border-b-4 border-slate-500">
          <img src="favicon.ico" className="w-3/4" alt="Logo"></img>
          <p className="text-white font-bold text-2xl">FAKE DISCORD</p>
          <div className="flex gap-10">
            <SignedOut>
              <SignInButton>
                <Button>Sign In</Button>
              </SignInButton>
              <SignUpButton>
                <Button>Sign Up</Button>
              </SignUpButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </div>
  );
}
