/* eslint-disable react/prop-types */
import { SliderStyled } from "./styles/Slider.styled";

export default function Slider({ value, handleSlideChange }) {
    const percentage = parseInt(value) / 4 * 100
    return (
        <SliderStyled percentage={percentage}>
            <input type="range" min="0" max="4" value={value} onChange={handleSlideChange} className="slider" id="myRange" />
        </SliderStyled>
    )
}