// Composing all components together.

// Functional component - are JS functions that returns JSX.
// component name must start with capital letters.
// One component per file is good practice.

import Navbar from "./Navbar";
import Header from "./Header";
import MainContent from "./Main_Content";
import Footer from "./Footer";
import Welcome from "./classComponent";


// importing App.css for styling css.
import "./App.css"

// Using components in Main App

function App(){
  return(
    <>
    <Navbar />
    <Header />
    <MainContent />
    <Footer />
    <Welcome />
    </>
  );
}

export default App;