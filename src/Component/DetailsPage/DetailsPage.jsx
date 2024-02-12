import { useLoaderData } from "react-router-dom";

const DetailsPage = () => {
  const loadDetailsData = useLoaderData();
  //   console.log(loadDetailsData);
  const { name, image, price, description } = loadDetailsData;
  const handleAddCart = () => {
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loadDetailsData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
