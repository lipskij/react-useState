import React, { useState } from "react";

const Input = () => {
  const [name, setInput] = useState("");
  const [istrue, setIstrue] = useState(false);

  // function handleClick() {
  //   return setIstrue(true)
  // }

  return (
    <div>
      <form>
        <label>
          Name
          <input type="text" placeholder="name" onChange={e => setInput(e.target.value)}/>
        </label>
        <button type="submit" onClick={(event) => {event.preventDefault(); setIstrue(true)}}>Click</button>
      </form>
      {istrue ? <p> Your name: {name}</p> : ""}
    </div>
  );
};

export default Input;
