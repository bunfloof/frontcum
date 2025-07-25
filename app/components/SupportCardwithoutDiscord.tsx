'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import * as Popover from '@radix-ui/react-popover'
import { Separator } from '@/components/ui/separator'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { DiscordJoinDialog } from './DiscordJoinDialog'
export function SupportCard() {
  const [copyButtonText, setCopyButtonText] = useState<string>('Copy username')
  const username = 'reverse.engineer'
  const WHMCSURL = 'https://foxomy.com/billing/submitticket.php?step=2&deptid=2'
  const handleWHMCSLink = () => {
    window.open(WHMCSURL, '_blank', 'noopener,noreferrer')
  }
  const handleCopyUsername = async () => {
    try {
      await navigator.clipboard.writeText(username)
      setCopyButtonText('Username copied')
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="container">
      {' '}
      <div className="mt-4 grid gap-4 grid-cols-1 pb-4 m-0">
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
                  <Button variant="secondary" onClick={handleWHMCSLink}>
                    Open Ticket
                  </Button>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default SupportCard
