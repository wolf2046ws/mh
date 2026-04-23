export type ProductStatus = "approved" | "entwurf" | "gesperrt" | "pruefung" | "aktiv";

export type Product = {
  id: string;
  mhArticelNumber: string;
  c4cArticelNumber: string;
  mhArticelName: string;
  c4cArticelName: string;
  beutelBarcode: string;
  eanKartonCode: string;
  kartonNumberName: string;
  
  // Notes
  c4cNotes?: string;
  mnhNotes?: string;
  
  // Specifications
  mhd: string; // Best before date
  packagingType: "zipper" | "gastro";
  coffeeForm: "bohne" | "gemahlen";
  weight: string;
  
  // Logistics
  paletteType: "euro" | "einweg";
  layersPerPalette: number;
  piecesPerCarton: number;
  cartonsPerPalette: number;
  
  status: ProductStatus;
  updatedAt: string;
  owner: string;

  // Reference Photos
  musterVorderseite?: string;
  musterRueckseite?: string;
  musterStempel?: string;
  musterBarcode?: string;
  musterSeitenPhoto?: string;
  musterKartonEtikett?: string;
};

export type ProductListResponse = {
  items: Product[];
  total: number;
  page: number;
  perPage: number;
};
