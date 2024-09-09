import { useState } from "react";
import swal from "sweetalert";
import useAuth from "../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { deleteMyCart, getMyCart } from "../Api/movie";

const Checkout = () => {
  const { user } = useAuth();
  const [selectedItems, setSelectedItems] = useState([]);

  // Fetch user's cart items
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myCart", user?.email],
    queryFn: () => getMyCart(user?.email),
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
      const res = await deleteMyCart(id);
      if (res.deletedCount > 0) {
        swal(`${name} Deleted!`, { icon: "success", timer: 2000 });
        refetch();
      }
    }
  };

  const handleCheckboxChange = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const handleProceedToPayment = () => {
    if (selectedItems.length > 0) {
      // Navigate to the payment page with the selected items
      swal("Success!", "Proceeding to Payment", "success");
      // Navigate to the payment page, sending the selected items data
      // navigate("/payment", { state: { selectedItems } });
    } else {
      swal("Oops!", "Please select at least one item to proceed.", "warning");
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <h1 className="text-2xl text-center my-5 font-semibold">
        Total Cart Items: {data.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-base-200">
          <thead className="bg-base-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-base-500 uppercase tracking-wider">
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
              <th className="px-6 py-3 text-left text-xs font-medium text-base-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-base-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-base-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-base-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-base-200">
            {data.map((cart) => (
              <tr key={cart._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(cart._id)}
                    onChange={() => handleCheckboxChange(cart._id)}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={cart.image}
                    alt="cine"
                    className="w-20 h-20 object-cover"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-base-900">
                    {cart.name}
                  </div>
                  <p className="text-sm text-base-500">
                    <span className="text-green-500">{cart.media}</span>
                    <span className="text-red-500">{cart.media_type}</span>
                  </p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-base-900">{cart.price} BDT</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleDelete(cart._id, cart.name)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={handleProceedToPayment}
          disabled={selectedItems.length === 0}
          className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
            selectedItems.length === 0
              ? "bg-base-400 cursor-not-allowed"
              : "bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          }`}
        >
            
        </button>
      </div>
    </div>
  );
};

export default Checkout;
