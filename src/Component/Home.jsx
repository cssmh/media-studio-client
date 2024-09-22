import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import NowPlaying from "../Pages/NowPlaying";
import Offer from "./Offer";
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
      <Offer />
      <TopMovies />
      <Experience />
    </div>
  );
};

export default Home;
