import { Container, Row, Col } from 'react-bootstrap'
import AboutRow from "../components/AboutRow"

export default function About() {
    return (
        <Container className="about">
            <Row className="first">
                    Meet the Trashmasters!
            </Row>
            <AboutRow
                name={'Anthony'}
                info={['one cool fact', 'another cool fact']}
                roles={"Web dev"}
            />
            <AboutRow
                name={"Bobby"}
                info={['one cool fact', 'another cool fact']}
                roles={"Editor"}
            />
            <AboutRow
                name={"Kyle"}
                info={['one cool fact', 'another cool fact']}
                roles={"Designer"}
            />
        </Container>
    )
}