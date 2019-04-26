import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Login from "./components/LogIn/LoginPage";
import Register from "./components/Register/register";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Landing} />
      <div className="container">
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
