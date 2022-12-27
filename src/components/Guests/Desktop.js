import { Button, Col, Row } from 'react-bootstrap'
import { useState } from 'react'
import Back from '../svgComponents/Back'
import Forward from '../svgComponents/Forward'

export default function Desktop(props) {

    const [step, setStep] = useState(1)

    return (
        <div className='instruction-seciton'>
            <Button className='custom-button' onClick={() => props.setView(0)}><Back style={{ height: '45px', fill: 'white' }} /> Back</Button>
            <div className='title-section'>
                Desktop Instructions
            </div>
            {step == 1 &&
                <Row>
                    <Col>
                        <h2>Step 1: Equipment Check</h2>
                        {"Check your audio and video to make sure that your microphone is picking up your voice.  We recommend using a headset, as this reduces unwanted echo.  We are able to manage your volume on our end, so don’t worry about that.  If unsure about your volume level, err on the side of having your volume louder.  It’s easier for us to lower your volume than to raise it."}
                    </Col>
                </Row>
            }
            {step == 2 &&
                <Row>
                    <Col>
                        <h2>Step 2: Join the Room</h2>
                        {"Click on the link in your email, and enter your name. This name appears on your video as well as is being used for editing purposes, so be sure to enter your name as you would like it recognized.  You may need to allow Riverside.fm to access your microphone and camera. Then, select if you are using headphones or not.  Click “Join Studio” and you will be sent to the lobby."}
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
                        {"Once the recording has ended, please leave the tab open and your device connected to the internet so the upload can complete.  If it is interrupted, we may need to reach out to you in order to resume the upload.  To do that, just use the same device to head to https://riverside.fm/upload"}
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