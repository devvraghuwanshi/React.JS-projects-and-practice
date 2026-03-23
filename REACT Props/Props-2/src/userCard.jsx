// ------------------------------
//      Children Component
// ------------------------------


export default function UserCard({
    name,age,city,skills,isActive,userObj,greetFunction,children
}){
    return(
        <div>
            <h2>User Card:</h2>

            {/* Basic Props */}
            <p>Name: {name}</p>
            <p>Age: {age}</p>

            {/* Conditional Rendering: */}
            <p>Status: {isActive? "User Online" : "User Offline"}</p>

            {/* Props from object: */}
            <p>City: {userObj.city}</p>
            <p>Job: {userObj.job}</p>

            {/* Props with Array: */}
            <h4>Skills</h4>
            <ul>
                {skills.map((skill,index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>

            {/* Props as Function: */}
            <button onClick={() => greetFunction(name)}>Greet User:</button>

            {/* Props.children: */}
            <div>
                <h1>Children Content</h1>
                {children}
            </div>
        </div>
    )
}