function greet(name) {
  return "Hello " + name;
}

function App() {
  let num1 = 10,
    num2 = 20,
    sum = num1 + num2;

  let admin = true;

  const fruits = ["Apple", "Banana", "Mango"];

  const myStyle = {
    color: "red",
    backgroundColor: "black",
  };

  return (
    // <div>
    //   <h1>This is example of adding div in JSX but it creates extra node.</h1>
    // </div>
    <>
      <h1 style={myStyle}>
        This is example of fragment , it does not create extra node
      </h1>
      <h1 style={{ color: "white", backgroundColor: "black" }}>Hello world</h1>

      {/* Expression - use expression when you need to write JS in JS */}
      <h1>Sum is {sum + 10}</h1>
      <h1>{greet("DEV")}</h1>

      {/* We cannot use if-else in JSX , so we will use Ternary operator.*/}
      {admin ? "User is admin" : "Normal user"}

      {/* List rendering */}

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      {/* JSX RULES

 1. JSX must have one parent element
 Example: wrap elements inside <div> or <>

 2. All JSX tags must be properly closed
 Example: <img />, <input />, <br />

 3. Use className instead of class
 Example: <div className="container"></div>

 4. JavaScript expressions must be inside curly braces {}
 Example: <h1>{name}</h1>

 5. Attributes are written in camelCase
 Example: onClick, onMouseOver, tabIndex

 6. Inline CSS must be written as an object
 Example: style={{ color: "red", fontSize: "20px" }}

 7. Lists rendered with map() must have a unique key
 Example: <li key={index}>{item}</li>

 8. JSX allows JavaScript expressions but not statements
 Example: {5 + 5} ✔  but if/for ❌

 9. JSX is not HTML, it is JavaScript syntax extension

  10. Comments inside JSX use {/* comment */}
    </>
  );
}

// Complete JSX Example
function UserCard() {
  // JavaScript variables
  const user = {
    name: "Emma Johnson",
    role: "Software Developer",
    location: "San Francisco, CA",
    isOnline: true,
    followers: 1250,
  };

  const skills = ["React", "JavaScript", "TypeScript", "Node.js"];

  // JavaScript function
  const formatNumber = (num) => {
    return num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num;
  };

  return (
    <>
      {/* Single parent using Fragment */}
      <div className="user-card">
        <div className="header">
          <img src="avatar.jpg" alt={user.name} className="avatar" />
          <div>
            <h2>{user.name}</h2>
            <p>{user.role}</p>
          </div>
          {/* Conditional rendering */}
          {user.isOnline && <span className="online-badge">Online</span>}
        </div>

        <div className="info">
          <p>📍 {user.location}</p>
          <p>👥 {formatNumber(user.followers)} followers</p>
        </div>

        <div className="skills">
          <h3>Skills:</h3>
          {/* Rendering array */}
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>

        <button onClick={() => alert("Following " + user.name)}>Follow</button>
      </div>
    </>
  );
}

export { App, UserCard };
