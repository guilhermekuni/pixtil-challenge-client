import { ProductCategory } from 'utils/types/ProductCategoryType';

export default interface ProductEntity {
  id: number;
  strain: string;
  strain_type: string;
  brand: string;
  category: ProductCategory;
  weight_grams: number;
  placeholder_img: string;
}
