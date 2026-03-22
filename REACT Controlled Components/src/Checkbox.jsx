import { useState } from "react";

export default function Checkbox() {
  let [languages, setLanguages] = useState([]);
  const handelLang = (e) => {
    if (e.target.checked) {
      setLanguages([...languages, e.target.value]);
    } else {
      setLanguages(languages.filter((language) => language != e.target.value));
    }
  };
  return (
    <>
      <label htmlFor="">Select Languages: </label>

      <input type="checkbox" value="html" id="html" onChange={handelLang} />
      <label htmlFor="HTML">HTML</label>

      <input type="checkbox" value="css" id="css" onChange={handelLang} />
      <label htmlFor="CSS">CSS</label>

      <input type="checkbox" value="js" id="js" onChange={handelLang} />
      <label htmlFor="JS">JS</label>

      <input type="checkbox" value="python" id="python" onChange={handelLang} />
      <label htmlFor="Python">Python</label>

      <h1>You have selected languages : {languages.toString()}</h1>
    </>
  );
}
