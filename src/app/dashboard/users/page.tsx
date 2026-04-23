import { Suspense } from "react";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/query-client";
import { auditLogsQueryKey, fetchAuditLogs } from "@/features/audit/queries";
import { AuditTable } from "@/features/audit/audit-table";
import { Skeleton } from "@/components/ui/skeleton";

type SearchParams = Promise<{ action?: string; q?: string }>;

export default async function AuditLogsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  const params = {
    action:
      (sp.action as
        | "all"
        | "create"
        | "update"
        | "delete"
        | "sync"
        | "approve"
        | "reject"
        | "login") ?? "all",
    search: sp.q ?? "",
  };

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: auditLogsQueryKey(params),
    queryFn: () => fetchAuditLogs(params),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Audit-Logs</h2>
          <p className="text-muted-foreground text-sm">
            Vollständige Nachverfolgung aller Aktionen im System.
          </p>
        </div>
        <Suspense fallback={<Skeleton className="h-[500px] rounded-lg" />}>
          <AuditTable />
        </Suspense>
      </div>
    </HydrationBoundary>
  );
}
