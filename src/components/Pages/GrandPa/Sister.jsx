import React, { useContext } from "react";
import { MoneyContext } from "./GrandPa";

const Sister = () => {
  const [money] = useContext(MoneyContext);
  return (
    <div>
      <h2 className=" text-lg text-center">Sister</h2>
      <h2 className=" text-md text-center">Grandpa Money: {money}</h2>
    </div>
  );
};

export default Sister;
