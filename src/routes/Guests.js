import { Row, Col } from 'react-bootstrap'
import VersionSelector from '../components/Guests/VersionSelector'
import { useState } from 'react'
import Desktop from '../components/Guests/Desktop'
import Mobile from '../components/Guests/Mobile'

export default function Guests(props) {

    /* 
    views:
        0- basic selector
        1- desktop view
        2- mobile view

    */    
    const [ view, setView ] = useState(0)

    return (
        <div className="guests">
            <h1 className="title-section">
                Welcome to the Show
            </h1>
            <Row className='center'>
                <Col xs={6}>
                    How to join a recording session.
                </Col>
            </Row>
                <div className='center'>
                    {view == 0 &&
                    <VersionSelector makeDesktop={() => setView(1)} makeMobile={() => setView(2)}/>
                    }
                    {view == 1 &&
                    <Desktop setView={setView}/>
                    }
                    {view == 2 &&
                    <Mobile setView={setView}/>
                    }
                </div>
        </div>
    )
}