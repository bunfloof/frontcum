"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { DiscordJoinDialog } from "../components/DiscordJoinDialog";

export default function discord() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <div
        style={{
          backgroundImage:
            "linear-gradient(to top, hsl(0deg 0% 0%), rgba(255, 255, 255, 0)), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(/images/los-angeles-banner.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom 15%",
        }}
        className="pt-10"
      >
        <div className="container mx-auto px-4 mb-10">
          <div className="text-3xl sm:text-5xl font-semibold mt-20">
            Discord Server
          </div>
          <p className="py-5 text-md sm:text-lg text-muted-foreground">
            Please don’t join.
          </p>
        </div>
      </div>

      <div className="bg-black flex-grow">
        <div className="container mx-auto px-4 py-10 ">
          <DiscordJoinDialog discordLink="https://discord.gg/uQkn7vVqj6">
            <Button variant="outline">Join</Button>
          </DiscordJoinDialog>
        </div>
      </div>
    </>
  );
}
