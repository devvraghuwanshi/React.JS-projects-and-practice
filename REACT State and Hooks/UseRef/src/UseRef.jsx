import { useRef } from "react";

export default function UseRef() {
  let inputRef = useRef(null); //Creates a Ref
  const handleFocus = () => {
    inputRef.current.focus(); //gives direct access to the input element;
    inputRef.current.style.backgroundColor = "Red";
    inputRef.current.style.Color = "White";
  };
  return (
    <>
      <label htmlFor="name">Enter Your Name: </label>
      <input type="text" name="" id="name" ref={inputRef} />  {/*Connects inputRef to input*/}
      <button onFocus={handleFocus}>Focus</button>
    </>
  );
}
