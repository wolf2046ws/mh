"use client";

import { usePathname } from "next/navigation";
import { navItems } from "@/constants/nav";
import { CommandMenu } from "./command-menu";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";
import { UserNav } from "./user-nav";

function pageTitle(pathname: string | null): string {
  const match = navItems.find(
    (item) => pathname === item.url || pathname?.startsWith(item.url + "/"),
  );
  return match?.title ?? "Kurator";
}

export function AppHeader() {
  const pathname = usePathname();
  return (
    <header className="bg-background/80 sticky top-0 z-30 flex h-16 items-center gap-3 border-b px-4 backdrop-blur lg:px-6">
      <MobileNav />
      <div className="min-w-0 flex-1">
        <h1 className="truncate text-base font-semibold tracking-tight sm:text-lg">
          {pageTitle(pathname)}
        </h1>
      </div>
      <div className="hidden sm:block">
        <CommandMenu />
      </div>
      <ThemeToggle />
      <UserNav />
    </header>
  );
}
