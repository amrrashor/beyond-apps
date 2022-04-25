import { useState } from "react"
//custom hooks
import { useClickOutside } from "../../utilities/hooks/useClickoutside";
//react icons
import { FaBars, FaTimes } from 'react-icons/fa'
//styled components
import { BurgerMenuContainer, MenuHead, MenuList } from "./index.styled";

const BurgerMenu = () => {
    const [active, setActive] = useState(false);

    let domNode = useClickOutside(() => {
        setActive(false)
    })

    return (
        <BurgerMenuContainer ref={domNode}>
            <MenuHead onClick={() => setActive(!active)}>{ active ? <FaTimes /> : <FaBars />}</MenuHead>
            {active && <MenuList>
                <li onClick={() => setActive(!active)}>home</li>
                <li onClick={() => setActive(!active)}>All Courses</li>
                <li onClick={() => setActive(!active)}>Pages</li>
                <li onClick={() => setActive(!active)}>Blog</li>
                <li onClick={() => setActive(!active)}>Contact</li>
            </MenuList>}
        </BurgerMenuContainer>
    )
}
export default BurgerMenu