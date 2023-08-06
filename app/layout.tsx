"use client";
import { MainFooter, MainHeader } from "@Components/index";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "../lib/registry";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

//Note: Only using default export for root layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("RootLayout rendered"); // to show that this component is not re-rendered on route change
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        {/* StyledComponentsRegistry added to support styled components in application  */}
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
