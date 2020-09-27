import React, { useState } from "react";

const Input = ({ addName }) => {
  const [name, setInput] = useState("");
  // make change only after button click
  const handleSubmit = (e) => {
    e.preventDefault();
    addName(name);
    setInput("");
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          placeholder="Place your name"
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="submit" value="Add name" />
      </form>
    </div>
  );
};

export default Input;
