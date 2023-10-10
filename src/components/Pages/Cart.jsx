import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  // console.log(cart);
  let message;
  if (cart.length === 0) {
    message = <p>Please add some product</p>;
  }
  return (
    <div className="text-center">
      <h2 className="font-bold mb-4"> Order Summary: {cart.length}</h2>
      {message}

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

/**
 * CONDITIONAL RENDERING
 * 1. use if else to set a variable that will contain an element, components
 * */
