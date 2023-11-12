"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Switch } from "./ui/inputs/switch/simple-switch";
import { ThemeSwitch } from "./theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/90 backdrop-blur px-8">
      <div className="h-14 flex items-center justify-between container">
        <Link href="/" className="flex items-center space-x-1">
          <img src="/bolt.png" alt={siteConfig.name} className="w-8 h-8" />
          <span className="text-lg font-bold">Bolt</span>
        </Link>

        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/documentation"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/documentation"
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Documentation
          </Link>
          <Link
            href="/examples"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/documentation/components")
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Examples
          </Link>
          <Link
            href="/examples"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/documentation/components")
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Templates
          </Link>

          <div className="bg-foreground/60 w-[1px] h-[20px]" />

          <ThemeSwitch />
        </nav>
      </div>
    </header>
  );
}
