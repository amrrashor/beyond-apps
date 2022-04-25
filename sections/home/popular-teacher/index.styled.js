import styled from 'styled-components'


export const PopularTeacherContainer = styled.div`
    padding-top:100px;
    display:flex;
    jusitfy-content:center;
    flex-direction:column;
    width:95%;
    margin:0 auto 100px;

    .title {
        width:90%;
        margin:0 auto;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    
    p {
        color: ${({ theme }) => theme.colors.lightblue};
        text-transform:capitalize;
        font-weight:bold;
        font-size:${({ theme }) => theme.fontSize.fontThree};
    }

    @media screen and (max-width:992px) {
        .title{
            flex-direction:column;
            justify-content:center;
        }
        .title h4,
        .title p {
        font-size:26px;
        text-align:center;
        }
    }
`

export const SingleCardContainer = styled.div`
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;
`

export const Single = styled.div`
    margin-top:50px;
    width:25%;

    img {
        max-width:100%;
        max-height:600px;
    }
    div {
        padding:15px 15px 15px 0;
    }
    h5{
        font-weight:bold;
    }

    @media screen and (max-width:992px) {
        width:70%;
    }
`