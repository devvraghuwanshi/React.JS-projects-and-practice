import { useState } from "react";

// State - State is a data that changes over time in components.
// State is mutable and dynamic.
// re-renders component automatically so that data can be visible on ai

// SYNTAX - const [state,setState] = useState(initialValue);
// state - current state.
// setState - function to update state. 
// initial value - value givin initially to hook.

export default function FruitSet() {
  let [fruit, setFruit] = useState("Orange");
  let changeFruit = () => {
    setFruit("Kiwi");
  };
  return (
    <div>
      <h1>Fruit name is {fruit}</h1>
      <button onClick={changeFruit}>Change Fruit</button>
    </div>
  );
}
