// Reusable container example : 

export function UserCard({name,age,email}){
    return (
      <div className="userCard">
        <h1>{name}</h1>
        <h2>{age}</h2>
        <h2>{email}</h2>
      </div>
    );
}