import { useState } from "react";
export default function MultipleConditions(){
    let [count ,setCount] = useState(0);

    return(
        <>
        <h1>Counter : {count}</h1>
        <button onClick={()=> setCount(count+1)}>Increase</button>
        {
            count==1? <h1>Counter value is 1</h1>:
            count==2? <h1>Counter value is 2</h1>:
            count==3? <h1>Counter value is 3</h1>:
            <h1>Default case</h1>
        }
        
        </>
    );
}