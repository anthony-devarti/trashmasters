import { Container, Row, Card, Button } from 'react-bootstrap'
import Sophie from '../img/Sophie.jpg'
import Anthony from "../img/Anthony.jpg"
import Andy from "../img/Andy.jpg"
import AboutHostCard from '../components/AboutHostCard'

export default function About() {
    return (
        <Container className="about">
            <Row className="first title-section">
                Meet the Trashmasters!
            </Row>
            <div className='about-cards'>
                <AboutHostCard 
                    img={Sophie}
                    name="Sophie"
                    about="The Eternal format specialist among the Trashmasters, she's probably targeting someone you love with a Lava Spike right now."
                />
                <AboutHostCard 
                    img={Anthony}
                    name="Anthony"
                    about="Unfortunately ends up driving the bus a lot, which is bad because it does end up with a lot of cutaways to bad movies and WNBA talk."
                />
                <AboutHostCard 
                    img={Andy}
                    name="Andy"
                    about="Pro Tour Competitor, nice guy (sans sarcastic tm), and generally poor taste in food set Standy Stakenewerth apart from the rest of the field of Magic Players."
                />
            </div>
            <div className='pitch'>
                <h2>What we do</h2>
                <p>
                    The Goblin Trashmasters is a weekly podcast where veteran Magic grinders talk news, format changes, and whatever else is relevant to the aspiring grinder.  With a focus on growth and improvement, the podcast is a great choice for anyone trying to bump themselves up to the next level in their magic playing career.
                </p>
            </div>
        </Container>
    )
}