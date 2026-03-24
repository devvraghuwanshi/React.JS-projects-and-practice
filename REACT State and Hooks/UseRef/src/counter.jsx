import {useRef,useState} from "react";

export default function Counter(){
    const countRef = useRef(0);
    const [stateCount,setStateCount] = useState(0);
    return (
        <>
        <h2>UseState  Count: {stateCount}</h2>
        <h2>UseRef  Count: {countRef.current}</h2>

        <button onClick={()=>setStateCount(stateCount+1)}>Increase useState Count</button>
        <button onClick={()=>countRef.current++}>Increase useRef count</button>
        </>
    );
}