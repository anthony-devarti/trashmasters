import AboutCard from "../components/AboutCard"
import { Container, Row, Col } from 'react-bootstrap'
import AboutRow from "../components/AboutRow"

export default function About() {
    return (
        <Container className="about">
            <Row className="first">
                Meet the Trashmasters!
            </Row>
            <AboutRow />
            <Row className="odd">
                <Col>
                    Bobby
                </Col>
                <Col>

                </Col>
                <Col>

                </Col>
            </Row>
            <Row>
                <Col>
                    Kyle
                </Col>
                <Col>

                </Col>
                <Col>

                </Col>
            </Row>
        </Container>
    )
}