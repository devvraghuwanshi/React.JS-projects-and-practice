import { useState } from "react"
export default function Counter(){

    const [count , setCount] = useState(0);
    let increaseCount = () => {
        // always use Setter function to update state do not update directly.
        setCount(count+1);
    }


    return(
        <>
           <h1>Counter value is : {count}</h1>
           <button onClick={increaseCount}>Click</button>

        </>
    )
}