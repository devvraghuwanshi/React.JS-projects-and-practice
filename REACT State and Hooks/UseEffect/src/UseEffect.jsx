import {useState,useEffect} from "react";

export default function UseEffect(){
 
    let [count,setCount] = useState(0);
    let [double,setDouble] =  useState(0);

    // useEffect - used for side effects : API Calls,Timers,DOM updates.
    // SYNTAX - useEffect(()=>{
    //        Side effect code
    //  return() => {
    //       cleanUp code  (memory space release)
    //  };
    // 
    // },[dependencies]);

    // Different values of Dependencies.

    // [] - Run once (on mount).
    useEffect(()=>{
        console.log("this will execute once");
    },[]);

    // [state/value] - Run when value/state changes.
    useEffect(()=>{
        console.log("Render on state change")
    },[count]);

    // no array - Run every render.
    useEffect(()=>{
        console.log("Run every render");
    });




    return(

        <>
        <h1>Count: {count}</h1>
        <h1>Double: {double}</h1>
        <button onClick={()=>(setCount(count+1))}>Increament by 1</button>
        <button onClick={()=>(setDouble(double+2))}>Increament by 2</button>
        </>
    );
}