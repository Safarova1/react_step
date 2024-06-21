import React from "react";

const Product = (props) => {
  return (
    <>
      <h2>{props.name}</h2>
      <p>{props.price}</p>
    </>
  );
};

export default Product;
