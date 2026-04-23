"use client";

import Image from "next/image";
import { useSuspenseQuery } from "@tanstack/react-query";
import { flexRender, getCoreRowModel, useReactTable, type ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { ChevronLeft, ChevronRight, MoreHorizontal, Pencil, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useProductFilters } from "./hooks";
import { fetchProducts, productsQueryKey } from "./queries";
import { ProductStatusBadge } from "./status-badge";
import type { Product } from "./types";

const columns: ColumnDef<Product>[] = [
  {
    id: "image",
    header: "Vorschau",
    cell: ({ row }) => (
      <div className="bg-muted relative size-12 overflow-hidden rounded-md">
        <Image
          src={row.original.musterVorderseite || ""}
          alt={row.original.mhArticelName}
          fill
          sizes="48px"
          unoptimized
          className="object-cover"
        />
      </div>
    ),
  },
  {
    accessorKey: "mhArticelName",
    header: "Artikel",
    cell: ({ row }) => (
      <div className="min-w-[200px]">
        <div className="font-medium">{row.original.mhArticelName}</div>
        <div className="text-muted-foreground text-xs">
          {row.original.coffeeForm}
        </div>
      </div>
    ),
  },
  {
    accessorKey: "mhArticelNumber",
    header: "MH Nummer",
    cell: ({ row }) => (
      <span className="font-mono text-xs">{row.original.mhArticelNumber}</span>
    ),
  },
  {
    accessorKey: "c4cArticelNumber",
    header: "C4C Nummer",
    cell: ({ row }) => (
      <span className="font-mono text-xs">{row.original.c4cArticelNumber}</span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <ProductStatusBadge status={row.original.status} />,
  },
  {
    accessorKey: "owner",
    header: "Verantwortlich",
    cell: ({ row }) => (
      <Badge variant="secondary" className="font-normal">
        {row.original.owner}
      </Badge>
    ),
  },
  {
    accessorKey: "updatedAt",
    header: "Letzte Änderung",
    cell: ({ row }) => (
      <span className="text-muted-foreground text-xs">
        {format(new Date(row.original.updatedAt), "d. MMM yyyy", { locale: de })}
      </span>
    ),
  },
  {
    id: "actions",
    header: () => <span className="sr-only">Aktionen</span>,
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="size-8">
            <MoreHorizontal className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Pencil />
            Bearbeiten
          </DropdownMenuItem>
          <DropdownMenuItem>Details</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">Sperren</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export function ProductsTable() {
  const [filters, setFilters] = useProductFilters();

  const { data } = useSuspenseQuery({
    queryKey: productsQueryKey({
      search: filters.q,
      status: filters.status,
      page: filters.page,
      perPage: filters.perPage,
    }),
    queryFn: () =>
      fetchProducts({
        search: filters.q,
        status: filters.status,
        page: filters.page,
        perPage: filters.perPage,
      }),
  });

  const table = useReactTable({
    data: data.items,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const totalPages = Math.max(1, Math.ceil(data.total / data.perPage));

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-sm flex-1">
          <Search className="text-muted-foreground absolute top-1/2 left-2.5 size-4 -translate-y-1/2" />
          <Input
            value={filters.q}
            onChange={(e) => setFilters({ q: e.target.value, page: 1 })}
            placeholder="Suche nach Name, MH- oder C4C-Nummer..."
            className="pl-9"
          />
        </div>
        <Select
          value={filters.status}
          onValueChange={(v) =>
            setFilters({ status: v as typeof filters.status, page: 1 })
          }
        >
          <SelectTrigger size="sm" className="w-44">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Alle Status</SelectItem>
            <SelectItem value="aktiv">Aktiv</SelectItem>
            <SelectItem value="entwurf">Entwurf</SelectItem>
            <SelectItem value="pruefung">In Prüfung</SelectItem>
            <SelectItem value="gesperrt">Gesperrt</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((hg) => (
              <TableRow key={hg.id}>
                {hg.headers.map((h) => (
                  <TableHead key={h.id}>
                    {h.isPlaceholder ? null : flexRender(h.column.columnDef.header, h.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center text-muted-foreground">
                  Keine Ergebnisse.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between gap-3">
        <p className="text-muted-foreground text-sm">
          Zeige{" "}
          <span className="text-foreground font-medium">
            {(data.page - 1) * data.perPage + 1}–
            {Math.min(data.total, data.page * data.perPage)}
          </span>{" "}
          von {data.total} Artikeln
        </p>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={filters.page <= 1}
            onClick={() => setFilters({ page: Math.max(1, filters.page - 1) })}
          >
            <ChevronLeft className="size-4" />
            Zurück
          </Button>
          <span className="text-sm tabular-nums">
            {data.page} / {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            disabled={filters.page >= totalPages}
            onClick={() => setFilters({ page: Math.min(totalPages, filters.page + 1) })}
          >
            Weiter
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
