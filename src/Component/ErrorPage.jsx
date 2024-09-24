import { Link } from "react-router-dom";
import { AiOutlineWarning } from "react-icons/ai";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-800 to-blue-600 text-white">
      <div className="rounded-lg shadow-2xl p-8 md:p-12 text-center">
        <AiOutlineWarning className="text-8xl text-red-500 mb-4 animate-pulse" />
        <h1 className="text-5xl font-bold mb-4">Oops! Something went wrong.</h1>
        <p className="text-lg mb-8">
          The page you are looking for does not exist or an error occurred.
        </p>
        <Link to="/">
          <button className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-105">
            Back to Home
          </button>
        </Link>
        <p className="mt-4 text-sm text-gray-300">
          If the problem persists, please contact support.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
