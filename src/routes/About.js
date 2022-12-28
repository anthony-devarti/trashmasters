import { Container, Row, Card, Button } from 'react-bootstrap'
import AboutRow from "../components/AboutRow"

export default function About() {
    return (
        <Container className="about">
            <Row className="first title-section">
                Meet the Trashmasters!
            </Row>
            <div className='desktop'>
                <AboutRow
                    name={'Anthony'}
                    info={['Standard Specialist', 'Been playing magic forever']}
                    roles={"Developer"}
                />
                <AboutRow
                    name={"Kyle"}
                    info={['Modern Maestro', '10 years magic experience']}
                    roles={"Graphic Designer"}
                />
            </div>
            <div className='mobile'>
                <Card>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1473225071450-1f1462d5aa92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80"/>
                    <Card.Body>
                        <Card.Title>Kyle</Card.Title>
                        <Card.Text>
                            Modern Maestro
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
                <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1473225071450-1f1462d5aa92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80"/>
                    <Card.Body>
                        <Card.Title>Anthony</Card.Title>
                        <Card.Text>
                            Standard Specialist
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Social Media</Card.Title>
                        <Card.Text>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                            Follow us on Social Media, if that's your thing.
                            <Button className='mt-4'>Twitter</Button>
                            <Button className='mt-4'>Instagram</Button>
                            <Button className='mt-4'>Facebook</Button>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
}