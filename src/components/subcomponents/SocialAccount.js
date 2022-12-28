import linkTo from "../../utilities/linkTo";
import TwitterIcon from '../svgComponents/TwitterIcon';
import InstagramIcon from '../svgComponents/InstagramIcon';
import YoutubeIcon from '../svgComponents/YoutubeIcon';
import FacebookIcon from '../svgComponents/FacebookIcon';
import TiktokIcon from '../svgComponents/TiktokIcon';
import { Button } from 'react-bootstrap';

export default function SocialAccount({account, link, description}) {
    function VariableIcon(){
        if (account === 'Twitter') return <TwitterIcon style={{ height: '45px', fill: "white" }} />
        if (account === 'Instagram') return <InstagramIcon style={{ height: '45px', fill: "white" }} />
        if (account === 'YouTube') return <YoutubeIcon style={{ height: '45px', fill: "white" }} />
        if (account === 'Facebook') return <FacebookIcon style={{ height: '45px', fill: "white" }} />
        if (account === 'Tiktok') return <TiktokIcon style={{ height: '45px', fill: "white" }} />
    }
    return (
        <div className="account">
            <div>
                <h2>
                    {account}
                </h2>
            </div>
            {description &&
            <div>
                {description}
            </div>
            }
            <div>
                <Button className="custom-button" onClick={() => linkTo(link)}>
                    <VariableIcon />
                </Button>
            </div>
        </div>
    )
}