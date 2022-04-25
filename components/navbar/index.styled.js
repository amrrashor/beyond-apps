import styled from 'styled-components'


export const NavContainer = styled.nav`
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding:50px 40px;
    height:0;
    background-color:#000;
    color:#fff;

    button{
        margin:0 10px;
    }

    .visible {
        diplay:block;
    }

    @media screen and (max-width:992px) {
        padding:50px 30px;
        .visible {
            display:none;
        }
    }
`

export const Logo = styled.div`
    font-weight:700;
    font-size: ${({ theme }) => theme.fontSize.fontOne};

    .logo {
        color:${({theme}) => theme.colors.lightblue};
    }
`

export const BurgerMenuContainer = styled.div`
    display:none;

    @media screen and (max-width:992px) {
        display:block;
    }
`

export const MenuHead = styled.div`
    position:relative;
    font-size:24px;
`

export const MenuList = styled.ul`
    position:absolute;
    right:0;
    left:0;
    margin:0 80px;
    list-style:none;
    background-color:${({theme}) => theme.colors.lightblue};
    color:#fff;
    padding:8px 18px;
    text-align:center;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-radius:8px;

    li {
        text-transform:capitalize;
        font-weight:600;
        margin:10px 0;
    }
`