import React from "react";
import "./App.css";
import Background from "./components/Background";
import NavigationBar from "./components/NavigationBar";
import Screen from "./components/Screen";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div>
      <Homepage />
      <NavigationBar />
      <div className="container-screens">
        <Screen />
        <Screen />
        <Screen />
      </div>
      {/* <NavigationBar /> */}
    </div>
  );
}

export default App;
