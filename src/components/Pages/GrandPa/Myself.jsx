import React from "react";
import Special from "./Special";

const Myself = ({ ring }) => {
  return (
    <div>
      <h2 className=" text-lg text-center">Myself</h2>
      <Special ring={ring}></Special>
    </div>
  );
};

export default Myself;
