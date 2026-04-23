"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import {
  parseAsString,
  parseAsStringLiteral,
  useQueryStates,
} from "nuqs";
import { formatDistanceToNow } from "date-fns";
import { de } from "date-fns/locale";
import { toast } from "sonner";
import { Check, Search, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { approvalsQueryKey, fetchApprovals } from "./queries";
import type { Approval, ApprovalPriority } from "./types";

const statusValues = ["all", "pending", "in_review", "approved", "rejected"] as const;

const priorityStyles: Record<ApprovalPriority, string> = {
  low: "bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-500/20",
  normal: "bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-500/20",
  high: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
  urgent: "bg-destructive/10 text-destructive border-destructive/20",
};

const priorityLabel: Record<ApprovalPriority, string> = {
  low: "Niedrig",
  normal: "Normal",
  high: "Hoch",
  urgent: "Dringend",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function ApprovalRow({ item }: { item: Approval }) {
  return (
    <Card className="py-4">
      <CardContent className="flex flex-col gap-4 px-4 sm:flex-row sm:items-center">
        <Avatar className="size-10 shrink-0">
          <AvatarFallback>{initials(item.requestedBy)}</AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-medium">{item.productName}</span>
            <span className="text-muted-foreground font-mono text-xs">
              {item.mhNumber}
            </span>
            <Badge
              variant="outline"
              className={cn("text-xs", priorityStyles[item.priority])}
            >
              {priorityLabel[item.priority]}
            </Badge>
          </div>
          <p className="text-muted-foreground mt-1 text-sm">
            <span className="text-foreground">{item.change}</span> · angefragt
            von {item.requestedBy} ·{" "}
            {formatDistanceToNow(new Date(item.requestedAt), {
              addSuffix: true,
              locale: de,
            })}
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => toast.error(`${item.productName} abgelehnt`)}
          >
            <X />
            Ablehnen
          </Button>
          <Button
            size="sm"
            onClick={() => toast.success(`${item.productName} freigegeben`)}
          >
            <Check />
            Freigeben
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function QueueList() {
  const [filters, setFilters] = useQueryStates(
    {
      status: parseAsStringLiteral(statusValues).withDefault("all"),
      q: parseAsString.withDefault(""),
    },
    { history: "replace", shallow: false },
  );

  const { data } = useSuspenseQuery({
    queryKey: approvalsQueryKey({ status: filters.status, search: filters.q }),
    queryFn: () => fetchApprovals({ status: filters.status, search: filters.q }),
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Tabs
          value={filters.status}
          onValueChange={(v) =>
            setFilters({ status: v as typeof filters.status })
          }
        >
          <TabsList>
            <TabsTrigger value="all">Alle</TabsTrigger>
            <TabsTrigger value="pending">Offen</TabsTrigger>
            <TabsTrigger value="in_review">In Prüfung</TabsTrigger>
            <TabsTrigger value="approved">Freigegeben</TabsTrigger>
            <TabsTrigger value="rejected">Abgelehnt</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="relative max-w-sm flex-1">
          <Search className="text-muted-foreground absolute top-1/2 left-2.5 size-4 -translate-y-1/2" />
          <Input
            value={filters.q}
            onChange={(e) => setFilters({ q: e.target.value })}
            placeholder="Freigaben suchen..."
            className="pl-9"
          />
        </div>
      </div>

      <Tabs value={filters.status}>
        <TabsContent value={filters.status} className="space-y-3">
          {data.length === 0 ? (
            <div className="text-muted-foreground rounded-lg border border-dashed py-16 text-center text-sm">
              Keine Freigaben in dieser Kategorie.
            </div>
          ) : (
            data.map((item) => <ApprovalRow key={item.id} item={item} />)
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
