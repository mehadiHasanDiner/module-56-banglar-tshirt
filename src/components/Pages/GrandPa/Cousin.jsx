import React from "react";
import Friend from "./Friend";

const Cousin = ({ children, hasFriend, ring }) => {
  return (
    <div>
      <h2 className=" text-lg text-center">Cousin</h2>
      <p className=" text-sm text-center">{children}</p>
      {hasFriend && <Friend ring={ring}></Friend>}
    </div>
  );
};

export default Cousin;
