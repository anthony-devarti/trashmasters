import Hero from '../components/Hero';
import { Alert } from 'react-bootstrap';
import TokenFeature from '../components/TokenFeature';

export default function Home() {
    return (
        <div className='home'>
            <Hero
                cta={true}
                header={"The Trashiest Podcast In All of Magic"}
                ctaText={"Check us out!"}
                ctaOnclick={'subscribe'}
                bgImage={"https://images.unsplash.com/photo-1473225071450-1f1462d5aa92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80"}
            >
                {/* <TokenFeature /> */}
            </Hero>
        </div>
    )
}