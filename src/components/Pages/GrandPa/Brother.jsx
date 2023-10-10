import React, { useContext } from "react";
import { RingContext } from "./GrandPa";

const Brother = () => {
  const ring = useContext(RingContext);
  return (
    <div>
      <h2 className=" text-lg text-center">Brother</h2>
      <h2 className=" text-sm text-center">Ring : {ring}</h2>
    </div>
  );
};

export default Brother;
