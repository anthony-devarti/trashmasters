import { Row, Col } from "react-bootstrap";

export default function Discord() {
    return (
        <div className="discord">
            <h1 className="title-section">
                Discord
            </h1>
            <Row>
                <Col></Col>
                <Col>
                    Join our discord server to stay up to date on episode releases, streams, events, or even just as a place to talk magic!
                </Col>
                <Col></Col>
            </Row>
            <div className="center mt-5">
                <iframe src="https://discord.com/widget?id=1050195804205351053&theme=dark" width="350" height="400" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </div>
        </div>
    )
}