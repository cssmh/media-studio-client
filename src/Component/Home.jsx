import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import NowPlaying from "../Pages/NowPlaying";
import SpecialOffer from "./SpecialOffer";
import TopMovies from "./TopMovies";
import Experience from "../Pages/Experience";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Star CineMix - Book Your Ticket</title>
      </Helmet>
      <Banner />
      <NowPlaying />
      <SpecialOffer />
      <TopMovies />
      <Experience />
    </div>
  );
};

export default Home;
