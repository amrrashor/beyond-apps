//components
import FirstPart from "./first-part/firstPart";
import SecondPart from "./second-part/secondPart";
import ThirdPart from "./third-part/thirdPart";
//styled components
import { FooterContainer, LowerPart } from "./index.styled";

const Footer = () => {
    return (
        <FooterContainer>
            <FirstPart />
            <LowerPart>
                <SecondPart />
                <ThirdPart />
            </LowerPart>
        </FooterContainer>
    )
}
export default Footer