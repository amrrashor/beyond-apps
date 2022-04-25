//components
import { Button, BorderButton } from '../../../components/layout/index'
//styled components
import { LeftSideContainer } from './index.styled'

const LeftSide = () => {
    return (
        <LeftSideContainer>
            <h1>Smrater way to creat platform for work place</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab commodi iusto adipisci facilis repudiandae inventore temporibus necessitatibus minima </p>
            <div className='flex'>
                <Button content="check courses" />
                <BorderButton content="learn more" />
            </div>
        </LeftSideContainer>
    )
}

export default LeftSide