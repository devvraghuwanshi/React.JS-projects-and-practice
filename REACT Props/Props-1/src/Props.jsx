// Props(properties) - Props are arguments passed to react component.

// Passing Props:
// Child Component.
export function Greeting(props) {
  return <h1> Hello! {props.name}!</h1>;
}

// Props Destructuring - Destructuring makes your code cleaner by extracting props directly in the function parameters:
export function Details({ name, age }) {
  return (
    <>
      <h1>this is youe name : {name}</h1>
      <h1>this is your age : {age}</h1>
    </>
  );
}

// Default Props :
export function Default({ text = "Click Me", color = "grey" }) {
  return <button style={{ backgroundColor: color }}>{text}</button>;
}

// Props children - children is a special prop that contains whatever you put between the opening and closing tags of a component.

export function Card({ children }) {
  return (
    <div className="card" style={{border:"2px solid black",padding:"20px"}}>{children}</div>
  );
}
