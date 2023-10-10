import React, { useContext } from "react";
import { RingContext } from "./GrandPa";

const Special = ({ ring }) => {
  const Angti = useContext(RingContext);
  return (
    <div>
      <h2 className=" text-lg text-center">Special</h2>
      <h2 className=" text-sm text-center">Ring: {Angti}</h2>
    </div>
  );
};

export default Special;
