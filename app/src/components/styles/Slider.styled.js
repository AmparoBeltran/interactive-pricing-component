import styled from "styled-components";

export const SliderStyled = styled.div`
  width: 100%;

  .slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 15px;
    border: none;
    border-radius: 50px;
    background: linear-gradient(
      90deg,
      rgba(165, 243, 235, 1) ${({ percentage }) => percentage}%,
      rgba(234, 238, 251, 1) ${({ percentage }) => percentage}%,
      rgba(234, 238, 251, 1) 100%
    );
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }

  .slider:hover {
    opacity: 1;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 35px;
    height: 35px;
    background-image: url("/images/icon-slider.svg");
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 0px 13px 30px 5px ${({ theme }) => theme.colors.softCyan};
    border: none;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.strongCyan};
    cursor: pointer;
  }

  .slider::-moz-range-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 35px;
    height: 35px;
    border: none;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.strongCyan};
    cursor: pointer;
  }
`;
