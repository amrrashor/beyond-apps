//styled components
import { StatisticsContainer } from "./index.styled"
//components
import LeftSide from "./leftSide"
import RightSide from "./rightSide"

const Statistics = () => {
    return (
        <StatisticsContainer>
            <LeftSide />
            <RightSide />
        </StatisticsContainer>
    )
}

export default Statistics