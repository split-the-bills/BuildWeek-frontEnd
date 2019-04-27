import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter as Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input
  // FormText
} from "reactstrap";
// import axios from "axios";
import { connect } from "react-redux";
import { registerUser } from "../actions";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registrationInfo: {
        id: "",
        username: "",
        password: "",
        phone: "",
        email: "",
        isRegistering: false,
        errors: ""
      }
    };
  }
  /////////////////////////////////////////
  handleChange = e => {
    this.setState({
      registrationInfo: {
        ...this.state.registrationInfo,
        [e.target.name]: e.target.value
      }
    });
  };

  // handleRegistrationFormInput = event => {
  //   const newUser = event.target.newUser;
  //   this.setState({ [newUser]: event.target.value });
  // };

  handleRegistration = e => {
    e.preventDefault();
    this.props
      .login(this.state.registrationInfo)
      .then(() => this.props.history.push("/protected"));
  };

  render() {
    return (
      <Form
        className="registration-form"
        registrationInfo={this.state.registrationInfo}
      >
        {/* <h1>Split the Bill</h1> */}
        <h3>Register Here</h3>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="RegisterEmail">Username</Label>
              <Input
                type="username"
                name="user"
                id="RegisterUsername"
                placeholder="enter your username"
                value={this.state.registrationInfo.username}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="RegisterPassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="RegisterPassword"
                placeholder="enter your password"
                value={this.state.registrationInfo.password}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="RegisterEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="RegisterEmail"
            placeholder="enter your email"
            value={this.state.registrationInfo.email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="RegisterPhoneNumber">Phone Number</Label>
          <Input
            type="text"
            name="phonenumber"
            id="RegisterPhoneNumber"
            placeholder="enter your phone number"
            value={this.state.registrationInfo.phone}
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup check>
          <Input type="checkbox" name="check" id="exampleCheck" />
          <Label for="exampleCheck" check>
            Receive Email Promotions
          </Label>
        </FormGroup>
        <Link to="/" className="home-route">
          <Button
            className="register-btn"            
            onChange={this.handleChange}
            onSubmit={this.handleRegistration}
          >
            {this.props.isRegistering ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Register"
            )}
          </Button>
        </Link>
      </Form>
    );
  }
}
const mapStateToProps = state => {
  return {
    isRegisterring: state.isRegistering,
    errors: state.errors
  };
};

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
