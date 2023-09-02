import Hero from '../components/Hero';
import { Alert } from 'react-bootstrap';

export default function Home() {
    return (
        <>
            <Hero
                cta={true}
                header={"The Trashiest Podcast In All of Magic"}
                ctaText={"Pick an Episode"}
                ctaOnclick={'subscribe'}
                bgImage={"https://images.unsplash.com/photo-1473225071450-1f1462d5aa92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80"}
            >
                <Alert variant='info'>A Special welcome to anyone who found their way here from SCG Coverage!</Alert>
            </Hero>
        </>
    )
}