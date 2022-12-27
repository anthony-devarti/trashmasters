import { Button, Col, Row, Modal } from 'react-bootstrap'
import { useState } from 'react'
import Back from '../svgComponents/Back'
import Forward from '../svgComponents/Forward'
import DownloadIcon from '../svgComponents/DownloadIcon'
import GoogleIcon from '../svgComponents/GoogleIcon'
import AppleIcon from '../svgComponents/AppleIcon'

export default function Mobile(props) {

    const [step, setStep] = useState(1)

    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    function PlatformSelectorModal() {
        return (
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>What Platform are you Using?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Button
                                onClick={() => window.open("https://apps.apple.com/us/app/riverside-fm/id1554443872", '_blank')}
                                className='custom-button'
                            >
                                <AppleIcon style={{ height: '45px', fill: 'white' }} />
                            </Button>
                        </Col>
                        <Col>
                            <Button
                                onClick={() => window.open("https://play.google.com/store/apps/details?id=riverside.fm", '_blank')}
                                className='custom-button'
                            >
                                <GoogleIcon style={{ height: '45px', fill: 'white' }} />
                            </Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        )
    }

    return (
        <div className='instruction-seciton'>
            <Button className='custom-button' onClick={() => props.setView(0)}><Back style={{ height: '45px', fill: 'white' }} /> Back</Button>
            <div className='title-section'>
                Mobile Instructions
            </div>
            {step == 1 &&
                <Row>
                    <Col>
                        <h2>Step 1: Install Riverside.fm</h2>
                        {"Interviewing on mobile means installing the free riverside.fm app. We recommend about 1GB of free space on your device for both the application and the recording."}
                        <div className='center'>
                            <Button className='custom-button' onClick={handleShow}>
                                <DownloadIcon style={{ height: '45px', fill: 'white' }} />
                            </Button>
                        </div>
                        <PlatformSelectorModal />
                    </Col>
                </Row>
            }
            {step == 2 &&
                <Row>
                    <Col>
                        <h2>Step 2: Join the Room</h2>
                        {"In the Riverside.fm App, just tap to join the studio.  This may send you to the lobby until we are able to admit you into the studio properly.  We recommend using headphones and moving to a quiet area for the best audio quality."}
                    </Col>
                </Row>
            }
            {step == 3 &&
                <Row>
                    <Col>
                        <h2>Step 3: Recording</h2>
                        {"Once you have been added into the studio, you will see what looks like a normal video chat.  Don’t worry!  We aren’t recording yet!  When we are ready to record, you will see a visual countdown.  You’ll see a notification at the top of the window that lets you know when recording is in session.  To the right of that, you may see an upload percentage.  This is because riverside.fm continually uploads your local recording to the cloud."}
                    </Col>
                </Row>
            }
            {step == 4 &&
                <Row>
                    <Col>
                        <h2>Step 4: Upload</h2>
                        {"Once the recording has ended, please leave the tab open and your device connected to the internet so the upload can complete.  If it is interrupted, we may need to reach out to you in order to resume the upload.  To do that, just reopen the app and wait until the upload is complete."}
                    </Col>
                </Row>
            }
            {step == 5 &&
                <Row>
                    <Col>
                        <h2>Step 5: Final Steps</h2>
                        {"Be sure to sign your release form, which is provided for you either digitally or physically.  If we’re sending it to you digitally, it will be sent to the same email account as this message, but will appear in a separate email. That’s it!  Thanks for joining and we’ll be sure to send you the release date once editing is complete and the episode is scheduled."}
                    </Col>
                </Row>
            }
            <Row className='nav-btns'>
                <Col className='nav'>
                    {step > 1 &&
                        <Button className='custom-button' onClick={() => setStep(step - 1)}>
                            <Back style={{ height: '45px', fill: 'white' }} /> Previous Step
                        </Button>
                    }
                </Col>
                <Col className='nav'>
                    {step < 5 &&
                        <Button className='custom-button' onClick={() => setStep(step + 1)}>
                            Next Step <Forward style={{ height: '45px', fill: 'white' }} />
                        </Button>
                    }
                </Col>
            </Row>
        </div >
    )
}