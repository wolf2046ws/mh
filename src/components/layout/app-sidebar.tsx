"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Package2, ChevronLeft } from "lucide-react";
import { navItems } from "@/constants/nav";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useSidebarStore } from "@/hooks/use-sidebar-store";

export function AppSidebar() {
  const pathname = usePathname();
  const { collapsed, toggle } = useSidebarStore();

  return (
    <aside
      className={cn(
        "bg-sidebar text-sidebar-foreground border-sidebar-border fixed inset-y-0 left-0 z-40 hidden flex-col border-r transition-[width] duration-200 md:flex",
        collapsed ? "w-[68px]" : "w-64",
      )}
    >
      <div
        className={cn(
          "flex h-16 items-center border-b px-4",
          collapsed ? "justify-center" : "justify-between",
        )}
      >
        <Link
          href="/dashboard/overview"
          className="flex items-center gap-2 font-semibold"
        >
          <Package2 className="size-6" />
          {!collapsed && <span className="text-base tracking-tight">Kurator</span>}
        </Link>
        {!collapsed && (
          <Button
            variant="ghost"
            size="icon"
            className="size-7"
            onClick={toggle}
            aria-label="Seitenleiste einklappen"
          >
            <ChevronLeft className="size-4" />
          </Button>
        )}
      </div>

      <ScrollArea className="flex-1 py-3">
        <nav className="space-y-1 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active =
              pathname === item.url || pathname?.startsWith(item.url + "/");
            const link = (
              <Link
                key={item.url}
                href={item.url}
                className={cn(
                  "group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground",
                  collapsed && "justify-center px-0",
                )}
              >
                <Icon className="size-4 shrink-0" />
                {!collapsed && <span className="truncate">{item.title}</span>}
              </Link>
            );

            return collapsed ? (
              <Tooltip key={item.url}>
                <TooltipTrigger asChild>{link}</TooltipTrigger>
                <TooltipContent side="right">{item.title}</TooltipContent>
              </Tooltip>
            ) : (
              link
            );
          })}
        </nav>
      </ScrollArea>

      {collapsed && (
        <div className="border-t p-2">
          <Button
            variant="ghost"
            size="icon"
            className="w-full"
            onClick={toggle}
            aria-label="Seitenleiste ausklappen"
          >
            <ChevronLeft className="size-4 rotate-180" />
          </Button>
        </div>
      )}
    </aside>
  );
}
