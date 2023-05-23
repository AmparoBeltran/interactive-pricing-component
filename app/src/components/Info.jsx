/* eslint-disable react/prop-types */
import { InfoStyled } from "./styles/Card.styled";
import Slider from "./Slider";

export default function Info({ selectedIndex, handleSelectedIndex, pageviews, price }) {

    return (
        <InfoStyled>
            <p>{pageviews} Pageviews</p>
            <Slider value={selectedIndex} handleSlideChange={handleSelectedIndex} />
            <h1>${price.toPrecision(price < 10 ? 3 : 4)} <small>/ month</small></h1>
        </InfoStyled>
    )
}