import EpisodeCard from "../components/EpisodeCard";

export default function Episodes() {

    //probably will need some sort of useEffect to go grab the podcast episodes from the backend.

    const exampleEpisode = {
        title: 'Example Title',
        description: 'Here is an example description',
        release: '10/31/22',
        image: "https://i.imgur.com/ckSgzLQ.png",
        // guestName: "Me",
        // guestInfo: "I'm just a little guy."
    }

    return (
        <>
        Episodes
        
        <EpisodeCard episode={exampleEpisode}/>
        </>
    )
}