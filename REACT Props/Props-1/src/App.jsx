import "./App.css";
import { Greeting, Details, Default, Card } from "./Props";
import { UserCard } from "./userCard";

// Parent Component:
function App() {
  return (
    <>
      <Greeting name="Dev" />
      <Details name="Dev" age={21} />
      <Default></Default> {/*Default props */}
      <Default text="Submit" color="Blue" />
      <Card>This content is passed as children prop</Card>

      {/* Reusable container */}
      <UserCard name="Dev" age={21} email="devraghuwanshi@gmail.com" />
      <UserCard name= "Raj" age ={20} email= "rag@gmail.com" />
    </>
  );
}

export default App;
