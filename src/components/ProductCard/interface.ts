import { ProductCategory } from 'utils/types/ProductCategoryType';

export interface ProductCardProps {
  id: number;
  strain: string;
  strainType: string;
  brand: string;
  category: ProductCategory;
  weightGrams: number;
  placeholderImg: string;
}
