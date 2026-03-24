import {useContext} from "react";
import { UserContext } from "./UserContext";
export default function Child(){
    let {user,age} = useContext(UserContext);
    return(
        <h1>Your name is {user} and you are {age} years old.</h1>
    );
}