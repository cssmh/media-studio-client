import { useState } from "react";
import swal from "sweetalert";
import useAuth from "../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { addPayment, deleteMyBooking, getMyBookings } from "../Api/movie";
import Loader from "../Component/Loader";

const MyBookings = () => {
  const { user } = useAuth();
  const [selectedItems, setSelectedItems] = useState([]);

  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myBookings", user?.email],
    queryFn: () => getMyBookings(user?.email),
  });

  const handleDelete = async (id, name) => {
    const willDelete = await swal({
      title: "Are you sure?",
      text: "Once deleted, it can't be recovered!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });
    if (willDelete) {
      const res = await deleteMyBooking(id);
      if (res.deletedCount > 0) {
        swal(`${name} Deleted!`, { icon: "success", timer: 2000 });
        refetch();
      } else {
        swal("Error!", "Could not delete the booking.", "error");
      }
    }
  };

  const handleCheckboxChange = (itemId) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(itemId)
        ? prevSelected.filter((id) => id !== itemId)
        : [...prevSelected, itemId]
    );
  };

  const handleProceedToPayment = async () => {
    if (selectedItems.length === 0) {
      return swal(
        "Oops!",
        "Please select at least one item to proceed.",
        "warning"
      );
    }

    try {
      const response = await addPayment(selectedItems);
      if (response.modifiedCount > 0) {
        swal("Success!", "Payment successful.", "success");
        refetch();
      } else {
        swal("Error!", "Payment failed. Please try again.", "error");
      }
    } catch (error) {
      console.error("Error updating payment status:", error);
      swal("Error!", "Payment error. Please try again.", "error");
    }
  };

  const isPaymentSuccessful = (paymentStatus) => paymentStatus === "success";

  const calculateTotalAmount = () => {
    return data.reduce((total, item) => {
      if (
        selectedItems.includes(item._id) &&
        !isPaymentSuccessful(item.payment)
      ) {
        return total + parseFloat(item.price) * item.seats.length;
      }
      return total;
    }, 0);
  };

  if (isLoading) return <Loader />

  const totalAmount = calculateTotalAmount();

  return (
    <div className="max-w-7xl mx-auto mt-4">
      <h1 className="text-xl text-center mb-3 font-semibold">
        Total Booking Items: {data.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-base-200">
          {/* <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wider">
                <input
                  type="checkbox"
                  onChange={() => {
                    if (selectedItems.length === data.length) {
                      setSelectedItems([]);
                    } else {
                      setSelectedItems(data.map((item) => item._id));
                    }
                  }}
                  checked={selectedItems.length === data.length}
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Seat Count
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Total
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Payment Status
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead> */}
          <tbody className="divide-y divide-base-200">
            {data.map((booking) => (
              <tr
                key={booking._id}
                className="hover:bg-gray-100 transition-colors"
              >
                <td className="px-3 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(booking._id)}
                    onChange={() => handleCheckboxChange(booking._id)}
                    disabled={isPaymentSuccessful(booking.payment)}
                  />
                </td>
                <td className="py-4 whitespace-nowrap">
                  <img
                    src={booking.image}
                    alt="cine"
                    className="w-20 h-20 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {booking.name}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {parseFloat(booking.price) * booking.seats.length} BDT
                </td>
                <td className="px-10 py-4 whitespace-nowrap text-sm text-gray-900">
                  Total {booking.seats.length}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {parseFloat(booking.price) * booking.seats.length} BDT
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  {isPaymentSuccessful(booking.payment) ? (
                    <span className="text-green-600">Payment Successful</span>
                  ) : (
                    <span className="text-red-600">Pending</span>
                  )}
                </td>
                <td className="px-5 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleDelete(booking._id, booking.name)}
                    className={`text-red-600 hover:text-red-900 ${
                      isPaymentSuccessful(booking.payment)
                        ? "cursor-not-allowed"
                        : ""
                    }`}
                    disabled={isPaymentSuccessful(booking.payment)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-8">
        <div className="text-lg font-semibold">
          Total Amount: {totalAmount} BDT
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleProceedToPayment}
            disabled={
              selectedItems.length === 0 ||
              data.every((item) => isPaymentSuccessful(item.payment))
            }
            className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
              selectedItems.length === 0 ||
              data.every((item) => isPaymentSuccessful(item.payment))
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300"
            }`}
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
