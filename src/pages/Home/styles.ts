import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
  `}
`;

export const ContentWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;
    width: 100%;
    padding: ${theme.spacings.medium};
  `}
`;
