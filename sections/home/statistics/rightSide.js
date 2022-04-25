import { useState, useEffect} from "react"
//axios
import axios from "axios"
//styled components
import { RightSideContainer } from "./index.styled"
//components
import { Heading } from '../../../components/layout/index'
import { Button } from "../../../components/layout/index"
//api
import { statisticsHeading } from "../../../utilities/api/api"
import { singleStatistics } from "../../../utilities/api/api"


const RightSide = () => {
    const [messages, setMessages] = useState([]);
    const [statistics, setStatistics] = useState([]);

    useEffect(() => {
        axios.get(statisticsHeading).then((response) => {
            setMessages(response.data)
        }).catch(
            console.log('error')
        )
    }, []);

    useEffect(() => {
        axios.get(singleStatistics).then((response) => {
            setStatistics(response.data)
        }).catch(
            console.log('error')
        )
    }, [])

    return (
        <RightSideContainer>
            {messages.slice(0, 1).map(item => (
                <Heading title={item.name} desc={item.body} />
            ))}

            <div className="d-flex">
                {statistics.slice(0, 3).map(item => (
                    <Heading
                        key={item.id}
                        title={`${item.id}k`}
                        desc={item.title}
                        style={{ width: "29%", padding:"8px", marginTop:"30px", marginBottom:"30px" }}
                        titleStyle={{fontSize:"24px", marginBottom:"10px", }} />
                ))}
            </div>

            <div className="btn"><Button content="explore now" /></div>
        </RightSideContainer>
    )
}
export default RightSide