import React, { Component } from "react";

const Statistics = ({ good, neutral, bad, total, positive }) => (
  <>
  
    <p>
      Good: <span>{good}</span>
    </p>
    <p>
      Neutral: <span>{neutral}</span>
    </p>
    <p>
      Bad: <span>{bad}</span>
    </p>
    <p>
      Total: <span>{total}</span>
    </p>
    <p>
      Positive: <span>{positive}%</span>
    </p>
  </>
);

export default Statistics;
