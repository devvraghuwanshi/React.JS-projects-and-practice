import { useState } from "react";

export default function Form() {
    let [name,setName] = useState("");
    let [rollnumber,setRollnumber] = useState("");
    let [course,setCourse] = useState("");
    let handelForm = (e) => {
        e.preventDefault();
        alert(`Name : ${name} // RollNumber : ${rollnumber} // Course: ${course}`);
    }
  return (
    <>
      <form action="" onSubmit={handelForm}>
        <caption>User Details:</caption>
        <label htmlFor="">Name: </label>
        <input type="text" name="" id="" value={name} onChange={(e)=>{setName(e.target.value)}} />
        <br />
        <br />
        <label htmlFor="">Roll Number: </label>
        <input
          type="text"
          name=""
          id=""
          value={rollnumber}
          onChange={(e)=>{setRollnumber(e.target.value)}}
        />
        <br />
        <br />
        <label htmlFor="">Courses: </label>
        <input type="text" name="" id="" value={course} onChange={(e)=>{setCourse(e.target.value)}} />
        <br />
        <br />
        <input type="submit" value="submit" />
      </form>

      <h1>Your Details are:</h1>
      <h1>Name : {name}</h1>
      <h1>Roll Number : {rollnumber}</h1>
      <h1>Course : {course}</h1>
    </>
  );
}
