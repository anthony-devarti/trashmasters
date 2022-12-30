import EpisodeCard from "../components/EpisodeCard";
import { useEffect, useState } from "react";
import { rssUrl } from "../data/appContants";
import Spinner from '../components/svgComponents/Spinner'
import { Container } from "react-bootstrap";

export default function Episodes(props) {

    const [rowData, setRowData] = useState()

    useEffect(() => {

        fetch(rssUrl)
            .then(response => response.text())
            .then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
            .then(data => {
                console.log("data in the request", data)
                const itemList = data.querySelectorAll('item');

                const items = [];
                itemList.forEach(el => {
                    items.push({
                        pubDate: new Date(el.querySelector('pubDate').textContent),
                        title: el.querySelector('title').innerHTML,
                        mp3: el.querySelector('enclosure').getAttribute('url'),
                        description: el.querySelector('description').textContent,
                        link: el.querySelector('link').textContent,
                    });
                });

                setRowData(items)
            });

    }, []);

    return (
        <>
            <h1 className="title-section center">
                Episodes
            </h1>
            <h2 className="center">Check out all of our episodes right here.</h2>
            <Container className="episodes">
            {
                !rowData &&
                <div className="spinner">
                    <Spinner style={{ height: "30vh" }} />
                </div>
            }
                {
                    rowData &&
                    rowData.length > 0 &&
                    rowData.map((row, index) => {
                        return (
                            <EpisodeCard episode={row} />
                        )
                    })
                }
            </Container>
            {/* <EpisodeCard episode={rowData[0]} /> */}
        </>
    )
}