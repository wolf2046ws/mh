"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchOverviewStats, overviewQueryKey } from "./queries";

export function SyncChart() {
  const { data } = useSuspenseQuery({
    queryKey: overviewQueryKey,
    queryFn: fetchOverviewStats,
  });

  return (
    <Card className="col-span-full lg:col-span-2">
      <CardHeader>
        <CardTitle>Sync-Aktivität</CardTitle>
        <CardDescription>Letzte 14 Tage — erfolgreiche und fehlerhafte Synchronisationen</CardDescription>
      </CardHeader>
      <CardContent className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data.syncTimeline} margin={{ left: -20, right: 8, top: 8, bottom: 0 }}>
            <defs>
              <linearGradient id="syncedGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-chart-1)" stopOpacity={0.45} />
                <stop offset="95%" stopColor="var(--color-chart-1)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="failedGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-destructive)" stopOpacity={0.45} />
                <stop offset="95%" stopColor="var(--color-destructive)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
            <XAxis dataKey="day" tickLine={false} axisLine={false} stroke="var(--color-muted-foreground)" fontSize={11} />
            <YAxis tickLine={false} axisLine={false} stroke="var(--color-muted-foreground)" fontSize={11} />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-popover)",
                border: "1px solid var(--color-border)",
                borderRadius: 8,
                fontSize: 12,
                color: "var(--color-popover-foreground)",
              }}
            />
            <Area
              type="monotone"
              dataKey="synced"
              stroke="var(--color-chart-1)"
              fill="url(#syncedGrad)"
              strokeWidth={2}
              name="Synchronisiert"
            />
            <Area
              type="monotone"
              dataKey="failed"
              stroke="var(--color-destructive)"
              fill="url(#failedGrad)"
              strokeWidth={2}
              name="Fehler"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
