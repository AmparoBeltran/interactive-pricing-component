import styled from "styled-components";

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 38px -7px ${({ theme }) => theme.colors.paleBlue};
  gap: 2em;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    max-width: 600px;
    align-items: center;
    margin: 0 auto;
    padding: 2em 0;
  }
  hr {
    background-color: ${({ theme }) => theme.colors.lightGrayishBlue};
    border: none;
    height: 1px;
    width: 100%;
  }
`;

export const InfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: calc(100% - 6em);
    & > div {
      order: 2;
      grid-column: 1/3;
    }
  }

  p {
    text-transform: uppercase;
  }

  h1 {
    display: flex;
    align-items: center;
    gap: 0.5em;
    font-size: 1.8em;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      justify-content: flex-end;
    }
  }

  small {
    color: ${({ theme }) => theme.colors.grayishBlue};
    font-size: 15px;
  }
`;

export const FeaturesStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
    gap: 5em;
  }

  .features {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5em;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      align-items: flex-start;
      gap: 1em;
    }
  }
  span {
    display: flex;
    gap: 0.5em;
    align-items: center;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      gap: 1em;
    }
  }
`;
