import PropTypes from "prop-types";
import swal from "sweetalert";
const MyCartCard = ({ getCart, cart, setCart }) => {
  const { _id, name, image, media, media_type, price, description, rating } =
    getCart;

  const handleDelete = (idx) => {
    swal({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        // main code
        fetch(`http://localhost:5000/cart/${idx}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              const remaining = cart.filter((solo) => solo._id !== idx);
              setCart(remaining);
              swal(`${name} deleted from Cart!`, {
                icon: "success",
              });
            }
          });
        // main code end here
      } else {
        swal("Your file is safe!");
      }
    });
  };

  return (
    <div data-aos="zoom-out-up" className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="cine" className="w-52 pt-5" />
      </figure>
      <div className="card-body px-11 py-5 font-semibold">
        <h2 className="card-title text-2xl">{name}</h2>
        <p>
          <span className="text-green-500">{media}</span>{" "}
          <span className="text-red-500">{media_type}</span>{" "}
        </p>
        <p>
          Price: <span className="text-blue-500">{price}</span> BDT
        </p>
        <p>
          Rating: <span className="text-yellow-700">{rating}</span>
        </p>
        <p>{description}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-green-500 hover:bg-green-500 text-white"
          >
            Delete from Cart
          </button>
        </div>
      </div>
    </div>
  );
};

MyCartCard.propTypes = {
  getCart: PropTypes.object,
  cart: PropTypes.array,
  setCart: PropTypes.func,
};

export default MyCartCard;
