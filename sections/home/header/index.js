//styled components
import { HeaderContainer } from "./index.styled"
//components
import LeftSide from "./leftSide"
import RightSide from "./rightSide"

const Header = () => {
    return (
        <HeaderContainer>
            <LeftSide />
            <RightSide />
        </HeaderContainer>
    )
}
export default Header