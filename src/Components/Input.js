import React, { useState } from "react";

const Input = () => {
  const [name, setInput] = useState("");
  // make change only after button click
  return (
    <div>
      <form>
        <label>
          Name
          <input
            type="text"
            placeholder="Place your name"
            onChange={e => setInput(e.target.value)}
          />
        </label>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            console.log("clicked");
            setInput("")
          }}
        >
          Click
        </button>
      </form>
      <h2>Your name: {name}</h2>
    </div>
  );
};

export default Input;
