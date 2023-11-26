import { Carousel } from "react-bootstrap";
import { useState } from "react";
import orcArmyToken from '../img/Tokens/orcArmyToken.png'

export default function TokenFeature() {

    const [ index, setIndex ] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }

    return (
        <div className="token-feature">
            <h2 className="title-section" style={{color:'white'}}>Our Featured Tokens</h2>
            <Carousel touch activeIndex={index} onSelect={handleSelect} interval={null}>
                <Carousel.Item>
                    <img src={orcArmyToken} className="token-image" />
                    <Carousel.Caption>
                        <h3>Orc Army - Modern - Season 4</h3>
                        <p>A classic Invasion-era-style token for all your Orcish Bowmaster Needs this modern season.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src={orcArmyToken} className="token-image"/>
                    <Carousel.Caption>
                        <h3>Shark - Pioneer - Season 3</h3>
                        <p>Cycle away with our very own Ongo in a flying shark suit! With these tokens, you'll only be the SECOND most annoying type of UW Lotus player.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src={orcArmyToken} className="token-image"/>
                    <Carousel.Caption>
                        <h3>Blood - Any Format - Season 2</h3>
                        <p>
                            Ongo has gone full pregnant Bella and is sippin on some sizzurp.  By Sizzurp, naturally, we mean the blood of virgins.  Good thing he spends so much time around magic players.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}