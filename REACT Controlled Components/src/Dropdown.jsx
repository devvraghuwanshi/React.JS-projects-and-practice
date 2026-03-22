import { useState } from "react";

export default function Courses(){
    let [course,setCourse] = useState("");
    const handelCourse = (e) => {
        setCourse(e.target.value);
    }
    return(
        
        <>
        <label htmlFor="">Courses</label>
        <select name="" id="" onChange={handelCourse}>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JS">JS</option>
            <option value="BootStrap">BootStrap</option>
            <option value="React">REACT</option>
        </select>
        <h1>you have selected {course}</h1>
        </>
    )
}