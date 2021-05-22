import styled, { css, DefaultTheme } from 'styled-components';

interface StyledFilterInputProps {
  theme: DefaultTheme;
  customSize: 'sm' | 'md' | 'lg';
}

const inputSizes = {
  sm: '15rem',
  md: '20rem',
  lg: '30rem',
};

export const StyledFilterInput = styled.input`
  ${({ theme, customSize }: StyledFilterInputProps) => css`
    display: flex;
    flex: 1;
    width: ${inputSizes[customSize]};
    height: 4rem;
    border-radius: ${theme.border.radius};
    background: transparent;
    border: 2px solid ${theme.colors.primary};
    font-weight: bold;
    outline: none;
    padding: 0 ${theme.spacings.xsmall};
    margin-right: ${theme.spacings.medium};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};

    &:focus {
      border-color: ${theme.colors.primaryHover};
    }
  `}
`;
