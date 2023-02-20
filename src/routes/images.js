import anthonyAbout from '../img/anthonyAbout.jpg'
import kyleAbout from '../img/kyleAbout.jpg'
import ErrorLogo from '../img/ErrorLogo.jpg'
import ongoComputer from '../img/ongoComputer.png'
import ongoPhone from '../img/ongoPhone.png'
import ongoStayTrashy from '../img/ongoStayTrashy.png'
import trashmastersLogo from '../img/trashmastersLogo.jpg'

export default function Images() {
    return (
        <>
            <p>
                The images index.  If you're here, you should be named Anthony or Kyle.
            </p>
            <p>
                Intended for static sourcing of images for emails or external usage.
            </p>
            <p>
                For the love of god, do not disseminate these links.  If anything used here goes public and gets used enough, this becomes the most expensive S3 bucket in the world.  Literal thousands of dollars a month.
            </p>
            <img src={anthonyAbout} />
            <img src={kyleAbout} />
            <img src={ErrorLogo} />
            <img src={ongoComputer} />
            <img src={ongoPhone} />
            <img src={ongoStayTrashy} />
            <img src={trashmastersLogo} />
        </>
    )
}