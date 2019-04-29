import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.css";
import Login from "./components/LogIn/LoginPage";
import Register from "./components/Register/register";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Navbar  />
      <Route exact path="/" component={Landing} />
      <div className="container">
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />    
      </div>
      <Footer />
    </div>
  );
}

export default App;
