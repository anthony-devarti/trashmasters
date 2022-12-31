import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

export default function Footer(props) {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            <div>
                <a href="mailto:goblintrashmasters@gmail.com" className="footer-link">Email Us</a>
            </div>
            <div>
            <FontAwesomeIcon icon={faCopyright} /> {`The Goblin Trashmasters ${year}`}
            </div>
        </div>
    )
}