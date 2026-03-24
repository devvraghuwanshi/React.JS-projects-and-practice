import {useState,useEffect} from "react";


export default function ApiFetch(){
    let [users,setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data));
    },[])

    return(
        <>
        <ol>
            {
                users.map((user)=>(
                    <li key={user.id}>Name: {user.name} and Email: {user.email}</li>
                ))
            }
        </ol>
        </>
    );
}