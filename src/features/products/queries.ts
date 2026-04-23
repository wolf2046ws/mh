import type { Product, ProductListResponse, ProductStatus } from "./types";
import { mockProducts } from "./mock-data";

export type ProductListParams = {
  search?: string;
  status?: ProductStatus | "all";
  category?: string;
  page?: number;
  perPage?: number;
  sort?: "mhArticelName" | "updatedAt" | "mhArticelNumber";
  dir?: "asc" | "desc";
};

function sortProducts(list: Product[], sort?: string, dir: "asc" | "desc" = "desc") {
  const sorted = [...list].sort((a, b) => {
    const key = (sort ?? "updatedAt") as keyof Product;
    const av = a[key];
    const bv = b[key];
    if (av === undefined && bv === undefined) return 0;
    if (av === undefined) return dir === "asc" ? -1 : 1;
    if (bv === undefined) return dir === "asc" ? 1 : -1;
    if (av < bv) return dir === "asc" ? -1 : 1;
    if (av > bv) return dir === "asc" ? 1 : -1;
    return 0;
  });
  return sorted;
}

export async function fetchProducts(
  params: ProductListParams = {},
): Promise<ProductListResponse> {
  await new Promise((r) => setTimeout(r, 150));

  const {
    search = "",
    status = "all",
    category,
    page = 1,
    perPage = 10,
    sort = "updatedAt",
    dir = "desc",
  } = params;

  let filtered = mockProducts;

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.mhArticelName.toLowerCase().includes(q) ||
        p.mhArticelNumber.toLowerCase().includes(q) ||
        p.c4cArticelNumber.toLowerCase().includes(q),
    );
  }
  if (status !== "all") {
    filtered = filtered.filter((p) => p.status === status);
  }
  if (category) {
    filtered = filtered.filter((p) => p.coffeeForm === category || p.packagingType === category);
  }

  filtered = sortProducts(filtered, sort, dir);
  const total = filtered.length;
  const start = (page - 1) * perPage;
  const items = filtered.slice(start, start + perPage);

  return { items, total, page, perPage };
}

export const productsQueryKey = (params: ProductListParams) =>
  ["products", params] as const;
