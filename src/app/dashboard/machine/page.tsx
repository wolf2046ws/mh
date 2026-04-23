import { Suspense } from "react";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/query-client";
import {
  fetchOperators,
  operatorsQueryKey,
} from "@/features/machines/queries";
import { OperatorsGrid } from "@/features/machines/operators-grid";
import { Skeleton } from "@/components/ui/skeleton";

type SearchParams = Promise<{ shift?: string; q?: string }>;

export default async function MachinePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  const params = {
    shift: (sp.shift as "all" | "morning" | "afternoon" | "night") ?? "all",
    search: sp.q ?? "",
  };

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: operatorsQueryKey(params),
    queryFn: () => fetchOperators(params),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Maschinenführer
          </h2>
          <p className="text-muted-foreground text-sm">
            Aktuelle Schichten, Zertifikate und Verfügbarkeit.
          </p>
        </div>
        <Suspense fallback={<Skeleton className="h-[500px] rounded-lg" />}>
          <OperatorsGrid />
        </Suspense>
      </div>
    </HydrationBoundary>
  );
}
