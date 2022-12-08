import { Container, Row, Col } from 'react-bootstrap'
import AboutRow from "../components/AboutRow"

export default function About() {
    return (
        <Container className="about">
            <Row className="first title-section">
                    Meet the Trashmasters!
            </Row>
            <AboutRow
                name={'Anthony'}
                info={['Standard Specialist', 'Been playing magic forever']}
                roles={"Developer"}
            />
            <AboutRow
                name={"Kyle"}
                info={['Modern Maestro', '10 years magic experience']}
                roles={"Graphic Designer"}
            />
        </Container>
    )
}