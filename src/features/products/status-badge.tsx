import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ProductStatus } from "./types";

const label: Record<ProductStatus, string> = {
  aktiv: "Aktiv",
  entwurf: "Entwurf",
  gesperrt: "Gesperrt",
  pruefung: "In Prüfung",
  approved: "Approved",
};

const styles: Record<ProductStatus, string> = {
  aktiv:
    "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
  entwurf:
    "border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-400",
  gesperrt:
    "border-destructive/20 bg-destructive/10 text-destructive",
  pruefung:
    "border-sky-500/20 bg-sky-500/10 text-sky-700 dark:text-sky-400",
  approved:
    "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
};

export function ProductStatusBadge({ status }: { status: ProductStatus }) {
  return (
    <Badge variant="outline" className={cn("font-medium", styles[status])}>
      {label[status]}
    </Badge>
  );
}
