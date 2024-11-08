import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import NowPlaying from "../Pages/NowPlaying";
import SpecialOffer from "./SpecialOffer";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Star CineMix - Book Your Ticket</title>
      </Helmet>
      <Banner />
      <NowPlaying />
      <SpecialOffer />
    </div>
  );
};

export default Home;
