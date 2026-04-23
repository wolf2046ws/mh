import { Suspense } from "react";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Download, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getQueryClient } from "@/lib/query-client";
import { ProductsTable } from "@/features/products/products-table";
import { AddProductDialog } from "@/features/products/add-product-dialog";
import { fetchProducts, productsQueryKey } from "@/features/products/queries";

type SearchParams = Promise<{
  q?: string;
  status?: string;
  page?: string;
  perPage?: string;
}>;

export default async function ProductPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  const params = {
    search: sp.q ?? "",
    status: (sp.status as "all" | "aktiv" | "entwurf" | "gesperrt" | "pruefung") ?? "all",
    page: Number(sp.page) || 1,
    perPage: Number(sp.perPage) || 10,
  };

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: productsQueryKey(params),
    queryFn: () => fetchProducts(params),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="space-y-6">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Kaffee-Stammdaten</h2>
            <p className="text-muted-foreground text-sm">
              Verwalten Sie alle Kaffeeprodukte, Bohnen und Verpackungsmaterialien.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download />
              CSV Export
            </Button>
            <AddProductDialog />
          </div>
        </div>

        <Suspense fallback={<Skeleton className="h-[500px] rounded-lg" />}>
          <ProductsTable />
        </Suspense>
      </div>
    </HydrationBoundary>
  );
}
