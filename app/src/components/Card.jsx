import Features from "./Features";
import Info from "./Info";
import ToggleSwitch from "./ToggleSwitch";
import { CardStyled } from "./styles/Card.styled";
import { useState, useMemo } from "react";
import { data } from '../data';

export default function Card() {
    const [isToggled, setIsToggled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState('2')

    function handleSelectedIndex(e) {
        setSelectedIndex(e.target.value)
    }

    const selectedPlan = useMemo(() => data[selectedIndex], [selectedIndex])

    const calculatedPrice = useMemo(() => isToggled ? selectedPlan.price * 0.75 : selectedPlan.price, [isToggled, selectedPlan.price])

    return (
        <CardStyled>
            <Info
                handleSelectedIndex={handleSelectedIndex}
                selectedIndex={selectedIndex}
                pageviews={selectedPlan.pageviews}
                price={calculatedPrice}
            />
            <ToggleSwitch
                isToggled={isToggled}
                onToggle={() => setIsToggled(!isToggled)}
            />
            <hr />
            <Features />
        </CardStyled>
    )
}