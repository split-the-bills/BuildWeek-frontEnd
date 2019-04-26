import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/LogIn/LoginPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
