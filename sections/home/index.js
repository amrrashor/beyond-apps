//components
import Header from "./header";
import Comapnies from "./companies";
import Features from "./features";
import Statistics from "./statistics";
import Course from "./course-category";
import TopRated from "./top-rated";
import PopulaerTeacher from "./popular-teacher";

const Main = () => {
    return (
        <>
            <Header />
            <Comapnies />
            <Features />
            <Statistics />
            <Course />
            <TopRated />
            <PopulaerTeacher />
        </>
    )
}

export default Main