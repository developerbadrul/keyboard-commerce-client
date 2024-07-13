import Adventage from "../../components/UI/Adventage";
import Advertisement from "../../components/UI/Advertisement";
import Banner from "../../components/UI/Banner";
import Category from "../../components/UI/CategorySection";
import FeatureProductSection from "../../components/UI/FeatureProductSection";
import NewsLetter from "../../components/UI/NewsLetter";
import TestimonialSection from "../../components/UI/Testimonial";




export default function Home() {

    return (
        <>
            <Banner />
            <Advertisement />
            <FeatureProductSection />
            <Category />
            <TestimonialSection />
            <Adventage />
            <NewsLetter />
        </>
    )
}

