import Link from "next/link"
//links
import Data from './data'
//styled components
import { NavContainer, Logo } from "./index.styled"
//components
import { Button, BorderButton } from '../layout/index'
import BurgerMenu from "./burgerMenu"

const Nav = () => {
    return (
        <NavContainer>
            <div className="d-flex align-items-center">
                <Logo><Link href="/"><span><span className="logo">artic</span>ulate</span></Link></Logo>
                <div className="visible">
                    {Data.map(d => (
                        <Link key={d.id} href={d.link}><span className="ms-5 me-2">{d.title}</span></Link>
                    ))}
                </div>
            </div>
            <BurgerMenu />
            <div className="visible">
                <BorderButton  content="sign in"/>
                <Button content="sign up" />
            </div>
            
        </NavContainer>
    )
}

export default Nav