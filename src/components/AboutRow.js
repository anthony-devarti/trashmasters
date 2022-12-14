import { Row, Col } from 'react-bootstrap'
import KyleCutout from '../img/KyleCutout.png'
import AnthonyCutout from '../img/AnthonyCutout.png'
/* 
this will provide an about row for hosts
props:
name: string
info: array of strings
roles: string
image: path to image
*/

export default function AboutRow(props) {

    return (
        <Row>
            <div className="skew-col name">
                <div className="unskewed name-text">
                    {props.name}
                </div>
            </div>
            <div className="skew-col info">
                <div className="unskewed text">
                    <ul>
                        {props.info.map((point) => {
                            return (
                                <li key={point}>{point}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="skew-col roles">
                <div className="unskewed text">
                    {props.roles}
                </div>
            </div>
            <div className='picture'>
                <img 
                src={props.name == 'Kyle' ? KyleCutout : AnthonyCutout} 
                style={{height:"30vh"}}
                />
            </div>
        </Row>
    )
}