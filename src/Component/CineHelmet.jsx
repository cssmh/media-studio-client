import { Helmet } from "react-helmet-async";

const CineHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | BookHaven</title>
    </Helmet>
  );
};

export default CineHelmet;
