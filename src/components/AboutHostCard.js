export default function AboutHostCard({img, name, about}){
    return (
        <div className="about-hosts-card">
            <div className="gradient">
                </div>
                <div className="profile-down">
                    <img src={img} alt="" />
                    <div className="profile-title">{name}</div>
                    <div className="profile-description">{about}</div>
            </div>
        </div>
    )
}