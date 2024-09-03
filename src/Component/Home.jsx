import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Entertainment from "./Entertainment";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Star CineMix - Book Your Ticket</title>
      </Helmet>
      <Banner />
      <div className="max-w-5xl mx-auto">
        <Entertainment />
      </div>
    </div>
  );
};

export default Home;
