// ------------------------
//    Parent Component
// ------------------------

import UserCard from "./userCard";

export default function App(){
  let name = "Dev";
  let age = 21;
  const user = {city:"Indore",job:"Web Developer"};
  const skills = ["HTML" , "CSS" , "JS" , "Bootstrap" , "REACT"];

  const greetUser = (username) =>{
    alert("Hello" + username + "!");

  };

  return(
    <div>
      <h1>Full Props Example in React:</h1>

      <UserCard 
      name={name} age={age} userObj={user} isActive={true} skills={skills} greetFunction={greetUser}>
        {/* Child content passed inside parent component */}
        <p>this is inner content passed using props.children</p>
        <p>you can put any jsx here.</p>

      </UserCard>
    </div>
  )
}