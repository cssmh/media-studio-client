import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="text-center mt-10">
      <Link to={"/"}>
        <button className="btn bg-green-600 text-white">Back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
