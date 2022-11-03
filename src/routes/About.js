import AboutCard from "../components/AboutCard"

export default function About() {
    return (
        <div className="about">
            <AboutCard
                name={"Anthony DeVarti"}
                roles={"Web Design"}
                format={"Standard"}
                lifespan={30}
                photo={"https://images.unsplash.com/photo-1473225071450-1f1462d5aa92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80"}
            />
            <AboutCard
                name={"Bobby McKenzie"}
                roles={"Graphic Design"}
                format={"Limited"}
                lifespan={2}
                photo={"https://images.unsplash.com/photo-1473225071450-1f1462d5aa92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80"}
            />
        </div>
    )
}