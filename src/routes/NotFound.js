import { Button, Container, Row, Col } from 'react-bootstrap'
import ErrorLogo from '../img/ErrorLogo.jpg'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <Container>
            <Row>
                <Col className='title-section'>
                    404 Page Not Found
                </Col>
            </Row>
            <Row>
                <Col style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={ErrorLogo} style={{ height: '50vh' }} />
                </Col>
            </Row>
            <Row>
                <Col style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link
                        to="/"
                        className='custom-button custom-hover'
                    >
                        Go Home
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}