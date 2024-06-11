import React from "react";

const Adder = (props) => {
  return <>
   <h1>Adder</h1>
   <p>{props.num1} + {props.num2} = {props.num1 + props.num2} </p>
   </>;
};

export default Adder;
