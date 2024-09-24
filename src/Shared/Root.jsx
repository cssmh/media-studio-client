import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import ErrorPage from "../Component/ErrorPage";
import Home from "../Component/Home";
import PrivateRoute from "./PrivateRoute";
import AddProduct from "../Component/AddProduct";
import CineUpdate from "../Component/CineUpdate";
import MovieDetails from "../Component/MovieDetails";
import MyProfile from "../Component/MyProfile";
import AllMovies from "../Pages/AllMovies";
import ShowTime from "../Pages/ShowTime";
import TopRated from "../Pages/TopRated";
import MyBookings from "../Pages/MyBookings";
import { getMovieDetails } from "../Api/movie";

const Root = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/all-movies",
        element: (
          <PrivateRoute>
            <AllMovies />
          </PrivateRoute>
        ),
      },
      { path: "/show-time", element: <ShowTime /> },
      { path: "/top-rated", element: <TopRated /> },
      {
        path: "/my-bookings",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-movie",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <CineUpdate />
          </PrivateRoute>
        ),
        loader: ({ params }) => getMovieDetails(params.id),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <MovieDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => getMovieDetails(params.id),
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Root;
