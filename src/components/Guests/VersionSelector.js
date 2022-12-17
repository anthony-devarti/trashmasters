import { Button, Col, Row } from 'react-bootstrap'

export default function VersionSelector(props) {
    return (
        <div className='version-selector'>
            <Row>
                <Col className='center'>
                    Are you interviewing on a desktop or a mobile device?
                </Col>
            </Row>
            <Row className="buttons-container">
                <Col>
                    <Button className='custom-button' onClick={props.makeDesktop}>
                        Desktop
                    </Button>
                </Col>
                <Col>
                    <Button className='custom-button' onClick={props.makeMobile}>
                        Mobile
                    </Button>
                </Col>
            </Row>
        </div>
    )
}