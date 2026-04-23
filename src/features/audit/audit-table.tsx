"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { parseAsString, parseAsStringLiteral, useQueryStates } from "nuqs";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { auditLogsQueryKey, fetchAuditLogs } from "./queries";
import type { AuditAction } from "./types";

const actionValues = [
  "all",
  "create",
  "update",
  "delete",
  "sync",
  "approve",
  "reject",
  "login",
] as const;

const actionLabel: Record<AuditAction, string> = {
  create: "Erstellt",
  update: "Aktualisiert",
  delete: "Gelöscht",
  sync: "Synchronisiert",
  approve: "Freigegeben",
  reject: "Abgelehnt",
  login: "Angemeldet",
};

const actionStyle: Record<AuditAction, string> = {
  create: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
  update: "bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-500/20",
  delete: "bg-destructive/10 text-destructive border-destructive/20",
  sync: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-500/20",
  approve: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
  reject: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
  login: "bg-muted text-muted-foreground border-muted",
};

export function AuditTable() {
  const [filters, setFilters] = useQueryStates(
    {
      action: parseAsStringLiteral(actionValues).withDefault("all"),
      q: parseAsString.withDefault(""),
    },
    { history: "replace", shallow: false },
  );

  const { data } = useSuspenseQuery({
    queryKey: auditLogsQueryKey({ action: filters.action, search: filters.q }),
    queryFn: () =>
      fetchAuditLogs({ action: filters.action, search: filters.q }),
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-sm flex-1">
          <Search className="text-muted-foreground absolute top-1/2 left-2.5 size-4 -translate-y-1/2" />
          <Input
            value={filters.q}
            onChange={(e) => setFilters({ q: e.target.value })}
            placeholder="Nach Actor, Summary oder ID suchen..."
            className="pl-9"
          />
        </div>
        <Select
          value={filters.action}
          onValueChange={(v) =>
            setFilters({ action: v as typeof filters.action })
          }
        >
          <SelectTrigger size="sm" className="w-44">
            <SelectValue placeholder="Aktion" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Alle Aktionen</SelectItem>
            {(Object.keys(actionLabel) as AuditAction[]).map((a) => (
              <SelectItem key={a} value={a}>
                {actionLabel[a]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Zeit</TableHead>
              <TableHead>Actor</TableHead>
              <TableHead>Aktion</TableHead>
              <TableHead>Ziel</TableHead>
              <TableHead>Details</TableHead>
              <TableHead>IP</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-muted-foreground h-24 text-center">
                  Keine Einträge.
                </TableCell>
              </TableRow>
            ) : (
              data.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="text-muted-foreground text-xs tabular-nums">
                    {format(new Date(log.createdAt), "d. MMM yyyy HH:mm", {
                      locale: de,
                    })}
                  </TableCell>
                  <TableCell className="font-mono text-xs">
                    {log.actor}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={cn("text-xs", actionStyle[log.action])}
                    >
                      {actionLabel[log.action]}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-mono text-xs">
                    {log.entity}/{log.entityId}
                  </TableCell>
                  <TableCell className="text-sm">{log.summary}</TableCell>
                  <TableCell className="text-muted-foreground font-mono text-xs">
                    {log.ip}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
