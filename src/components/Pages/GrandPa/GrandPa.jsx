import React, { createContext, useState } from "react";
import Father from "./Father";
import Uncle from "./Uncle";
import Aunty from "./Aunty";
import "./GrandPa.css";

export const RingContext = createContext("Silver");
export const MoneyContext = createContext(0);

const GrandPa = () => {
  const [money, setMoney] = useState(0);

  const ring = "Diamond";
  return (
    <div className="grandpa">
      <h2 className="font-bold text-xl text-center mb-4">
        Grandpa (Context API)
      </h2>
      <h2 className="font-bold text-lg text-center mb-4">Has Money: {money}</h2>
      <MoneyContext.Provider value={[money, setMoney]}>
        <RingContext.Provider value="Golden Ring">
          <section className="flex-container">
            <Father ring={ring}></Father>
            <Uncle></Uncle>
            <Aunty ring={ring}></Aunty>
          </section>
        </RingContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default GrandPa;

/**
 *  1. create a context and export.
 *  2. create a provider and pass a value
 *  3. use useContext to receive the value
 * */
