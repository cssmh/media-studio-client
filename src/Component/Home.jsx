import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Entertainment from "./Entertainment";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>CineMix - Gateway to Movie Magic</title>
      </Helmet>
      <Banner />
      <div className="max-w-5xl mx-auto">
        <Entertainment />
      </div>
    </div>
  );
};

export default Home;
