import swal from "sweetalert";
import useAuth from "../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { deleteMyCart, getMyCart } from "../Api/movie";

const MyCart = () => {
  const { user } = useAuth();
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myCart", user?.email],
    queryFn: () => getMyCart(user?.email),
  });

  const handleDelete = async (idx, name) => {
    const willDelete = await swal({
      title: "Are you sure?",
      text: "Once deleted, it can't be recovered!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });
    if (willDelete) {
      const res = await deleteMyCart(idx);
      if (res.deletedCount > 0) {
        swal(`${name} Deleted!`, {
          icon: "success",
          timer: 2000,
        });
        refetch();
      }
    }
  };

  if(isLoading) return <p>loading ...</p>

  return (
    <div>
      <h1 className="text-2xl text-center my-5 font-semibold">
        Total Cart {data?.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto my-12">
        {data?.map((cart) => (
          <div
            key={cart._id}
            data-aos="zoom-in"
            className="card bg-base-100 shadow-xl"
          >
            <figure>
              <img src={cart.image} alt="cine" className="w-52 pt-5" />
            </figure>
            <div className="card-body px-11 py-5 font-semibold">
              <h2 className="card-title text-2xl">{cart.name}</h2>
              <p>
                <span className="text-green-500">{cart.media}</span>{" "}
                <span className="text-red-500">{cart.media_type}</span>{" "}
              </p>
              <p>
                Price: <span className="text-blue-500">{cart.price}</span> BDT
              </p>
              <p>
                Rating: <span className="text-yellow-700">{cart.rating}</span>
              </p>
              <p>{cart.description}</p>
              <div className="card-actions justify-center">
                <button
                  onClick={() => handleDelete(cart._id, cart.name)}
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Delete from Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
