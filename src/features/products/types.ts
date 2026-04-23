export type ProductStatus = "aktiv" | "entwurf" | "gesperrt" | "pruefung";

export type Product = {
  id: string;
  name: string;
  category: string;
  mhNumber: string;
  c4cNumber: string;
  status: ProductStatus;
  imageUrl: string;
  updatedAt: string;
  owner: string;
  c4cNotes?: string;
  mnhNotes?: string;
  photos?: string[]; // Array of up to 6 photo URLs/paths
};

export type ProductListResponse = {
  items: Product[];
  total: number;
  page: number;
  perPage: number;
};
