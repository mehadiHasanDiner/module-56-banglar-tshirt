import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  console.log(cart);
  return (
    <div className="text-center">
      <h2 className="font-bold"> Order Summary: {cart.length}</h2>
      {cart.map((tshirt) => (
        <p
          key={tshirt._id}
          className="flex items-center my-2 font-bold text-md"
        >
          {tshirt.name}{" "}
          <button
            className="bg-transparent hover:bg-red-600 text-red-400 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded ml-auto"
            onClick={() => handleRemoveFromCart(tshirt._id)}
          >
            Remove
          </button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
