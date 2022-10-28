/*
Props
service: string
link: string (mandatory)
icon: string of fa code.  Defaults to microphone
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import AppleIcon from './svgComponents/AppleIcon';
import GoogleIcon from './svgComponents/GoogleIcon';

export default function SubscriptionButton(props) {

    let buttonIcon = <FontAwesomeIcon icon={faMicrophone} />
    if (props.service == "Apple Podcasts") {
        buttonIcon = <AppleIcon />
    }
    if (props.service == "Google Podcasts") {
        buttonIcon = <GoogleIcon />
    }

    if (!props.link) {
        return null
    }

    return (
        <>
            Listen on {props.service}!
            <div className="center">
                <button
                    className="custom-button"
                    role="button"
                    onClick={() => window.open(props.link)}
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