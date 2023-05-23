import { HeaderStyled } from "./styles/Header.styled";

export default function Header() {
    return (
        <HeaderStyled>
            <h1>Simple, traffic-based pricing</h1>
            <div className="subtitle">
                <span>Sign-up for our 30-day trial.</span>
                <span>No credit card required.</span>
            </div>
        </HeaderStyled>)
}