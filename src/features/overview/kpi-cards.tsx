"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { AlertTriangle, CheckCircle2, Package, TrendingUp, Users2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchOverviewStats, overviewQueryKey } from "./queries";

export function KpiCards() {
  const { data } = useSuspenseQuery({
    queryKey: overviewQueryKey,
    queryFn: fetchOverviewStats,
  });

  const items = [
    {
      label: "Kaffeeprodukte",
      value: data.totalProducts.toLocaleString("de-DE"),
      hint: "+12 % diesen Monat",
      icon: Package,
    },
    {
      label: "Synchronisiert",
      value: `${data.syncedPercent.toFixed(1)} %`,
      hint: "Letzter Sync: vor 5 Min.",
      icon: CheckCircle2,
    },
    {
      label: "Fehlende Bilder",
      value: data.missingImages.toString(),
      hint: "Handlungsbedarf",
      icon: AlertTriangle,
    },
    {
      label: "Offene Freigaben",
      value: data.pendingApprovals.toString(),
      hint: "Warten auf Review",
      icon: TrendingUp,
    },
    {
      label: "Maschinenführer",
      value: data.activeOperators.toString(),
      hint: "Gerade im Dienst",
      icon: Users2,
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Card key={item.label}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-muted-foreground text-sm font-medium">
                {item.label}
              </CardTitle>
              <Icon className="text-muted-foreground size-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold tracking-tight">
                {item.value}
              </div>
              <CardDescription className="mt-1 text-xs">
                {item.hint}
              </CardDescription>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
