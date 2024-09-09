import { useState } from "react";

const SeatSelectionModal = ({ closeModal, handleProceedToCheckout }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seats = [
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "B1",
    "B2",
    "B3",
    "B4",
    "B5",
    "C1",
    "C2",
    "C3",
    "C4",
    "C5",
  ];

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-full md:w-1/2 space-y-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Choose Your Seats
        </h2>
        <div className="grid grid-cols-5 gap-3">
          {seats.map((seat) => (
            <button
              key={seat}
              className={`p-2 rounded-md font-medium ${
                selectedSeats.includes(seat)
                  ? "bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => handleSeatClick(seat)}
            >
              {seat}
            </button>
          ))}
        </div>
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={() => handleProceedToCheckout(selectedSeats)}
            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Proceed to Checkout
          </button>
          <button
            onClick={closeModal}
            className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeatSelectionModal;
