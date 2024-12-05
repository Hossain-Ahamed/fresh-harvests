import SEO from "../../../components/SEO/SEO";
import About from "./About/About";
import Banner from "./Banner";
import OurProductSection_Container from "./OurProductSection/OurProductSection_Container";


const Home = () => {
    return (
        <div>
            <SEO />
            <Banner />
            <OurProductSection_Container />
            <About/>
        </div>
    );
};

export default Home;

