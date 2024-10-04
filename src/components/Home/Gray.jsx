import PlanSection from "./PlanSection";
import Map from "./Map";
import SocialMedia from "./SocialMedia";
import Comment from "./Comment";
import Subscription from "./Subscription";

export default function Gray () {
    return (
        <div className="gray">
            <PlanSection />
            <Map />
            <SocialMedia />
            <Comment />
            <Subscription />
        </div>
    ) 
}