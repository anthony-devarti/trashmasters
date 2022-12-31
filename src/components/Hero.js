/*

The Hero Component takes up the whole page, minus the navbar height.  It displays an image, with a cta button, header, and maybe even a description
Props:
cta: true or false
    if true, a cta button will be added in the center of the hero image
ctaText: string
    if this is null, it will default to "Learn More"
ctaVariant: defaults to olive, can also be set to be red
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

    return (
        <div className="hero" style={{
            backgroundImage: `url(${props.bgImage})`
        }}>
            <div className="hero-header">
                {props.header}
            </div>
            {props.description && 
            <p style={{color:'white'}}>
                {props.description}
            </p>
            }
            {props.cta &&
                <Link to="/episodes"
                    className='custom-button custom-hover'
                    style={{width: '80vw', height: '10vh'}}
                >
                    {buttonText}
                </Link>
            }
        </div>
    )
}