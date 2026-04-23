"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { fetchOverviewStats, overviewQueryKey } from "./queries";

export function CategoryList() {
  const { data } = useSuspenseQuery({
    queryKey: overviewQueryKey,
    queryFn: fetchOverviewStats,
  });
  const max = Math.max(...data.catalogByCategory.map((c) => c.count));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Kategorieverteilung</CardTitle>
        <CardDescription>Artikel pro Kategorie</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {data.catalogByCategory.map((c) => (
          <div key={c.category} className="space-y-1.5">
            <div className="flex justify-between text-sm">
              <span className="font-medium">{c.category}</span>
              <span className="text-muted-foreground">{c.count}</span>
            </div>
            <Progress value={(c.count / max) * 100} className="h-1.5" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
