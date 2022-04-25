//data
import Data from './data';
//styled components
import { TopRatedContainer, IconContainer,Single } from "./index.styled";
//components
import {Heading} from '../../../components/layout/index'

const TopRated = () => {
    return (
        <TopRatedContainer>
            <Heading titleStyle={{textAlign:"center"}} title="top rated by users and industry experts" />

            
            <IconContainer>
                {Data.map(icon => (
                    <Single>{icon.icon}</Single>
                ))}
            </IconContainer>
            
        </TopRatedContainer>
    )
}

export default TopRated