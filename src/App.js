import React from "react";
import Score from "./Components/Score";
import Input from "./Components/Input";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Score />
      <h3>
        <Input />
      </h3>
    </div>
  );
}

export default App;
