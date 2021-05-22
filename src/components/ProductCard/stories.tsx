import { Story, Meta } from '@storybook/react/types-6-0';

import ProductCard from '.';
import ProductCardProps from './interface';

export default {
  title: 'ProductCard',
  component: ProductCard,
  args: {
    id: 1077076,
    strain: 'Cali Orange',
    strainType: 'Hybrid',
    brand: 'Decibel Gardens',
    category: 'flower',
    weightGrams: 3.5,
    placeholderImg: 'https://source.unsplash.com/random/800x600',
  },
} as Meta;

export const Basic: Story<ProductCardProps> = (args) => (
  <ProductCard {...args} />
);
