//components
import { Button } from "../../../components/layout"
//styled components
import { RightSideContainer } from "./index.styled"

const RightSide = () => {
    return (
        <RightSideContainer>
            <div className="card-one"> 
                <p>User Experience Class</p>
                <p>Today at 02 pm</p>
                <Button content="join now"/>
            </div>

            <div className="card-two">Largest Collection for every use</div>
        </RightSideContainer>
    )
}

export default RightSide