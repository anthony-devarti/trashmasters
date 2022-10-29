import SubscriptionButton from "../components/subcomponents/SubscribtionButton";

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
                    link={"https://apple.com"}
                />
            </div>
            <div className="subscription">
                <SubscriptionButton
                    service={"Google Podcasts"}
                    link={"google.com"}
                />
            </div>
        </div>
    )
}