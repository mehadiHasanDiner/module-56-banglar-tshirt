import React from "react";

const Friend = ({ ring }) => {
  return (
    <div>
      <h2 className=" text-lg text-center">Friend</h2>
      <h2 className=" text-sm text-center">{ring && <p>Ring: Diamond</p>}</h2>
    </div>
  );
};

export default Friend;
