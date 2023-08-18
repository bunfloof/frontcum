"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import * as Popover from "@radix-ui/react-popover";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export function SupportCard() {
  const [copyButtonText, setCopyButtonText] = useState<string>("Copy username");
  const username = "furcon";
  const telegramURL = "https://t.me/bun2003";
  const discordServerURL = "https://discord.gg/uQkn7vVqj6";
  const handleJoinDiscordServer = () => {
    window.open(discordServerURL, "_blank", "noopener,noreferrer");
  };
  const handleTelegramLink = () => {
    window.open(telegramURL, "_blank", "noopener,noreferrer");
  };
  const handleCopyUsername = async () => {
    try {
      await navigator.clipboard.writeText(username);
      setCopyButtonText("Username copied");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  useEffect(() => {
    if (copyButtonText === "Username copied") {
      const timer = setTimeout(() => {
        setCopyButtonText("Copy username");
      }, 1500); // revert back to original text after 1.5 seconds

      return () => clearTimeout(timer);
    }
  }, [copyButtonText]);
  return (
    <div className="mt-4 grid gap-4 grid-cols-1 p-0 m-0 ">
      <Card>
        <div className="grid md:grid-cols-1 xl:grid-cols-2">
          <div>
            <CardHeader>
              <CardTitle>Contact support</CardTitle>
              <CardDescription>See what we can do for you.</CardDescription>
            </CardHeader>
          </div>
          <div className="my-auto">
            <CardContent className="p-6">
              <div className="flex gap-4 justify-end">
                <Button variant="secondary">Open Ticket</Button>
                <Popover.Root>
                  <Popover.Trigger asChild>
                    <Button variant="secondary">Discord</Button>
                  </Popover.Trigger>
                  <Popover.Portal>
                    <Popover.Content
                      className="bg-zinc-900 data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
                      sideOffset={5}
                    >
                      <div className="flex flex-col gap-[7px]">
                        <div className="flex flex-col gap-[10px]">
                          <div className="text-sm font-medium">
                            Message Bun on Discord
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Send Bun a friend request on Discord and message
                            them directly.
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Username: {username}
                          </div>
                          <Button
                            variant="secondary"
                            className="p-1"
                            onClick={handleCopyUsername}
                          >
                            {copyButtonText}
                          </Button>
                          <Separator />
                          <div className="text-sm font-medium">
                            Community Discord Server
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Join the community Discord server to chat with the
                            community and get help from other members.
                          </div>

                          <Button
                            variant="secondary"
                            className="p-1"
                            onClick={handleJoinDiscordServer}
                          >
                            Join Discord server
                          </Button>
                        </div>
                      </div>

                      <Popover.Arrow className="fill-white/10" />
                    </Popover.Content>
                  </Popover.Portal>
                </Popover.Root>
                <Button variant="secondary" onClick={handleTelegramLink}>
                  Telegram
                </Button>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default SupportCard;