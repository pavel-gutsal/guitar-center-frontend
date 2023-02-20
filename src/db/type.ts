export interface CatalogItem {
  id: number;
  model: string;
  mainPhoto: string;
  rating: number;
  totalPrice: number;
  discount: number | null;
  bestSeller: boolean;
  ShortSpecs: string[][];
}
