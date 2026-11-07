"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function TopBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
      <div>
        {!isHome && (
          <Link
            href="/"
            className="flex items-center gap-2 text-muted transition-colors hover:text-foreground"
          >
            <span className="text-sm">Home</span>
          </Link>
        )}
      </div>

      <ThemeToggle />
    </header>
  );
}
