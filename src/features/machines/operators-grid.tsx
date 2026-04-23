"use client";

import Image from "next/image";
import { useSuspenseQuery } from "@tanstack/react-query";
import { parseAsString, parseAsStringLiteral, useQueryStates } from "nuqs";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { fetchOperators, operatorsQueryKey } from "./queries";
import type { OperatorStatus, Shift } from "./types";

const shiftValues = ["all", "morning", "afternoon", "night"] as const;

const shiftLabel: Record<Shift, string> = {
  morning: "Frühschicht",
  afternoon: "Spätschicht",
  night: "Nachtschicht",
};

const statusStyle: Record<OperatorStatus, string> = {
  active: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
  break: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
  off_duty: "bg-muted text-muted-foreground border-muted",
  sick: "bg-destructive/10 text-destructive border-destructive/20",
};
const statusLabel: Record<OperatorStatus, string> = {
  active: "Im Dienst",
  break: "Pause",
  off_duty: "Abwesend",
  sick: "Krank",
};

export function OperatorsGrid() {
  const [filters, setFilters] = useQueryStates(
    {
      shift: parseAsStringLiteral(shiftValues).withDefault("all"),
      q: parseAsString.withDefault(""),
    },
    { history: "replace", shallow: false },
  );

  const { data } = useSuspenseQuery({
    queryKey: operatorsQueryKey({ shift: filters.shift, search: filters.q }),
    queryFn: () => fetchOperators({ shift: filters.shift, search: filters.q }),
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Tabs
          value={filters.shift}
          onValueChange={(v) =>
            setFilters({ shift: v as typeof filters.shift })
          }
        >
          <TabsList>
            <TabsTrigger value="all">Alle</TabsTrigger>
            <TabsTrigger value="morning">Früh</TabsTrigger>
            <TabsTrigger value="afternoon">Spät</TabsTrigger>
            <TabsTrigger value="night">Nacht</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="relative max-w-sm flex-1">
          <Search className="text-muted-foreground absolute top-1/2 left-2.5 size-4 -translate-y-1/2" />
          <Input
            value={filters.q}
            onChange={(e) => setFilters({ q: e.target.value })}
            placeholder="Nach Name, Nummer oder Maschine suchen..."
            className="pl-9"
          />
        </div>
      </div>

      {data.length === 0 ? (
        <div className="text-muted-foreground rounded-lg border border-dashed py-16 text-center text-sm">
          Keine Maschinenführer gefunden.
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((op) => (
            <Card key={op.id}>
              <CardHeader className="flex-row items-center gap-3 pb-3">
                <div className="bg-muted relative size-10 overflow-hidden rounded-full">
                  <Image
                    src={op.avatarUrl}
                    alt={op.name}
                    fill
                    sizes="40px"
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <div className="truncate font-medium">{op.name}</div>
                  <div className="text-muted-foreground font-mono text-xs">
                    {op.employeeNumber}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Maschine</span>
                  <span className="font-medium">{op.machine}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Schicht</span>
                  <span>{shiftLabel[op.shift]}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Stunden / Woche</span>
                  <span className="tabular-nums">{op.hoursThisWeek} h</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Zertifikat bis</span>
                  <span className="tabular-nums">
                    {format(new Date(op.certificationExpiresAt), "MMM yyyy", {
                      locale: de,
                    })}
                  </span>
                </div>
                <Badge
                  variant="outline"
                  className={cn("w-full justify-center", statusStyle[op.status])}
                >
                  {statusLabel[op.status]}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
