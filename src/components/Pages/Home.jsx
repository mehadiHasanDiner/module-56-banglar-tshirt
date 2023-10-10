import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TShirt from "./TShirt";
import Cart from "./Cart";
import toast from "react-hot-toast";

const Home = () => {
  const tShirts = useLoaderData();
  // console.log(tShirtData);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (tShirt) => {
    const exists = cart.find((ts) => ts._id === tShirt._id);
    if (exists) {
      toast("You have already added to the cart");
    } else {
      const newCart = [...cart, tShirt];
      setCart(newCart);
      toast("Good Job! Product is added to the cart");
    }
  };

  const handleRemoveFromCart = (id) => {
    const remainingCart = cart.filter((ts) => ts._id !== id);
    setCart(remainingCart);
    toast("Done! Product is removed from cart");
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-3">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tShirts.map((tShirt) => (
            <TShirt
              key={tShirt._id}
              tShirt={tShirt}
              handleAddToCart={handleAddToCart}
            ></TShirt>
          ))}
        </div>
      </div>
      <div>
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
      </div>
    </div>
  );
};

export default Home;
