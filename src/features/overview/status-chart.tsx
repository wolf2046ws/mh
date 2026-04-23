"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchOverviewStats, overviewQueryKey } from "./queries";

const statusLabels: Record<string, string> = {
  aktiv: "Aktiv",
  entwurf: "Entwurf",
  gesperrt: "Gesperrt",
  pruefung: "In Prüfung",
};

export function StatusChart() {
  const { data } = useSuspenseQuery({
    queryKey: overviewQueryKey,
    queryFn: fetchOverviewStats,
  });

  const chartData = data.byStatus.map((b) => ({
    status: statusLabels[b.status] ?? b.status,
    count: b.count,
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Artikelstatus</CardTitle>
        <CardDescription>Verteilung der Stammdaten</CardDescription>
      </CardHeader>
      <CardContent className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ left: -20, right: 8, top: 8, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
            <XAxis dataKey="status" tickLine={false} axisLine={false} stroke="var(--color-muted-foreground)" fontSize={11} />
            <YAxis tickLine={false} axisLine={false} stroke="var(--color-muted-foreground)" fontSize={11} />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-popover)",
                border: "1px solid var(--color-border)",
                borderRadius: 8,
                fontSize: 12,
                color: "var(--color-popover-foreground)",
              }}
              cursor={{ fill: "var(--color-muted)" }}
            />
            <Bar dataKey="count" fill="var(--color-chart-1)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
