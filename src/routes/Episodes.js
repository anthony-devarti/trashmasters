import EpisodeCard from "../components/EpisodeCard";
import { useEffect, useState } from "react";
import { rssUrl } from "../data/appContants";
import Spinner from '../components/svgComponents/Spinner'
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default function Episodes(props) {

    const [rowData, setRowData] = useState()

    useEffect(() => {

        fetch(rssUrl)
            .then(response => response.text())
            .then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
            .then(data => {
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
            <h2 className="center" style={{padding: '1rem', textAlign: 'center'}}>Check out all of our episodes right here.</h2>
            <Container className="episodes">
                {
                    !rowData &&
                    <div className="spinner">
                        <FontAwesomeIcon icon={faSpinner} pulse size="xl" />
                    </div>
                }
                {
                    rowData &&
                    rowData.length > 0 &&
                    rowData.map((row, index) => {
                        return (
                            <>
                                <EpisodeCard key={index} episode={row} />
                            </>
                        )
                    })
                }
            </Container>
        </>
    )
}