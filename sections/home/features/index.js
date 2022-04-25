//styled component
import { FeatureContainer } from "./index.styled"
//components
import { Heading } from "../../../components/layout"
import SingleFeature from "./singleFeature"

const Features = () => {
    
    return (
        <FeatureContainer>
            <Heading classname="text-center" title="why us to learn" desc="riores accusamus, perferendis, doloremque dolores eveniet sint voluptatem quam blanditiis exercitationem similique voluptatibus id distinctio. Vitae, labore." />
            <SingleFeature />
        </FeatureContainer>
    )
}
export default Features