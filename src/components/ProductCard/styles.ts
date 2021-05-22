import styled, { css, DefaultTheme } from 'styled-components';
import { ProductCategory } from 'utils/types/ProductCategoryType';

interface ProductWrapperProp {
  theme: DefaultTheme;
  category: ProductCategory;
}

export const CardWrapper = styled.div`
  ${({ theme, category = 'flower' }: ProductWrapperProp) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 40rem;
    width: 32rem;
    background: ${theme.gradients.categories[category]};
    border-radius: ${theme.border.radius};
    box-shadow: ${theme.shadows.card};
  `}
`;

export const CardImage = styled.img`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 100%;
    background: ${theme.colors.gray};
    border-top-right-radius: ${theme.border.radius};
    border-top-left-radius: ${theme.border.radius};
    filter: brightness(60%);
  `}
`;

export const CardInfoWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    height: 40rem;
  `}
`;

export const CardTitleWrapper = styled.div`
  ${({ theme }) => css`
    h1 {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.xlarge};
    }

    h2 {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`;

export const CardCategory = styled.h2`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
  `}
`;
