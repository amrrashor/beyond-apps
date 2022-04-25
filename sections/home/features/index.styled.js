import styled from 'styled-components'

export const FeatureContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding-top:100px;
    width:95%;
    margin:0 auto;
`

export const Container = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    margin-top:50px
` 

export const Single = styled.div`
    margin:40px;
    width:25%;
    h6 {
        font-weight:600;
        margin:10px 0;
        text-transform:capitalize;
        font-size:${({theme}) => theme.fontSize.fontOne}
    }
    p{
        color:${({theme}) => theme.colors.gray}
    }

    @media screen and (max-width:992px) {
        width:90%;
        margin:20px;
    }
`