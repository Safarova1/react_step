import React from "react";

const ProductCard = (props) => {
  return (
    <>
      <img src={props.imageUrl} alt="laptop" />
      <h3>{props.title}</h3>
      <span>{props.price}</span>
      <p>{props.description}</p>
    </>
  );
};

export default ProductCard;
