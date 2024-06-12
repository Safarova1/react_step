import React, { Component } from "react";

const FeedbackOptions = ({ goodClick, neutralClick, badClick }) => (
  
  
  <>
    <button onClick={goodClick}>Good</button>
    <button onClick={neutralClick}>Neutral</button>
    <button onClick={badClick}>Bad</button>
  </>
);
export default FeedbackOptions;
