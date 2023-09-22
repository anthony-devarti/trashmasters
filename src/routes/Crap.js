import { Row, Col, Button, Accordion, Modal } from 'react-bootstrap';
import { useState } from 'react';

export default function Crap() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='crap'>
            <h1 className="title-section">Comp REL Assistance Program</h1>
            <p>The Comp REL assistance program is a community development program presented by The Goblin Trashmasters in order to help small or medium stores host profitable Competitive Magic
                events, like RCQs, that they would not be able to host otherwise through free consultations, hosting assistance, and Event Kits. If you're a store owner or employee with the ability to manage the organized
                play schedule, you're in the right place for more information!  If you're anyone else, you probably have someone in mind who this would help!
                Please help get the word out by sharing this link with them!  If you don't need all of this and want to skip to the application process, just start with "How do I get the ball rolling on this?"
            </p>
            <Row>
                <Col xs={1}></Col>
                <Col xs={10}>
                    <h2>FAQ</h2>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>No, really.  What's this gonna cost me?</Accordion.Header>
                            <Accordion.Body>
                                The Comp REL assistance program is free and will always be free.  There is never one penny owed, billed, requested, or accepted.
                                We do not accept any kickbacks, reimbursements or product and we will be paying for our own food and drinks while we are at your store.
                                Our costs associated with this program are our own.  We are relatively sane.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>And why exactly should I trust you to do this?</Accordion.Header>
                            <Accordion.Body>
                                This program is run by the hosts of the Goblin Trashmasters Podcast, who have a combined 23 years of event hosting and TO experience in the competitive magic scene.
                                Frankly, we know what we're doing and we've been doing it for a long time.  Our first goal for you is to make sure you make your money.  We will never recommend
                                that you operate an event at a loss (we do not think this is a realistic way to host events of this size)
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>So what's in this kit?</Accordion.Header>
                            <Accordion.Body>
                                Our RCQ Kits contain:
                                <ul>
                                    <li>An In-Store Event Promotion Poster</li>
                                    <li>An instruction sheet to help you use your RCQ Kit</li>
                                    <li>A congratulations letter with next steps for your eventual RCQ winner</li>
                                    <li>50 Deck Registration Sheets for players to submit deck lists</li>
                                    <li>25 table tents to support table numbering up to 50 players</li>
                                    <li>The Goblin Trashmasters custom tokens relevant to your event's format to be given away.</li>
                                    <li>A good handful of The Goblin Trashmasters Stickers to hand out</li>
                                    <li>1 Judge Announcement card to be used during this event (you can reuse this for every event)</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>So what do you do, exactly?</Accordion.Header>
                            <Accordion.Body>
                                The Program has two main offerings:  Consultation and Hosting.
                                <br /><br />
                                Consultation: This service is completely remote and can be completed over Discord or Zoom.  During this call, which we expect to run about 90 minutes, we will go over a specific
                                plan for your event, helping you get set up as a Melee event organizer that can run RCQs, scheduling your event, planning a profitable prize support schedule that leaves
                                both your players and yourself happy, Tournament Organizer Basics training, and Judging Basics Training.
                                <br /><br />
                                Hosting: If we are close enough and schedules permit us, we can host your event directly! We can still meet for everything included in the consultation package, but we can do so
                                in person (video call is still an option, if preferred).  In addition to this, we will be able to run the event for you as a Head Judge and Tournament Organizer roles.  For this
                                option, we only request that at least one permanent member of your staff is available to assist as a floor judge so they can learn these methods.  Remember, the goal is to
                                make it so you can run these without us!
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>So what's in it for you, then?</Accordion.Header>
                            <Accordion.Body>
                                Our goals are to increase the number of total high-quality RCQ events for existing audience by helping stores that otherwise may not run an event
                                to run an event, and to do it well!
                                We also know that, as a competitive-focued Magic Podcast, our existing listeners, your prospective new customers, and our prospective new listeners are the
                                same group of people, so our goals and your goals are perfectly aligned, here!
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>How is this not you just working for free?</Accordion.Header>
                            <Accordion.Body>
                                The program exists as a learning and development program to help small or medium Local Game Stores break into the exciting and rewarding space of Comp REL magic events.
                                While we offer this for free, our goal is to help guide you and your staff to a point where you can host RCQs and other competitive events in such a way that you are
                                meeting the expectations of the competitive magic community, all while making a profit on every event.
                                Even if we are able to host your event directly, it is our expectation that at least one store employee participates as a member of the event staff for
                                development purposes.  The end goal is so that you can do the next one without us!  We don't have a hard and fast one-and-done rule, but we want to make sure that
                                we have enough time to help everyone.  A rising tide lifts all ships!
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>How do I get the ball rolling on this?</Accordion.Header>
                            <Accordion.Body>
                                Starting the process is easy!  Just click on the "Start the Application" button below and we will reach out to you as soon as possible.
                                Please ensure the email that is used to submit this form is one that you check often, as our first point
                                of contact will be that email address.
                                <br /><br />
                                <Button onClick={handleShow}>Start the Application</Button>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col xs={1}></Col>


                <Modal show={show} onHide={handleClose} backdrop='static' size='lg'>
                    <Modal.Header closeButton>
                        <Modal.Title>CRAPplication</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd7abk6aVlMt7zceIeommn5ctw4MbGTbvqQq5ZKOhS0V-qDIA/viewform?embedded=true" width="640" height="1518" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                    </Modal.Body>
                    <Modal.Footer>
                        Closing this will cancel your application.
                    </Modal.Footer>
                </Modal>
            </Row>
        </div>
    )
}