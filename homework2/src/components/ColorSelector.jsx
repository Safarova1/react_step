import React from "react";

const ColorSelector = ({ colors }) => {
  return (
    <>
      <select
        onChange={(e) =>
          (document.getElementById("selector").style.backgroundColor =
            e.target.value)
        }
      >
        {colors.map((color, index) => (
          <option key={index}>{color}</option>
        ))}
      </select>
      <div id="selector"></div>
    </>
  );
};

export default ColorSelector;
