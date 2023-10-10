import React from "react";

const TShirt = ({ tShirt, handleAddToCart }) => {
  //   console.log(tShirt);
  const { name, picture, price, id } = tShirt;
  return (
    <>
      <div className="border-4 border-white w-full p-2 rounded-lg overflow-hidden relative transition duration-200 transform hover:-translate-y-2 shadow-xl hover:shadow-2xl">
        <img
          className="object-cover w-full h-56 md:h-64 xl:h-80"
          src={picture}
          alt="t-shirt img"
        />
        <div className="text-center px-6 py-4 bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col">
          <p className="text-2xl font-bold">{name}</p>
          <br />
          <p>Price: ${price}</p>
          <br />

          <button
            className="bg-transparent hover:bg-white text-gray-400 font-semibold hover:text-black py-2 px-4 border border-gray-300 hover:border-transparent rounded mt-auto"
            onClick={() => handleAddToCart(tShirt)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default TShirt;
