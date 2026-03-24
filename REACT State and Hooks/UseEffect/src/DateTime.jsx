import { useEffect, useState } from "react";

export default function DateTime(){

    let [time,setTime] = useState("");
    let [color,setColor] = useState("Black");
    const handleChange = (e) => {
        setColor(e.target.value);
    }
    useEffect(()=>{
        let timer = setInterval(()=>{
            setTime(new Date());
        },1000);
        return(()=>{
            clearInterval(timer);
        })
    })

    return (
      <>
        <h1>Date and Time</h1>
        <h1 style={{ color: color }}>{time.toLocaleString()}</h1>
        <select name="" id="" onChange={handleChange}>
          <option value="Black">Black</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="orange">Orange</option>
          <option value="blue">Blue</option>
        </select>
      </>
    );
}