import { useState } from "react";

export default function Feedback() {
  let [msg, setMessage] = useState("");
  let [color, setColor] = useState("green");
  const MAX_LENGTH = 100;
  const handleLength = (event) => {
    setMessage(event.target.value);
    if (msg.length > MAX_LENGTH) {
      setColor("red");
    } else {
      setColor("green");
    }
  };
  return (
    <>
      <h1>Enter Your Feedback</h1>
      <textarea
        name=""
        id=""
        cols="30"
        rows="5"
        placeholder="Max Length 100 Characters"
        style={{ color: color }}
        onKeyDown={handleLength}
      ></textarea>
    </>
  );
}
