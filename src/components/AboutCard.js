/*
Props
name: string
roles: string
format: string
lifespan: number
photo: image url
*/

import { Card } from 'react-bootstrap'

export default function AboutCard(props) {
    return (
        <Card className='about-card'>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1473225071450-1f1462d5aa92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80" />
            <Card.Body>
                <Card.Title>
                    {props.name}
                </Card.Title>
                <Card.Text>
                    <ul>
                        <li>
                            What do you do?: {props.roles}
                        </li>
                        <li>
                            Favorite format: {props.format}
                        </li>
                        <li>
                            How long have you been playing magic?: {`${props.lifespan} years`}
                        </li>
                    </ul>

                </Card.Text>
            </Card.Body>
        </Card>
    )
}