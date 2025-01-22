import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";

function App() {
  const handleClick = () => {
    alert("Button clicked");
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        Hello World
        <button onClick={handleClick}>Click ME</button>
      </div>
    </>
  );
}

export default App;
