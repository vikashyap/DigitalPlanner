"use client";
import { MainFooter, MainHeader } from "@Components/index";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "../lib/registry";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <StyledComponentsRegistry>
          <div className="min-h-screen flex flex-col">
            <MainHeader />
            <main className="flex-grow px-4 flex flex-col">{children}</main>
            <MainFooter />
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
