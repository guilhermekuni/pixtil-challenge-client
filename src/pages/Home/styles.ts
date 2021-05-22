import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.medium};
    justify-content: center;
    align-items: center;
  `}
`;

export const ContentWrapper = styled.section`
  ${({ theme: { spacings, breakpoints } }) => css`
    display: inline-grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: ${spacings.small};
    margin: ${spacings.medium} 0;
    width: 100%;

    @media (max-width: ${breakpoints.xxlarge}) {
      grid-template-columns: repeat(5, 1fr);
    }

    @media (max-width: ${breakpoints.xlarge}) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: ${breakpoints.large}) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: ${breakpoints.medium}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${breakpoints.small}) {
      grid-template-columns: repeat(1, 1fr);
    }
  `}
`;

export const FilterForm = styled.form`
  display: flex;
  flex-direction: row;
`;
