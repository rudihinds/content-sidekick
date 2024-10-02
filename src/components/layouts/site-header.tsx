import React from "react";
import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/brand/logo.png"
            alt="Content Sidekick"
            width={150}
            height={40}
            priority
          />
        </Link>
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  )
}
