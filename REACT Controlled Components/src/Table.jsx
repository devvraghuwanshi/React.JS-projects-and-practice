import { useState } from "react";

export default function Table(){

    const students = [
      {
        id: 101,
        name: "Aarav Sharma",
        age: 19,
        grade: "A",
        city: "Indore",
        isActive: true,
      },
      {
        id: 102,
        name: "Priya Patel",
        age: 18,
        grade: "A+",
        city: "Bhopal",
        isActive: true,
      },
      {
        id: 103,
        name: "Rahul Verma",
        age: 20,
        grade: "B",
        city: "Indore",
        isActive: true,
      },
      {
        id: 104,
        name: "Sneha Gupta",
        age: 19,
        grade: "B+",
        city: "Jabalpur",
        isActive: false,
      },
      {
        id: 105,
        name: "Vikram Singh",
        age: 19,
        grade: "A",
        city: "Ujjain",
        isActive: true,
      },
    ];

    return (
      <>
        <table>
          <caption>
            <h1>Student Details</h1>
          </caption>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>GRADE</th>
              <th>CITY</th>
              <th>isActive</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr>
                <td key={student.id}>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.grade}</td>
                <td>{student.city}</td>
                <td>{student.isActive?"Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
}