import { useLoaderData, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import SeatSelectionModal from "../Pages/SeatSelectionModal";
import { addCart } from "../Api/movie";

const MovieDetails = () => {
  const { user } = useAuth();
  const loadDetailsData = useLoaderData();
  const { _id, name, image, media, media_type, price, description, rating } =
    loadDetailsData;

  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const navigateTo = useNavigate();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleProceedToCheckout = async (selectedSeats) => {
    if (selectedSeats.length > 0) {
      const dataToDatabase = {
        movie_id: _id,
        name: name,
        image: image,
        price: price,
        user_email: user?.email,
        seats: selectedSeats,
      };

      try {
        const response = await addCart(dataToDatabase);
        if (response?.insertedId) {
          swal("Good job!", `${name} has been added to your cart!`, "success");
          navigateTo("/my-cart");
        }
      } catch (error) {
        console.error("Error adding to cart:", error);
        swal("Oops!", "Something went wrong. Please try again.", "error");
      }
    } else {
      swal("Oops!", "Please select at least one seat.", "warning");
    }
  };

  const BackButton = () => {
    navigateTo(-1);
  };

  return (
    <div className="font-semibold space-y-1 flex flex-col md:flex-row justify-center gap-5 items-center mt-10 mx-2 md:mx-0">
      <img src={image} className="w-64" alt={`${name} photo not found`} />
      <div className="space-y-2 px-12 md:px-0">
        <h1 className="text-3xl">{name}</h1>
        <p>
          <span className="text-green-500 capitalize">{media.replace(/_/g, " ")}</span>{" "}
          <span className="text-red-500">{media_type}</span>
        </p>
        <p>
          Price: <span className="text-blue-500">{price}</span> BDT
        </p>
        <p className="md:w-96">{description}</p>
        <button
          onClick={openModal}
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Choose Your Seat
        </button>
        <br />
        <button
          onClick={BackButton}
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Go Back
        </button>
      </div>
      {showModal && (
        <SeatSelectionModal
          closeModal={closeModal}
          handleProceedToCheckout={handleProceedToCheckout}
        />
      )}
    </div>
  );
};

export default MovieDetails;
