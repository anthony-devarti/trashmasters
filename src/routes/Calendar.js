import { Row, Col, Alert } from 'react-bootstrap'

export default function Calendar() {
    return (
        <>
            <div className="calendar">
                <h1 className="title-section">
                    Calendar
                </h1>
                <Row>
                    <Col></Col>
                    <Col style={{ textAlign: 'center' }} >
                        Your place to find details about upcoming RCQs!
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <div className="center mt-5">
                            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&src=OGY0ODFlMmJkZDJiMzJkYzZhYTJiODZjZDM5YmM0YmIyZTVhYThmN2VjMWU2M2IxY2M2MjMwMTNlYTA4NWMzOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23D50000" style={{ border: 'solid 1px #777' }} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='contact'>
                        <Alert variant='info'>
                            <p>
                                Did we miss one?  If you would like to submit another RCQ to be included, we'll do it!  Just shoot us an <a href="mailto:goblintrashmasters@gmail.com">email</a>.
                            </p>
                            <p>
                                To be included, the email will need to have a subject line of "RCQ Addition" and will need a link to the event page on WOTC's site. (It will look like locator.wizards.com/events/123456789/false  You'll see this if you go through the Wizards Event Locator)
                                If there is not a locator link, we will look into it but we will have to include a note that your event is not confirmed as a valid RCQ.  RCQs must be scheduled in order to give out qualifications.
                            </p>
                            <p>
                                Please do not send us Facebook Event links.  It's not 2009.
                            </p>
                        </Alert>
                    </Col>
                </Row>
            </div>
        </>
    )
}