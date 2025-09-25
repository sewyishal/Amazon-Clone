import React from "react";
import { BeatLoader } from "react-spinners";
const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <BeatLoader />
    </div>
  );
};

export default Loader;
