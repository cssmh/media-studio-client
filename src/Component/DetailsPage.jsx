import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const DetailsPage = () => {
  const loadDetailsData = useLoaderData();
  //   console.log(loadDetailsData);
  const { name, image, media, media_type, price, description, rating } =
    loadDetailsData;
  // if i sent loadDetailsData to database, it will send its id also that will be same $ i won't be able add duplicate. Thats why i send dataToDatabase which don't have id. database gonna gave it unique id.
  const dataToDatabase = {
    name: name,
    image: image,
    media: media,
    media_type: media_type,
    price: price,
    description: description,
    rating: rating,
  };
  const handleAddCart = () => {
    // using axios method
    axios.post("http://localhost:5000/cart", dataToDatabase).then((data) => {
      if (data.data.insertedId) {
        swal("Good job!", `${name} added to cart`, "success");
      }
    });
  };

  const navigateTo = useNavigate();
  const BackButton = () => {
    navigateTo(-1);
  };

  return (
    <div className="font-semibold space-y-1 flex flex-col md:flex-row justify-center gap-5 items-center mt-10 mx-2 md:mx-0">
      <img src={image} className="w-64" alt={`${name} photo not found`} />
      <div className="space-y-2 px-12 md:px-0">
        <h1 className="text-3xl">{name}</h1>
        <p>
          <span className="text-green-500">{media}</span>{" "}
          <span className="text-red-500">{media_type}</span>{" "}
        </p>
        <p>
          Price: <span className="text-blue-500">{price}</span> BDT
        </p>
        <p className="md:w-96">{description}</p>
        <button
          onClick={handleAddCart}
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Add to Cart
        </button>
        <br></br>
        <button
          onClick={BackButton}
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default DetailsPage;
