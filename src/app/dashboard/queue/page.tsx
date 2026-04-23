import { Suspense } from "react";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/query-client";
import {
  approvalsQueryKey,
  fetchApprovals,
} from "@/features/approvals/queries";
import { QueueList } from "@/features/approvals/queue-list";
import { Skeleton } from "@/components/ui/skeleton";

type SearchParams = Promise<{ status?: string; q?: string }>;

export default async function QueuePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  const params = {
    status:
      (sp.status as "all" | "pending" | "in_review" | "approved" | "rejected") ??
      "all",
    search: sp.q ?? "",
  };

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: approvalsQueryKey(params),
    queryFn: () => fetchApprovals(params),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Freigaben</h2>
          <p className="text-muted-foreground text-sm">
            Offene Anfragen zur redaktionellen Prüfung.
          </p>
        </div>
        <Suspense fallback={<Skeleton className="h-[500px] rounded-lg" />}>
          <QueueList />
        </Suspense>
      </div>
    </HydrationBoundary>
  );
}
