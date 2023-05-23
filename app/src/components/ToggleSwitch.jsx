/* eslint-disable react/prop-types */
import { ToggleSwitchStyled } from "./styles/ToggleSwitch.styled";

export default function ToggleSwitch({ isToggled, onToggle }) {
    return (
        <ToggleSwitchStyled>
            <p>Monthly Billing</p>
            <label className="toggle-switch">
                <input type="checkbox" checked={isToggled} onChange={onToggle} />
                <span className="switch" />
            </label>
            <p>Yearly Billing<small><span className="mobile">-25%</span><span className="desktop">25% discount</span></small></p>
        </ToggleSwitchStyled>
    )
}