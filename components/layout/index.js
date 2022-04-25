//styled components
import { ButtonContainer,BorderButtonContainer,HeadingContainer } from "./index.styled"

export const Heading = ({title, desc, classname, style, titleStyle, descStyle}) => {
    return (
        <HeadingContainer style={style} className={classname}>
            <h4 style={titleStyle}>{title}</h4>
            {desc && <p style={descStyle}>{desc}</p>}
        </HeadingContainer>
    )
}

export const Button = ({ content, onclick, classname }) => {
    return (
        <ButtonContainer className={classname} onClick={onclick}>{content}</ButtonContainer>
    )
}

export const BorderButton = ({ content, onclick, classname }) => {
    return (
        <BorderButtonContainer className={classname} onclick={onclick}>{content}</BorderButtonContainer>
    )
}