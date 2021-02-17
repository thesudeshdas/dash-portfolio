import React from "react";
import "./App.css";
import Background from "./components/Background";
import NavigationBar from "./components/NavigationBar";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="app">
      <Background />
      <Homepage />
      {/* <NavigationBar /> */}
    </div>
  );
}

export default App;
