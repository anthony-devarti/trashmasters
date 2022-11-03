import Hero from '../components/Hero'

export default function Home() {

    const ctaClick = () => {
        console.log("click")
    }

    return (
        <>
            <Hero 
            cta={true}
            ctaText={"GO"}
            ctaVariant={"secondary"}
            ctaSize={"md"}
            ctaOnclick={ctaClick}
            bgImage={"https://images.unsplash.com/photo-1473225071450-1f1462d5aa92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80"}
            />
        </>
    )
}