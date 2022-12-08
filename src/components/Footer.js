import icon from '../images/logo.jpg'

export default function Footer(props) {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            <div>
                <img src={icon} className='logo' height='20px'/>
            </div>
            <div>
                <a href="mailto:goblintrashmasters@gmail.com" className="footer-link">Email Us</a>
            </div>
            <div>
                {`Copyright The Goblin Trashmasters ${year}`}
            </div>
        </div>
    )
}