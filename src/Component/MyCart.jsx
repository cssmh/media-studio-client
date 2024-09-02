import { useLoaderData } from "react-router-dom";
import MyCartCard from "./MyCartCard";
import { useState } from "react";

const MyCart = () => {
  const loadCartData = useLoaderData();
  const [cart, setCart] = useState(loadCartData);
  return (
    <div>
      <h1 className="text-2xl text-center my-5 font-semibold">
        Total Cart {cart.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto my-12">
        {cart.map((soloCart) => (
          <MyCartCard
            key={soloCart._id}
            getCart={soloCart}
            cart={cart}
            setCart={setCart}
          ></MyCartCard>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
