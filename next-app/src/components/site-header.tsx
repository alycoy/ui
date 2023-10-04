"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur">
      <div className="h-14 container flex items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-lg font-bold">Aly</span>
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
            href="/documentation/components"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/documentation/components")
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Components
          </Link>
        </nav>
      </div>
    </header>
  );
}
