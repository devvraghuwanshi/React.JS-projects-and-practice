import { useReducer } from "react";

// Reducer Function -
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "RESET":
      return { count: 0 };

    default:
      return state;
  }
}

export default function UseReducer() {
  //SYNTAX - const [state,dispatch] = useReducer(reducer,initialState);
  // reducer - function that handles state logic
  // initialState - starting value
  // state - current State
  // dispatch - function to update state.
  let [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <h1>Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
    </>
  );
}
