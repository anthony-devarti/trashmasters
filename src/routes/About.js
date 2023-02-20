import { Container, Row, Card, Button } from 'react-bootstrap'
import AboutRow from "../components/AboutRow"
import anthonyAbout from '../img/anthonyAbout.jpg'
import kyleAbout from '../img/kyleAbout.jpg'

export default function About() {
    return (
        <Container className="about">
            <Row className="first title-section">
                Meet the Trashmasters!
            </Row>
            <div className='about-cards'>
                <img className='card' src={kyleAbout} alt="Kyle" />
                <img className='card' src={anthonyAbout} alt="Anthony" />
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