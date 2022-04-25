import styled from 'styled-components'

export const FooterContainer = styled.div`
    background-color:#000;
    color:#fff;
    padding:70px 50px 50px ;

    @media screen and (max-width:768px) {
        padding:20px;
    }
`

export const FirstPartContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;

    .input-field {
        background-color:#000;
        border:1px solid ${({ theme }) => theme.colors.gray};
        padding:10px;
        display:flex;
        align-items:center;
        width:90%;
        margin-left:20px;
    }

    input {
        background-color:transparent;
        border:none;
        outline:none;
        color:#fff;
        width:100%;
    }

    @media screen and (max-width:992px) {
        flex-direction:column;
        .input-field {
            margin-top:40px;
            width:100%;
            margin-left:0;
        }
        input {
            width:100%;
        }
    }
`

export const SecondPartContainer = styled.div`
    width:40%;
    span {
        color: ${({theme}) => theme.colors.lightblue};
    }

    p{
        margin-top:60px;
        width:70%;
    }
    @media screen and (max-width:768px) {
        width:100%;
        margin-bottom:40px;

        p{
            width:100%;
        }
    }
`

export const ThirdPartContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    width:70%;

    @media screen and (max-width:768px) {
        width:100%;
    }
`

export const SingleColumn = styled.div`
    margin:0 20px;
    width:20%;

    p{
        margin-top:20px;
    }

    @media screen and (max-width:768px) {
        width:45%;
        margin:20px 5px
    }
`

export const LowerPart = styled.div`
    margin-top:100px;
    margin-bottom:50px;
    display:flex;

    @media screen and (max-width:768px) {
        flex-direction:column;
    }
`