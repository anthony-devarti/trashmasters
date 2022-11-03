/*

The Hero Component takes the following props
size: a number associated with the vh
cta: true or false
    if true, a cta button will be added in the center of the hero image
ctaText: string
    if this is null, it will default to "Learn More"
ctaVariant: defaults to olive, can also be set to be red
ctaSize: sm, md, lg, xl
ctaOnclick: a function to be executed when the cta is clicked
bgImage: string url to an image.  
 */

import { Link } from "react-router-dom";

export default function Hero(props) {

    let buttonText = 'Learn More'
    if (props.ctaText) {
        buttonText = props.ctaText
    }

    let buttonStyle = 'btn'
    if (props.ctaVariant == 'red') {
        buttonStyle = 'btn red'
    }

    let size = '100vh'
    if (props.size) {
        size = `${props.size}vh`
    }


    return (
        <div className="hero" style={{
            height: { size },
            backgroundImage: `url(${props.bgImage})`
        }}>
            <div className="hero-header">
                {props.header}
            </div>
            {props.cta &&
                <Link to="/episodes"
                    // variant={props.ctaVariant}
                    className={buttonStyle}
                // style={{backgroundColor:"light", height: "100px", width: "200px", borderRadius : "20px"}}
                >
                    {buttonText}
                </Link>
            }
        </div>
    )
}