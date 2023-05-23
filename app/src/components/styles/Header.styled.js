import styled from "styled-components";

export const HeaderStyled = styled.header`
  text-align: center;
  background-image: url("/images/pattern-circles.svg");
  background-repeat: no-repeat;
  background-position: center;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;

  .subtitle {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      flex-direction: row;
    }
  }
`;
