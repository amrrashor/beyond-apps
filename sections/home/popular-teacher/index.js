//react icons
import { BsArrowRight } from 'react-icons/bs';
//styled components
import { PopularTeacherContainer } from "./index.styled";
//components
import {Heading} from '../../../components/layout/index'
import SingleCard from './singleCard';

const PopulaerTeacher = () => {
    return (
        <PopularTeacherContainer>
            <div className="title">
                <Heading title="most popular teacher" />
                <p className='d-flex align-items-center'>see all <BsArrowRight /></p>
            </div>
            
            <SingleCard />
        </PopularTeacherContainer>
    )
}

export default PopulaerTeacher