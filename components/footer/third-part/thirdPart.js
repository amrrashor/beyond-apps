//styled component
import { ThirdPartContainer } from "../index.styled"
//components 
import { Company, Connect, Product, Trust } from "./sections"
const ThirdPart = () => {
    return (
        <ThirdPartContainer>
            <Company />
            <Connect />
            <Product />
            <Trust />
        </ThirdPartContainer>
    )
}

export default ThirdPart

