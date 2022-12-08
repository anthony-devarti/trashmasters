import { Container, Row, Col } from 'react-bootstrap'
import AboutRow from "../components/AboutRow"

export default function About() {
    return (
        <Container className="about">
            <div className='desktop'>
                <Row className="first">
                    Meet the Trashmasters!
                </Row>
                <AboutRow
                    name={'Anthony'}
                    info={['Standard Specialist', 'Has played magic forever']}
                    roles={"Developer"}
                />
                <AboutRow
                    name={"Kyle"}
                    info={['Modern Maestro', '10 years experience']}
                    roles={"Designer"}
                />
            </div>
            <div className='mobile'>

            </div>
        </Container>
    )
}