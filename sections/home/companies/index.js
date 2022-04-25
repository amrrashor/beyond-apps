//react icons
import { FcCdLogo } from 'react-icons/fc';
import { IoLogoTux, IoLogoVenmo, IoLogoPinterest } from 'react-icons/io5';
import { GoLogoGist } from 'react-icons/go';
//styled components
import { ComapniesContainer } from "./inex.styled"

const Comapnies = () => {
    return (
        <ComapniesContainer>
            <FcCdLogo className='font' />
            <IoLogoPinterest  className='font' />
            <IoLogoTux  className='font' />
            <IoLogoVenmo  className='font' />
            <GoLogoGist  className='font' />
        </ComapniesContainer>
    )
}
export default Comapnies