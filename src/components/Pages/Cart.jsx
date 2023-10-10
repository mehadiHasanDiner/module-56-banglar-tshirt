import React from "react";
import "./PageStyles.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  // console.log(cart);

  {
    /*1. if or if else (conditional rendering)*/
  }
  let message;
  if (cart.length === 0) {
    message = <p>Please add some product</p>;
  } else {
    {
      /* 2. using ternary css in template string*/
    }
    message = (
      <div
        className={`font-bold ${
          cart.length === 1 ? "text-green-500" : "text-blue-500"
        }`}
      >
        Thanks!! for buying product
      </div>
    );
  }
  return (
    <div className="text-center">
      {/* 1. using ternary in css*/}
      <h2
        className={
          cart.length === 1
            ? "font-bold bg-green-500 mb-4"
            : "font-bold bg-sky-500 mb-4"
        }
      >
        {" "}
        Order Summary: {cart.length}
      </h2>
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
      {/*2. ternary operator*/}
      {cart.length >= 2 ? (
        <span>Aro kino</span>
      ) : (
        <span>2 tar kom kinle tumi fokira</span>
      )}{" "}
      {/*3. Logical && */}
      {cart.length === 2 && <p>Double bonanza</p>}
      {/*4. Logical || */}
      {cart.length === 3 || <p>Tinta product kino</p>}
    </div>
  );
};

export default Cart;

/**
 * CONDITIONAL RENDERING
 * 1. use if or if else to set a variable that will contain an element, components
 * 2. ternary operator: condition ? 'for true' : 'for false'.
 * 3. Logical &&: (it the condition is true then the next thing will be displayed/true)
 * 4. Logical ||: (if the condition is false then the next thing will be displayed/false)
 * */

/**
 * CONDITIONAL CSS CLASS
 * 1. use ternary
 * 2. use ternary inside template string
 * */
