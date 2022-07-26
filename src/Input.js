import React from "react";

const Input = ({ colorValue, setColorValue }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="color">Add Color Name:</label>
      <input
        id="color"
        type="text"
        autoFocus
        placeholder="Add color name"
        required
        value={colorValue}
        onChange={(e) => setColorValue(e.target.value)}
      />
    </form>
  );
};

export default Input;
