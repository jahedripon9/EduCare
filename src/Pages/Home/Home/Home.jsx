import Banner from "../../Banner/Banner";
import OnlineCenter from "../../OnlineCenter/OnlineCenter";
import OurCommunity from "../../OurCommunity/OurCommunity";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import StartLearning from '../../StartLearning/StartLearning';
import Subscribe from "../../Subscribe/Subscribe";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Header />
            <Banner />
            <OnlineCenter />
            <StartLearning />
            <Subscribe />
            <OurCommunity />
            <Footer />
        </div>
    );
};

export default Home;