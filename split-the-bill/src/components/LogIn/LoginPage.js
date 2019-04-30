import React, { Component } from "react";
import "./Login.css";
import axios from "axios";
import { BrowserRouter as Link } from "react-router-dom";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:9090/api/auth/login")
      .then(response => {
        console.log(response.data);
        this.setState({
          state: response.data
        });
      })
      .catch(err => console.log(err));
  }

  onChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  // onSubmit = e => {
  //   e.preventDefault();
  //   const user = {
  //     username: this.state.username,
  //     password: this.state.password
  //   };
  //   console.log(user);
  // };

  onSubmit = (e, user) => {
    e.preventDefault();
    axios.post(`http://localhost:9090/api/auth/login`, user).then(res => {
      this.setState({ state: res.data });
    });
    console.log(user);
  };

  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h2 className="display-4 text-center">Log In</h2>
              <p className="lead text-center">
                Sign into your Split the Bill account
              </p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    required
                  />
                </div>
                <Link to="/dashboard" className="home-route">
                  <input
                    type="submit"
                    className="btn btn-info btn-block mt-4"
                  />
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;

