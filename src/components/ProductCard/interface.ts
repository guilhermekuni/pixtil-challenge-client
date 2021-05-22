import { ProductCategory } from 'utils/types/ProductCategoryType';

export default interface ProductCardProps {
  id: number;
  strain: string;
  strainType: string;
  brand: string;
  category: ProductCategory;
  weightGrams: number;
  placeholderImg: string;
}
