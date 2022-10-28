import SubscriptionButton from "../components/SubscribtionButton";

export default function Subscribe() {
    return (
        <div className="subscribe">
            <div>
                <h1>
                    We are available on all of the following platforms!
                </h1>
            </div>
            <div className="subscription">
                <SubscriptionButton
                    service={"Apple Podcasts"}
                    link={"apple.com"}
                    icon={"faApple"}
                />
            </div>
            <div className="subscription">
                <SubscriptionButton
                    service={"Google Podcasts"}
                    link={"google.com"}
                    icon={false}
                />
            </div>
        </div>
    )
}