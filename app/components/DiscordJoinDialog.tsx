import React, { useState } from "react";
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

interface DiscordJoinDialogProps {
  discordLink: string;
  children: React.ReactNode; // This will be the trigger element
}

export const DiscordJoinDialog: React.FC<DiscordJoinDialogProps> = ({
  discordLink,
  children
}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Leaving Foxomy</DialogTitle>
          <DialogDescription>
            Remember that this public Discord server is an unofficial
            support platform. Discord is not operated or owned by Foxomy.
            Discord has its own terms and privacy policies that are
            different from Foxomy.
            <br />
            <br />
            Please read the rules before joining our Discord community:
            <ul className="list-inside list-disc pl-5">
              <li>
                {`Follow Discord's community guidelines. See them here:  `}
                <a
                  href="https://discord.com/guidelines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 underline transition-colors"
                >
                  https://discord.com/guidelines
                </a>
              </li>
              <li>
                No hate speech, violence, racism, nazism, zionism, sexism,
                ableism, homophobia, transphobia, misogyny, or any other
                kind of bigotry.
              </li>
              <li>
                No harassing or bullying users under any circumstances.
              </li>
              <li>No NSFW, suggestive, or illegal content.</li>
              <li>
                No impersonation of other users, moderators, bots, or
                Foxomy staff.
              </li>
            </ul>
          </DialogDescription>
        </DialogHeader>

        <div className="items-top flex space-x-2 cursor-pointer">
          <Checkbox 
            id="terms1" 
            checked={isChecked}
            onCheckedChange={(checked: boolean) => setIsChecked(checked as boolean)}
            className="cursor-pointer"
          />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              I've read and agree to the rules.
            </label>
          </div>
        </div>
        
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <a 
              href={discordLink}
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ${!isChecked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              onClick={(e) => !isChecked && e.preventDefault()}
            >
              Join
            </a>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};