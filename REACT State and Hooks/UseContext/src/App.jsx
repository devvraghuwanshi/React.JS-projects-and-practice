import { UserContext } from "./UserContext";
import {useState} from "react";
import Child from "./child";

export default function App(){
  
  let [user,setUser] = useState("DEV")
  let [age,setAge] = useState(20);
  return(
    <>
    <UserContext.Provider value={{user,age}}>
      <button onClick={() => setUser("Raj")}>Change Name:</button>
      <Child/>
    </UserContext.Provider>
    </>
  );
}