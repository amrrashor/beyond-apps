import { useEffect, useState } from "react"
//axios
import axios from "axios"
//react icons 
import { BsFillPersonFill,BsFillPencilFill,BsNewspaper } from 'react-icons/bs'
//api
import { featureUrl } from "../../../utilities/api/api"
//styled components
import { Container, Single } from "./index.styled"

const SingleFeature = () => {
    const [messsages, setMessages] = useState([]);

    useEffect(() => {
        axios.get(featureUrl).then((response) => {
            setMessages(response.data)
        }).catch(
            console.log('error')
        )
    }, [])

    return (
        <Container>
            {messsages.slice(4,7).map(item => (
                <Single key={messsages.id}>
                    <h6>{item.title}</h6>
                    <p>{item.body}</p>
                </Single>
            ))}
        </Container>
    )
}
export default SingleFeature