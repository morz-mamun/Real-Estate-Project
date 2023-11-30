import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Advertisement from "./Advertisement/Advertisement";
import LatestReview from "./LatestReview/LatestReview";
import Extra1 from "./Extra1/Extra1";
import ContactUs from "./ContactUs/ContactUs";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>MorZE | Home</title>
      </Helmet>
      <Banner></Banner>
      <Advertisement></Advertisement>
      <LatestReview></LatestReview>
      <Extra1></Extra1>
      <ContactUs></ContactUs>
      </div>
  );
};

export default Home;
