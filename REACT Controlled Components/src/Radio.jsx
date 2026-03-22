import { useState } from "react"

export default function Gender() {
    let [gender, setGender] = useState("male");
    return (
        <>
            <label htmlFor="">Gender</label>
            <input type="radio" name="gender" id="male" onChange={() => setGender("male")} checked={gender=="male"} value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" onChange={() => setGender("female")} value="female" checked={gender=="female"} />
            <label htmlFor="female">Female</label>
            <h1>You have selected {gender}</h1>
        </>
    )
}