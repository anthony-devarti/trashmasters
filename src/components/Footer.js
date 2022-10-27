export default function Footer(props) {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            <div>
                The Goblin Trashmasters
            </div>
            <div>
                <a href="mailto:goblintrashmasters@gmail.com">Email Us</a>
            </div>
            <div>
                {`Copyright The Goblin Trashmasters ${year}`}
            </div>
        </div>
    )
}