/* 
The Episode Card component exists to allow you to procedurally display episdoes.  The episode object should be the only prop needed.
Props:
episode: an object that contains:
    title: string
    description: string
    release: a date object?  Maybe a string.  Maybe there should be a utility function so this can be put in directly from the backend.
    guestName: string, optional, guest seciont does not appear if this is left null
    guestInfo: string, optional
*/

import PodcastIcon from '../components/svgComponents/PodcastIcon'

export default function EpisodeCard({ episode }) {



    return (
        <div className="episode-card">

            <div className="wrapper">
                <div className="overviewInfo">
                    <div className="actions">
                    </div>

                    <div className="productinfo">
                        <div className="grouptext">
                            <h3>RELEASE DATE</h3>
                            <p>{episode.release}</p>
                        </div>
                        <div className="productImage">
                            <img src={episode.image} alt="episode image" />
                        </div>

                    </div>

                </div>
                {/* <!-- overview info --> */}

                <div className="productSpecifications">
                    <h1> {episode.title} </h1>
                    <p> {episode.description} </p>

                    {episode.guestName &&
                        <div className="productFeatures">
                            <div className="feature">
                                <div className="featureIcon">
                                </div>
                                <div className="featureText">
                                    <p> <strong>{episode.guestName}</strong></p>
                                    <p>{episode.guestInfo}</p>
                                </div>
                            </div>
                        </div>

                    }

                    <div className="checkoutButton">
                        <div className="priceTag">
                            <PodcastIcon style={{ fill: "white", height: "50px", marginLeft: "1rem" }} />
                        </div>
                        <button
                            className="preorder"
                            onClick={() => console.log(`Clicking on ${episode.title}`)}
                        >
                            <p>Listen</p>
                            <div className="buttonaction">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}