import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "bolt",
  description: "Simple UI HTML components for React",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={GeistSans.className} lang="en">
      <body >
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex flex-1">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
