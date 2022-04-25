import styled from 'styled-components';

export const HeadingContainer = styled.div`
    width:80%;

    h4{
        font-weight:600;
        text-transform:capitalize;
        font-size:${({ theme }) => theme.fontSize.fontThree};
        margin-bottom:40px;
        color:#000;
    }
    p{
        font-weight:600;
        color:${({theme}) => theme.colors.gray};
    }
    @media screen and (max-width:992px) {
        width:95%;
        margin:0 auto;
    }
`

export const ButtonContainer = styled.button`
    background-color: ${({ theme }) => theme.colors.lightblue};
    color:#fff;
    outline:none;
    border:none;
    padding:8px 16px;
    border:1px solid;
    border-color: ${({ theme }) => theme.colors.lightblue};
    text-transform:capitalize;
    font-weight:500;
`

export const BorderButtonContainer = styled.button`
    background-color: transparent;
    color:#fff;
    outline:none;
    border:none;
    padding:8px 16px;
    border:1px solid;
    border-color: ${({ theme }) => theme.colors.lightblue};
    color:#fff;
    text-transform:capitalize;
    font-weight:500;
`

