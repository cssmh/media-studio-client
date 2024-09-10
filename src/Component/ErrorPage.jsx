import { Link } from "react-router-dom";
import { AiOutlineWarning } from "react-icons/ai";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <div className="text-center p-6 md:p-12">
        <AiOutlineWarning className="text-6xl text-red-500 mb-4 animate-pulse" />
        <h1 className="text-4xl font-bold mb-2">Oops! Something went wrong.</h1>
        <p className="text-lg mb-6">
          The page you are looking for does not exist or an error occurred.
        </p>
        <Link to="/">
          <button className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-600 transition duration-300">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
