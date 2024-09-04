import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Entertainment from "./Entertainment";
import Services from "./Services";
import LatestMovies from "../Pages/LatestMovies";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Star CineMix - Book Your Ticket</title>
      </Helmet>
      <Banner />
      <Services />
      <LatestMovies />
      <div className="max-w-6xl mx-auto">
        <Entertainment />
      </div>
    </div>
  );
};

export default Home;
