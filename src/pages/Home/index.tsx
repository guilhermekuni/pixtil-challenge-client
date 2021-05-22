import ProductCard from 'components/ProductCard';

const mock = {
  id: 1077076,
  strain: 'Cali Orange',
  strainType: 'Hybrid',
  brand: 'Decibel Gardens',
  weightGrams: 3.5,
  placeholderImg: 'https://source.unsplash.com/random/800x600',
  category: 'flower',
};

import * as S from './styles';

const Home = () => (
  <S.Container>
    <S.ContentWrapper>
      <ProductCard
        id={1077076}
        strain={'Cali Orange'}
        strainType={'Hybrid'}
        brand={'Decibel Gardens'}
        weightGrams={3.5}
        placeholderImg={'https://source.unsplash.com/random/800x600'}
        category={'flower'}
      />
      <ProductCard
        id={1077076}
        strain={'Cali Orange'}
        strainType={'Hybrid'}
        brand={'Decibel Gardens'}
        weightGrams={3.5}
        placeholderImg={'https://source.unsplash.com/random/800x600'}
        category={'flower'}
      />
      <ProductCard
        id={1077076}
        strain={'Cali Orange'}
        strainType={'Hybrid'}
        brand={'Decibel Gardens'}
        weightGrams={3.5}
        placeholderImg={'https://source.unsplash.com/random/800x600'}
        category={'preroll'}
      />
      <ProductCard
        id={1077076}
        strain={'Cali Orange'}
        strainType={'Hybrid'}
        brand={'Decibel Gardens'}
        weightGrams={3.5}
        placeholderImg={'https://source.unsplash.com/random/800x600'}
        category={'preroll'}
      />
      <ProductCard
        id={1077076}
        strain={'Cali Orange'}
        strainType={'Hybrid'}
        brand={'Decibel Gardens'}
        weightGrams={3.5}
        placeholderImg={'https://source.unsplash.com/random/800x600'}
        category={'vape'}
      />
      <ProductCard
        id={1077076}
        strain={'Cali Orange'}
        strainType={'Hybrid'}
        brand={'Decibel Gardens'}
        weightGrams={3.5}
        placeholderImg={'https://source.unsplash.com/random/800x600'}
        category={'vape'}
      />
      <ProductCard
        id={1077076}
        strain={'Cali Orange'}
        strainType={'Hybrid'}
        brand={'Decibel Gardens'}
        weightGrams={3.5}
        placeholderImg={'https://source.unsplash.com/random/800x600'}
        category={'flower'}
      />
      <ProductCard
        id={1077076}
        strain={'Cali Orange'}
        strainType={'Hybrid'}
        brand={'Decibel Gardens'}
        weightGrams={3.5}
        placeholderImg={'https://source.unsplash.com/random/800x600'}
        category={'vape'}
      />
    </S.ContentWrapper>
  </S.Container>
);

export default Home;
