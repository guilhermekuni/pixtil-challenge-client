import styled, { css } from 'styled-components';

export const FilterInputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 20rem;
    height: 4rem;
    padding: 0 ${theme.spacings.medium};
  `}
`;

export const FilterInput = styled.input`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    border-radius: ${theme.border.radius};
    background: transparent;
    border: 2px solid ${theme.colors.primary};
    font-weight: bold;
    outline: none;
    padding: 0 ${theme.spacings.medium};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};

    &:focus {
      border-color: ${theme.colors.primaryHover};
    }
  `}
`;
