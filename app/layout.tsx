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
  title: "Jackie Yu — Software Developer",
  description:
    "Portfolio of Jackie Yu, a software developer building customer-facing experiences and A/B experiments with React and TypeScript.",
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
