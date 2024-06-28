import React from "react";
import Loader from "react-loader-spinner";

const LoaderSpinner = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Loader type="Loader" color="#3f51b5" height={50} width={50} />
    </div>
  );
};

export default LoaderSpinner;
