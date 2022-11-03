/*

The Hero Component takes the following props
size: a number associated with the vh
cta: true or false
    if true, a cta button will be added in the center of the hero image
ctaText: string
    if this is null, it will default to "Learn More"
ctaVariant: any basic bootstrap Button variant will be passed through
ctaSize: sm, md, lg, xl
ctaOnclick: a function to be executed when the cta is clicked
bgImage: string url to an image.  
 */

import { Button } from "react-bootstrap";

export default function Hero(props) {
    let buttonText = 'Learn More'
    if (props.ctaText) {
        buttonText = props.ctaText
    }


    return (
        <div className="hero" style={{
            height: size,
            backgroundImage: `url(${props.bgImage})`
            }}>
            {props.cta &&
                <Button
                    variant={props.ctaVariant}
                    className={props.ctaSize}
                    onClick={props.ctaOnclick}
                >
                    {buttonText}
                </Button>
            }
        </div>
    )
}