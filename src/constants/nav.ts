import {
  LayoutDashboard,
  Database,
  ShieldCheck,
  HardHat,
  History,
  Settings,
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
    title: "MF Maschinenführer",
    url: "/dashboard/machine",
    icon: HardHat,
    shortcut: ["m", "m"],
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
