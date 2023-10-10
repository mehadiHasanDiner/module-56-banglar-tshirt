import React from "react";
import Cousin from "./Cousin";

const Aunty = ({ ring }) => {
  return (
    <div>
      <h2 className=" text-lg text-center">Aunty</h2>
      <section className="flex-container">
        <Cousin>Abir</Cousin>
        <Cousin hasFriend={true} ring={ring}>
          Nibir
        </Cousin>
      </section>
    </div>
  );
};

export default Aunty;
