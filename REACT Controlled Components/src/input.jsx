import { useState } from "react";

export default function Input(){
    let [name,setName] = useState("");
    const handelName = (e) =>{
        setName(e.target.value);
    }
    return(
        <>
        <label htmlFor="">Enter Your Name: </label>
        <input type="text" name="name" id="" value={name} onChange={handelName}/>
        <button onClick={()=>{setName("")}}>Clear</button>
        <h1>Your Name is : {name}</h1>
        </>
    )
}