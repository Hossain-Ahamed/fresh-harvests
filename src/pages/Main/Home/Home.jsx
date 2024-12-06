import SEO from "../../../components/SEO/SEO";
import About from "./About/About";
import TopBanner from "./TopBanner/TopBanner";
import OurProductSection_Container from "./OurProductSection/OurProductSection_Container";
import BottomBanner from "./BottomBanner/BottomBanner";
import Testimonial from "./Testimonial/Testimonial";
import Blog from "./Blog/Blog";
import Footer from "../../Shared/Footer/Footer";


const Home = () => {
    return (
        <>
            <SEO />
            <TopBanner />
            <OurProductSection_Container />
            <About />
            <BottomBanner />
            <Testimonial />
            <Blog/>
           
        </>
    );
};

export default Home;

