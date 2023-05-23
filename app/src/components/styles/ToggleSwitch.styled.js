import styled from "styled-components";

export const ToggleSwitchStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;

  p {
    font-size: 0.8em;
    display: flex;
    gap: 0.5em;
  }

  small {
    background-color: ${({ theme }) => theme.colors.lightGrayishRed};
    color: ${({ theme }) => theme.colors.lightRed};
    border: none;
    border-radius: 50px;
    padding: 3px 6px;
    .desktop {
      display: none;
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
      .mobile {
        display: none;
      }
      .desktop {
        display: block;
      }
    }
  }

  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;
  }
  .toggle-switch input[type="checkbox"] {
    display: none;
  }
  .toggle-switch .switch {
    position: absolute;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.lightGrayishBlueToggleBg};
    border-radius: 25px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: background-color 0.2s ease;
  }
  .toggle-switch .switch::before {
    position: absolute;
    content: "";
    left: 3px;
    top: 3px;
    width: 18px;
    height: 18px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
  .toggle-switch input[type="checkbox"]:checked + .switch::before {
    transform: translateX(25px);
    background-color: ${({ theme }) => theme.colors.white};
  }
  .toggle-switch input[type="checkbox"]:checked + .switch {
    background-color: ${({ theme }) => theme.colors.strongCyan};
  }
`;
