import SubscriptionButton from "../components/subcomponents/SubscribtionButton";

export default function Subscribe() {
    return (
        <div className="subscribe">
            <div>
                <h1 className="title-section">
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
            <div className="subscription">
                <SubscriptionButton
                    service={"Stitcher Radio"}
                    link={"https://www.stitcher.com/show/1047059"}
                />
            </div>
            <div className="subscription">
                <SubscriptionButton
                    service={"iHeartRadio"}
                    link={"https://www.iheart.com/podcast/269-the-goblin-trashmasters-105571999/"}
                />
            </div>
            <div className="subscription">
                <SubscriptionButton
                    service={"Amazon Podcasts"}
                    link={"https://music.amazon.com/podcasts/13846b0c-314e-4866-b968-33409aa74b6e/the-goblin-trashmasters"}
                />
            </div>
        </div>
    )
}
