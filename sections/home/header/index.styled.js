import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    background-color:#000;
    color:#fff;
    padding:70px;

    @media screen and (max-width:768px) {
        flex-direction:column;
        padding:40px;
    }
`

export const RightSideContainer = styled.div`
    position: relative;
    width:40%;
    height:400px;
    background-image:url(/assets/header/header.svg);
    background-position:center;
    background-size:contain;
    background-repeat:no-repeat;
    
    img {
        max-width:100%;
    }
    .card-one {
        color:#000;
        position:absolute;
        left:-15%;
        bottom:0;
        background-color:#fff;
        width:180px;
        padding-top:8px;
        padding-bottom:8px;
        padding-left:10px;
        padding-right:10px;
        border-radius:10px;
        text-align:center;

        p:first-child{
            font-size:16px;
            font-weight:500;
            margin:0;
        }
        p {
            font-size:15px;
            margin:4px 0;
        }
    }
    .card-two {
        position:absolute;
        right:-10%;
        top:15%;
        color:${({ theme }) => theme.colors.gray};
        padding:8px;
        border-radius:5px;
        width:160px;
        text-align:center;
        background-color:#fff;
    }
    @media screen and (max-width:768px) {
        width:100%;

        .card-one {
            margin:0 0 0 13px;
        }
        .card-one button {
            padding:5px 7px;
        }
    }
`

export const LeftSideContainer = styled.div`
    width:35%;
    margin-right:30px;

    h1{
        font-weight:600;
        margin-bottom:50px;
        line-height: 60px;
    }

    p{
        margin-bottom:50px;
    }
    button {
        margin-right:20px;
    }
    
    @media screen and (max-width:768px) {
        width:100%;

        .flex {
            display:flex;
            width:100%;
            button {
                padding:15px;
            }
        }
    }
`