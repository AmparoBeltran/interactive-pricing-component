import { FeaturesStyled } from "./styles/Card.styled";

export default function Features() {
    return (
        <FeaturesStyled>
            <div className="features">
                <span><img src="/images/icon-check.svg" />Unlimited websites</span>
                <span><img src="/images/icon-check.svg" />100% data ownership</span>
                <span><img src="/images/icon-check.svg" />Email reports</span>
            </div>
            <button>Start my trial</button>
        </FeaturesStyled>
    )
}