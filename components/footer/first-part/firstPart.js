//styled components
import { FirstPartContainer } from "../index.styled"
//components
import { Button, Heading } from '../../layout/index';
const FirstPart = () => {
    return (
        <FirstPartContainer>
            <Heading titleStyle={{ color: "#fff" }} title="subscribe to get our news letter" desc="see what's possible" />
            
            <div className="input-field">
                <input type="email" placeholder="Enter Email Address"/>
                <Button content="subscribe"/>
            </div>
        </FirstPartContainer>
    )
}
export default FirstPart