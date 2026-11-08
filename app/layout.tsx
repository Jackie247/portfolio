import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import TopBar from "./components/TopBar";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JYu Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <TopBar />
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
