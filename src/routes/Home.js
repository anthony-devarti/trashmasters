import Hero from '../components/Hero'

export default function Home() {
    return (
        <>
            <Hero 
            cta={true}
            header={"New Episodes out now!"}
            ctaText={"LISTEN"}
            ctaOnclick={'subscribe'}
            bgImage={"https://images.unsplash.com/photo-1473225071450-1f1462d5aa92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80"}
            />
        </>
    )
}