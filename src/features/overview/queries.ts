import { mockProducts } from "@/features/products/mock-data";
import { mockApprovals } from "@/features/approvals/mock-data";
import { mockOperators } from "@/features/machines/mock-data";

export type OverviewStats = {
  totalProducts: number;
  syncedPercent: number;
  missingImages: number;
  pendingApprovals: number;
  activeOperators: number;
  byStatus: { status: string; count: number }[];
  syncTimeline: { day: string; synced: number; failed: number }[];
  catalogByCategory: { category: string; count: number }[];
};

export async function fetchOverviewStats(): Promise<OverviewStats> {
  await new Promise((r) => setTimeout(r, 150));

  const totalProducts = mockProducts.length;
  const missingImages = mockProducts.filter((p) => p.status === "entwurf").length;
  const syncedPercent =
    Math.round(
      (mockProducts.filter((p) => p.status === "aktiv").length / totalProducts) *
        1000,
    ) / 10;
  const pendingApprovals = mockApprovals.filter(
    (a) => a.status === "pending" || a.status === "in_review",
  ).length;
  const activeOperators = mockOperators.filter((o) => o.status === "active").length;

  const byStatus = ["aktiv", "entwurf", "gesperrt", "pruefung"].map((s) => ({
    status: s,
    count: mockProducts.filter((p) => p.status === s).length,
  }));

  const catalogByCategory = Array.from(
    mockProducts.reduce((acc, p) => {
      acc.set(p.coffeeForm, (acc.get(p.coffeeForm) ?? 0) + 1);
      return acc;
    }, new Map<string, number>()),
  ).map(([category, count]) => ({ category, count }));

  const syncTimeline = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (13 - i));
    const label = d.toLocaleDateString("de-DE", { month: "short", day: "2-digit" });
    return {
      day: label,
      synced: 40 + ((i * 13) % 60),
      failed: (i * 3) % 8,
    };
  });

  return {
    totalProducts,
    syncedPercent,
    missingImages,
    pendingApprovals,
    activeOperators,
    byStatus,
    syncTimeline,
    catalogByCategory,
  };
}

export const overviewQueryKey = ["overview", "stats"] as const;
