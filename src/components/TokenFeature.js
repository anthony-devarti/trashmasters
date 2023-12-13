import { Carousel } from "react-bootstrap";
import { useState } from "react";
import orcArmyToken from '../img/Tokens/orcArmyToken.png'
import adventureToken from '../img/Tokens/adventureToken.jpg'
import bloodToken from '../img/Tokens/bloodToken.jpg'
import constructToken from '../img/Tokens/constructToken.jpg'
import sharkToken from '../img/Tokens/sharkToken.jpg'
import treasureToken from '../img/Tokens/treasureToken.jpg'

export default function TokenFeature() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }

    return (
        <div className="token-feature">
            <h2 className="title-section" style={{ color: 'white' }}>Our Featured Tokens</h2>
            <Carousel touch activeIndex={index} onSelect={handleSelect} interval={null}>
                {/* <Carousel.Item>
                    <img src={treasureToken} className="token-image" />
                    <Carousel.Caption>
                        <h3>Treasure - Pioneer - Season 6</h3>
                        <p>Careful!  Caaaarreeefulllllll... Now!  Ongo takes a bit of a break so we can look at Ragavan Indiana Jones. </p>
                    </Carousel.Caption>
                </Carousel.Item> */}
                <Carousel.Item>
                    <img src={adventureToken} className="token-image" />
                    <Carousel.Caption>
                        <h3>Adventure - Standard - Season 5</h3>
                        <p>"We're going on an adventure!"  My adventures always have Ongo riding a Bunnicorn.  What boring-ass adventures are you having?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={orcArmyToken} className="token-image" />
                    <Carousel.Caption>
                        <h3>Orc Army - Modern - Season 4</h3>
                        <p>A classic Invasion-era-style token for all your Orcish Bowmaster Needs this modern season.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={sharkToken} className="token-image" />
                    <Carousel.Caption>
                        <h3>Shark - Pioneer - Season 3</h3>
                        <p>Cycle away with our very own Ongo in a flying shark suit! With these tokens, you'll only be the SECOND most annoying type of UW Lotus player.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={bloodToken} className="token-image" />
                    <Carousel.Caption>
                        <h3>Blood - Any Format - Season 2</h3>
                        <p>
                            Ongo has gone full pregnant Bella and is sippin on some sizzurp.  By Sizzurp, naturally, we mean the blood of virgins.  Good thing he spends so much time around magic players.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={constructToken} className="token-image" />
                    <Carousel.Caption>
                        <h3>Construct - Any Format - Season 1</h3>
                        <p>
                            Goblin in a mech suit!  Goblin in a mech suit!  No this isn't just me describing a weird sex dream.  Well, not JUST that.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}