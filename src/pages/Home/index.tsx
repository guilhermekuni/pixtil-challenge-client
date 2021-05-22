import { useState, useEffect, useCallback } from 'react';

import productsService from 'services/productsService';

import ProductEntity from 'utils/types/ProductEntity';

import FilterInput from 'components/FilterInput';
import ProductCard from 'components/ProductCard';

import * as S from './styles';

const initialFilters = {
  _page: 1,
  id: '',
  category: '',
};

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState(initialFilters);

  const handleGetProducts = useCallback(
    async (filters) => {
      const { data } = await productsService.getProducts(filters);
      setProducts(data);
    },
    [setProducts]
  );

  const handleFiltersSubmit = (event) => {
    event.preventDefault();
    handleGetProducts(filters);
  };

  const handleChangeFilter = (updatedField) => {
    const updatedFilters = { ...filters, ...updatedField };
    setFilters(updatedFilters);
  };

  useEffect(() => {
    handleGetProducts(filters);
  }, [handleGetProducts]);

  return (
    <S.Container>
      <S.FilterForm onSubmit={handleFiltersSubmit}>
        <FilterInput
          placeholder="Filter by id"
          value={filters.id}
          onChange={(e) => handleChangeFilter({ id: e.target.value })}
        />
        <FilterInput
          customSize="lg"
          placeholder="Filter by category"
          value={filters.category}
          onChange={(e) => handleChangeFilter({ category: e.target.value })}
        />
        <button type="submit">Search</button>
      </S.FilterForm>
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
