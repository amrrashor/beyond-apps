//styled components
import { CourseContainer } from "./index.styled";
//components
import {Heading} from '../../../components/layout/index'
import SingleCard from "./singleCard";

const Course = () => {
    return(
        <CourseContainer>
            <Heading
                style={{ textAlign: "center" }}
                descStyle={{ color: "rgba(0,0,0,0.8" }}
                title="our course categories"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deserunt blanditiis laborum labore distinctio praesentium vel "
            />
            
            <SingleCard />
        </CourseContainer>
    )
}
export default Course