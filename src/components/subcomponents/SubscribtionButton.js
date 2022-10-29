/*
Props
service: string, if not recognized, the defaullt mircorphone icon will be displayed
link: string (mandatory).  if no prefix is included, it will default to https://.  If null, the button will not render
*/

import AppleIcon from '../svgComponents/AppleIcon';
import GoogleIcon from '../svgComponents/GoogleIcon';
import PodcastIcon from '../svgComponents/PodcastIcon';

export default function SubscriptionButton(props) {

    let buttonIcon = <PodcastIcon style={{height: "30px"}}/>
    //more can be added this way
    switch (props.service) {
        case "Apple Podcasts":
            buttonIcon = <AppleIcon style={{height: "30px"}}/>
            break;
        case "Google Podcasts":
            buttonIcon = <GoogleIcon style={{height: "30px"}}/>
            break;
        default:
            break;
    }

    //do not display any button if the link is null
    if (!props.link) {
        return null
    }

    //control for fogetting https://
    let target = props.link
    if (!target.includes("https://")){
        target = "https://" + props.link
    }

    return (
        <>
            Listen on {props.service}!
            <div className="center">
                <button
                    className="custom-button"
                    role="button"
                    onClick={() => window.open(target, '_blank')}
                >
                    <span class="text">
                        <div className="icon">
                            {buttonIcon}
                        </div>
                    </span>
                </button>
            </div>
        </>
    )
}