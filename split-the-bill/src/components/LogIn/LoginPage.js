import React, { Component } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import "./Login.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = event => {
    event.preventDefault();
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  //   onSubmit = (event) => {
  //     event.preventDefault();
  //     fetch('/api/auth/login', {

  //       }
  //     })
  //     .then(res => {
  //       if (res.status === 200) {
  //         this.props.history.push('/');
  //       } else {
  //         const error = new Error(res.error);
  //         throw error;
  //       }
  //     })
  //     .catch(err => {
  //       console.error(err);
  //       alert('Error logging in please try again');
  //     });
  //   }

  render() {
    return (
      <Form>
        <h1>Please Login</h1>
        <FormGroup>
          <Input
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
          />
          <br />
          <Button color="success" size="large" onSubmit={this.onSubmit}>
            Log In
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default LoginPage;
