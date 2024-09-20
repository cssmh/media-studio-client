import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import AllCategory from "./AllCategory";
import NowPlaying from "../Pages/NowPlaying";
import TopMovies from "./TopMovies";
import Testimonials from "./Testimonials";
import Newsletter from "./Newsletter";
import Experience from "../Pages/Experience";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Star CineMix - Book Your Ticket</title>
      </Helmet>
      <Banner />
      <NowPlaying />
      <Experience />
      <TopMovies />
      <div className="max-w-6xl mx-auto">
        <AllCategory />
      </div>
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
