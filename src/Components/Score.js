import React, { useState } from "react";
import Input from "./Input";

const Score = () => {
  const [count, setCount] = useState(0);
  const [names, setNames] = useState([{ name: "hey", id: 0 }]);

  

  const addName = (name) => {
    setNames([...names, { name, id: names }]);
  };

  return (
    <div>
      <p>You score is {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>

      <Input addName={addName} />
      <div>
        <ul>
          {names.map((name) => {
            return <li key={name.id}>{name.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Score;
