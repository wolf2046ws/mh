import { Suspense } from "react";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/query-client";
import { fetchOverviewStats, overviewQueryKey } from "@/features/overview/queries";
import { KpiCards } from "@/features/overview/kpi-cards";
import { SyncChart } from "@/features/overview/sync-chart";
import { StatusChart } from "@/features/overview/status-chart";
import { CategoryList } from "@/features/overview/category-list";
import { Skeleton } from "@/components/ui/skeleton";

export default async function OverviewPage() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: overviewQueryKey,
    queryFn: fetchOverviewStats,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Katalogübersicht
          </h2>
          <p className="text-muted-foreground text-sm">
            MH/C4C Stammdaten auf einen Blick.
          </p>
        </div>

        <Suspense fallback={<KpiSkeleton />}>
          <KpiCards />
        </Suspense>

        <div className="grid gap-4 lg:grid-cols-3">
          <Suspense fallback={<Skeleton className="h-[340px] rounded-xl lg:col-span-2" />}>
            <SyncChart />
          </Suspense>
          <Suspense fallback={<Skeleton className="h-[340px] rounded-xl" />}>
            <StatusChart />
          </Suspense>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <Suspense fallback={<Skeleton className="h-[300px] rounded-xl" />}>
            <CategoryList />
          </Suspense>
        </div>
      </div>
    </HydrationBoundary>
  );
}

function KpiSkeleton() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} className="h-[110px] rounded-xl" />
      ))}
    </div>
  );
}
