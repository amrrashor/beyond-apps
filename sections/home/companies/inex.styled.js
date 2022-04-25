import styled from 'styled-components'

export const ComapniesContainer = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    background-color:${({ theme }) => theme.colors.light};
    padding:20px 0;
    
    .font{
        font-size:70px;
    }

    @media screen and (max-width:768px) {
        .font{
            font-size:25px;
        }
    }
`