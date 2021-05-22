import { useState, useEffect, useCallback } from 'react';

import productsService from 'services/productsService';

import ProductEntity from 'utils/types/ProductEntity';
import ProductCard from 'components/ProductCard';

import * as S from './styles';

const Home = () => {
  const [products, setProducts] = useState([]);

  const handleGetProducts = useCallback(async () => {
    const { data } = await productsService.getProducts();
    setProducts(data);
  }, [setProducts]);

  useEffect(() => {
    handleGetProducts();
  }, [handleGetProducts]);

  return (
    <S.Container>
      <S.ContentWrapper>
        {products.map((item: ProductEntity) => (
          <ProductCard
            key={item.id}
            id={item.id}
            strain={item.strain}
            strainType={item.strain_type}
            brand={item.brand}
            weightGrams={item.weight_grams}
            placeholderImg={item.placeholder_img}
            category={item.category}
          />
        ))}
      </S.ContentWrapper>
    </S.Container>
  );
};

export default Home;
