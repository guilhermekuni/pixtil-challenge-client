import styled, { css, DefaultTheme } from 'styled-components';

interface StyledButtonProps {
  theme: DefaultTheme;
  isPrimary: boolean;
}

export const StyledButton = styled.button`
  ${({ theme, isPrimary }: StyledButtonProps) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    outline: 0;
    cursor: pointer;
    width: 10rem;
    height: 4rem;
    border-radius: ${theme.border.radius};
    font-weight: bold;
    outline: none;
    padding: 0 ${theme.spacings.xsmall};
    margin-right: ${theme.spacings.medium};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};

    ${isPrimary
      ? css`
          background: ${theme.colors.primaryGradient};

          &:hover {
            /* background: ${theme.colors.primaryGradient}; */
            opacity: 0.7;
          }
        `
      : css`
          background: transparent;
          border: 2px solid ${theme.colors.primary};

          &:hover {
            background: ${theme.colors.primary};
          }
        `}
  `}
`;
