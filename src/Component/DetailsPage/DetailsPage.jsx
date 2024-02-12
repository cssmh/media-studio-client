import { useLoaderData } from "react-router-dom";
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
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(dataToDatabase),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          swal("Good job!", `${name} added to cart`, "success");
        }
      });
  };

  return (
    <div className="font-semibold space-y-1 flex justify-center gap-5 items-center mt-10">
      <img src={image} className="w-64" alt={`${name} photo not found`} />
      <div>
        <h1 className="text-2xl">{name}</h1>
        <p>{price} BDT</p>
        <p>{description}</p>
        <button
          onClick={handleAddCart}
          className="btn mt-1 bg-green-500 text-white"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DetailsPage;
