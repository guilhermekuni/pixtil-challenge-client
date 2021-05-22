import styled, { css } from 'styled-components';

export const SearchBarWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 5rem;
    background: ${theme.colors.gray};
    border-radius: ${theme.border.radius};
    opacity: 0.4;
    padding: 0 ${theme.spacings.medium};
  `}
`;
