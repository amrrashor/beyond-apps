import styled from 'styled-components'

export const TopRatedContainer = styled.div`
    background-color:${({ theme }) => theme.colors.light};
    padding-top:100px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin-bottom:50px;
`

export const IconContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    text-align:center;
`

export const Single = styled.div`
    width:15%;
    margin:30px;
    svg {
        font-size:130px;
    }

    @media screen and (max-width:768px) {
        svg {
            font-size:50px;
        }
    }
`