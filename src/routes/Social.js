import { Button, Container } from "react-bootstrap";
import linkTo from "../utilities/linkTo";
import SocialAccount from "../components/subcomponents/SocialAccount";

export default function Social(props) {
    return (
        <div className="social">
            <h1 className="title-section">
                Social Media
            </h1>
            <Container className='body'>
                <SocialAccount account={'Twitter'} link={"https://twitter.com/thetrashgoblins"}/>
                <SocialAccount account={'YouTube'} link={"https://www.youtube.com/channel/UCVI0ZFBLqA-hjSd4EuuHgag"}/>
                <SocialAccount account={'Instagram'} link={"https://instagram.com/thegoblintrashmasterspodcast?igshid=YmMyMTA2M2Y="}/>
            </Container>
        </div>
    )
}