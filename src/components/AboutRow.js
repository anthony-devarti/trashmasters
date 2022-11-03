import { Container, Row, Col } from 'react-bootstrap'


export default function AboutRow() {
    return (
            <Row>
                <Col className="skew-col name">
                    <div className="unskewed">
                        Anthony
                    </div>
                </Col>
                <Col className="skew-col info">
                    <div className="unskewed">
                        <ul>
                            <li>A cool fact</li>
                            <li>Another cool fact</li>
                        </ul>
                    </div>
                </Col>
                <Col className="skew-col roles">
                    <div className="unskewed">
                        I do this thing
                    </div>
                </Col>
                <Col >
                <div>
                    A picture goes here
                </div>
                </Col>
            </Row>
    )
}