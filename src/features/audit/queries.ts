import { mockAuditLogs } from "./mock-data";
import type { AuditAction, AuditLog } from "./types";

export type AuditLogParams = {
  search?: string;
  action?: AuditAction | "all";
  perPage?: number;
};

export async function fetchAuditLogs(
  params: AuditLogParams = {},
): Promise<AuditLog[]> {
  await new Promise((r) => setTimeout(r, 120));
  const { search = "", action = "all", perPage = 50 } = params;
  let list = mockAuditLogs;
  if (action !== "all") list = list.filter((l) => l.action === action);
  if (search) {
    const q = search.toLowerCase();
    list = list.filter(
      (l) =>
        l.actor.toLowerCase().includes(q) ||
        l.summary.toLowerCase().includes(q) ||
        l.entityId.toLowerCase().includes(q),
    );
  }
  return list.slice(0, perPage);
}

export const auditLogsQueryKey = (params: AuditLogParams) =>
  ["audit-logs", params] as const;
