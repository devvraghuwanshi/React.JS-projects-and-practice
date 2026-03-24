import {useState,useEffect} from "react"

export default function Timer(){
    let [count,setCount] = useState(0);
    useEffect(()=>{
        const timer = setInterval(()=>{
            setCount(prev => prev + 1);
        },1000);
        return()=>{
            clearInterval(timer);
        } 
    },[]);

    return(
        <>
        <h1>Timer: {count}</h1>
        </>
    )
}