import { useState, useEffect } from "react";
//axios
import axios from "axios";
//styled components
import { SingleCardContainer, Single } from "./index.styled";
//api
import { courseUrl } from "../../../utilities/api/api";
import { Button } from "../../../components/layout";
const SingleCard = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios.get(courseUrl).then((response) => {
            setMessages(response.data)
        })
    }, [])

    return (
        <SingleCardContainer>
            {messages.slice(6,9).map(item => (
                <Single key={item.id}>
                    <img src={item.url} alt="" />
                    <div>
                        <h4>{item.title}</h4>
                        <p>{item.title}</p>
                        <span>${item.id }</span>
                    </div>
                    <Button content="join now" />
                </Single>
            ))}
        </SingleCardContainer>
    )
}

export default SingleCard