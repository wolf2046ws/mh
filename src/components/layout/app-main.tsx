"use client";

import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/hooks/use-sidebar-store";

export function AppMain({ children }: { children: React.ReactNode }) {
  const { collapsed } = useSidebarStore();
  return (
    <div
      className={cn(
        "flex min-h-screen flex-col transition-[padding] duration-200",
        collapsed ? "md:pl-[68px]" : "md:pl-64",
      )}
    >
      {children}
    </div>
  );
}
