import {
  LayoutDashboard,
  Database,
  ShieldCheck,
  HardHat,
  History,
  Settings,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  title: string;
  url: string;
  icon: LucideIcon;
  shortcut?: string[];
};

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard/overview",
    icon: LayoutDashboard,
    shortcut: ["d", "d"],
  },
  {
    title: "Kaffee-Produkte",
    url: "/dashboard/product",
    icon: Database,
    shortcut: ["p", "p"],
  },
  {
    title: "Freigaben",
    url: "/dashboard/queue",
    icon: ShieldCheck,
    shortcut: ["q", "q"],
  },
  {
    title: "Maschinenführer",
    url: "/dashboard/machine",
    icon: HardHat,
    shortcut: ["m", "m"],
  },
  {
    title: "MF Ansicht",
    url: "/dashboard/machine/product",
    icon: Zap,
    shortcut: ["v", "v"],
  },
  {
    title: "Audit-Logs",
    url: "/dashboard/users",
    icon: History,
    shortcut: ["a", "a"],
  },
  {
    title: "Einstellungen",
    url: "/dashboard/settings",
    icon: Settings,
    shortcut: ["s", "s"],
  },
];
