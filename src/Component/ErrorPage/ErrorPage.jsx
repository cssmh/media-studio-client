import { Link } from "react-router-dom";
import error from "../../assets/404.gif";
const ErrorPage = () => {
  return (
    <div>
      <div className="text-center mt-10">
        <Link to={"/"}>
          <button className="btn bg-green-600 text-white">Back to Home</button>
        </Link>
      </div>
      <img src={error} className="mx-auto" alt="" />
    </div>
  );
};

export default ErrorPage;
