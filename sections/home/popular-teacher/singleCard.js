import { useState, useEffect } from "react"
//axios
import axios from "axios"
//api
import { teacherUrl } from "../../../utilities/api/api"
//styled component
import { SingleCardContainer, Single } from "./index.styled"
const SingleCard = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios.get(teacherUrl).then((response) => {
            setMessages(response.data)
        }).catch(
            console.log('error')
        )
    }, [])

    return (
        <SingleCardContainer>
            {messages.slice(0, 3).map(item => (
                <Single>
                    <img src={item.url} />
                    <div>
                        <h5>{item.title}</h5>
                        <span>{item.title}</span>
                    </div>
                </Single>
            ))}
        </SingleCardContainer>
    )
}

export default SingleCard