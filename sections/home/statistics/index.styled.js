import styled from 'styled-components'


export const StatisticsContainer = styled.div`
    background-color:${({ theme }) => theme.colors.light};
    display:flex;
    justify-content:space-between;
    align-items:start;
    padding:50px;

    @media screen and (max-width:786px) {
        flex-direction:column;
    }
`

export const LeftSideContainer = styled.div`
    img {
        max-width:100%;
    }
`
export const RightSideContainer = styled.div`
    width:50%;

    @media screen and (max-width:992px) {
        width:100%;
        margin-top:30px; 

        .btn {
            display:flex;
            justify-content:center;
        }
    }
`