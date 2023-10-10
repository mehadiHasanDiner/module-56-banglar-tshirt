import React, { useContext } from "react";
import Cousin from "./Cousin";
import { MoneyContext } from "./GrandPa";

const Uncle = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2 className=" text-lg text-center">Uncle</h2>
      <h2 className=" text-sm text-center">GrandPa Money: {money}</h2>
      <button onClick={() => setMoney(money + 1000)} className="btn-style">
        Send 1000tk
      </button>
      <section className="flex-container">
        <Cousin>Nabil</Cousin>
        <Cousin>Nabila</Cousin>
      </section>
    </div>
  );
};

export default Uncle;
