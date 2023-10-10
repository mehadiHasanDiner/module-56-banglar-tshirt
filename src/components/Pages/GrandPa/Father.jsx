import React from "react";
import Myself from "./Myself";
import Sister from "./Sister";
import Brother from "./Brother";

const Father = ({ ring }) => {
  return (
    <div>
      <h2 className=" text-lg text-center">Father</h2>
      <section className="flex-container">
        <Myself ring={ring}></Myself>
        <Sister></Sister>
        <Brother></Brother>
      </section>
    </div>
  );
};

export default Father;
