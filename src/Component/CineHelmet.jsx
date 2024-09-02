import { Helmet } from "react-helmet-async";

const CineHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | CineMix</title>
    </Helmet>
  );
};

export default CineHelmet;
