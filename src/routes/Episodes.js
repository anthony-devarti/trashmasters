import EpisodeCard from "../components/EpisodeCard";
import { useEffect, useState } from "react";
import { useFeed } from "react-hook-rss";
import { rssUrl } from "../data/appConstants";

export default function Episodes(props) {


    // const feed = useFeed("https://brainstormbrewery.com/category/podcasts/brainstormbrewery/feed/");

    // useEffect(() => {
    //     console.log("the feed", feed);
    // }, [feed]);

    const [ feed, setFeed ] = useState([])
    console.log("feed", feed)

    useEffect(() => {

        fetch(rssUrl).
            then(response => response.text).
            then(str => {
                const parser = new window.DOMParser();
                const data = parser.parseFromString(str, 'text/xml');
                const itemList = data.querySelectorAll('item');
                const items = [];
                itemList.forEach((el) => {
                    items.push({
                        title: el.querySelector('title').innerHTML,
                        pubDate: new Date(el.querySelector('pubdate').textContent),
                        mp3: el.querySelector('enclosure').getAttribute('url')
                    })
                })
                setFeed(items);
            })
    },[])


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

            <EpisodeCard episode={exampleEpisode} />
        </>
    )
}