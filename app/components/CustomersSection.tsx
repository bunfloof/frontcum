"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import * as Popover from '@radix-ui/react-popover';
import { Separator } from "@/components/ui/separator";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CustomersSection() {
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
    <>
      <p className="font-semibold text-3xl sm:text-5xl text-center">
        Our Community
      </p>
      <p className="py-5 text-md sm:text-lg text-center text-muted-foreground">
        {`We're proud to serve a diverse and passionate community of individuals
        and organizations. Our customers include social justice activists, human
        rights advocates, community organizers, and anyone committed to the
        fight against injustice, inequality, and white supremacy. Together, we
        are working towards a better world.`}
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <div className="p-6 pb-0 pt-6 flex items-start space-x-2 rounded-md p-3">
            <Image
              src="/images/goldie.jpg"
              alt="goldie"
              className="rounded-full"
              width={32}
              height={32}
              priority
            />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">Goldie</p>
              <p className="text-sm text-muted-foreground">
                Black trans activist, California
              </p>
            </div>
          </div>
          <CardContent className="pb-6 pt-2">
            <p className="text-sm text-muted-foreground">
              {`“the problem is white people they robbed me of my
              happiness and pride, omg I fucking HATE white people so much, the
              world would be a much better place without those privileged ass
              mfs and yeah @Bun is cool for giving me free hosting”`}
            </p>
          </CardContent>
        </Card>
        <Card>
          <div className="p-6 pb-0 pt-6 flex items-start space-x-2 rounded-md p-3">
            <Image
              src="/images/kobi.png"
              alt="kobi"
              className="rounded-full"
              width={32}
              height={32}
              priority
            />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">Kobi</p>
              <p className="text-sm text-muted-foreground">
                Chinese-Venezuelan Software Engineer, California
              </p>
            </div>
          </div>
          <CardContent className="pb-2 pt-2">
            <p className="text-sm text-muted-foreground">
              {`“Thanks for setting up my mongodb host and modded minecraft server. I'm sure a lot of my friends appreciated your help.”`}
            </p>
          </CardContent>
        </Card>
        <Card>
          <div className="p-6 pb-0 pt-6 flex items-start space-x-2 rounded-md p-3">
            <Image
              src="/images/cozmo.png"
              alt="cozmo"
              className="rounded-full"
              width={32}
              height={32}
              priority
            />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">Cozmo</p>
              <p className="text-sm text-muted-foreground">
                Vietnamese POC pre-med student
              </p>
            </div>
          </div>
          <CardContent className="pb-6 pt-2">
            <p className="text-sm text-muted-foreground">
              {`“I agree with your bio. fuck white people. you should kick them all off your hosting. America would probably be better off without white people”`}
            </p>
          </CardContent>
        </Card>
        <Card>
          <div className="p-6 pb-0 pt-6 flex items-start space-x-2 rounded-md p-3">
            <Image
              src="/images/mriq.png"
              alt="mriqplays"
              className="rounded-full"
              width={32}
              height={32}
              priority
            />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">Mr. IQ Plays</p>
              <p className="text-sm text-muted-foreground">
                Latine POC server owner
              </p>
            </div>
          </div>
          <CardContent className="pb-6 pt-2">
            <p className="text-sm text-muted-foreground">
              {`“server is excellent, better than businesses owned by straight white men”`}
            </p>
          </CardContent>
        </Card>
        <Card>
          <div className="p-6 pb-0 pt-6 flex items-start space-x-2 rounded-md p-3">
            <Image
              src="/images/highshot.jpg"
              alt="highshot"
              className="rounded-full"
              width={32}
              height={32}
              priority
            />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">HighShotVN</p>
              <p className="text-sm text-muted-foreground">
                POC photographer and filmmaker
              </p>
            </div>
          </div>
          <CardContent className="pb-6 pt-2">
            <p className="text-sm text-muted-foreground">
              {`“I was moved from AZDIGI due to hosting bad material. He helped me host my đám gay sàigòn website in less than 1 hour. Thank you many”`}
            </p>
          </CardContent>
        </Card>
        <Card>
          <div className="p-6 pb-0 pt-6 flex items-start space-x-2 rounded-md p-3">
            <Image
              src="/images/crazyhead.png"
              alt="goldie"
              className="rounded-full"
              width={32}
              height={32}
              priority
            />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                ilovemygf._192729192
              </p>
              <p className="text-sm text-muted-foreground">
                POC gamer, California
              </p>
            </div>
          </div>
          <CardContent className="pb-6 pt-2">
            <p className="text-sm text-muted-foreground">
              {`“Goldie, your words resonate with me deeply. Our communities have both suffered immensely under the systems of oppression perpetuated by white supremacy. I share your anger and your pain. Fuck white people.”`}
            </p>
          </CardContent>
        </Card>
      </div>
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
    </>
  );
}

export default CustomersSection;
