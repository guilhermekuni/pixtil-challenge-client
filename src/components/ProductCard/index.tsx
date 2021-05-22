import ProductCardProps from './interface';
import * as S from './styles';

const ProductCard = ({
  id,
  strain,
  strainType,
  brand,
  category,
  weightGrams,
  placeholderImg,
}: ProductCardProps) => (
  <S.CardWrapper category={category}>
    <S.CardImage src={placeholderImg} alt={`${strain} image`} />
    <S.CardInfoWrapper>
      <S.CardTitleWrapper>
        <h1>{strain}</h1>
        <h2>{strainType}</h2>
      </S.CardTitleWrapper>
      <S.CardCategory>{category}</S.CardCategory>
    </S.CardInfoWrapper>
  </S.CardWrapper>
);

export default ProductCard;
