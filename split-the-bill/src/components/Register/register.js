import React from "react";
import ReactDOM from "react-dom";
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
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default class Register extends React.Component {
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
        errors: {}
      }
    };
  }
  /////////////////////////////////////////
  componentDidMount() {
    axios
      .get("http://localhost:9090/api/auth/register")
      .then(response => {
        console.log(response.data);
        this.setState({
          registrationInfo: response.data
        });
      })
      .catch(err => console.log(err));
  }

  handleRegistrationFormInput = event => {
    const newUser = event.target.newUser;
    this.setState({ [newUser]: event.target.value });
  };

  // handleRegistration = e => {
  //   e.preventDefault();
  //   this.props
  //     .login(this.state.registrationInfo)
  //     .then(() => this.props.history.push("/protected"));
  // };

  handleRegisterBtn = event => {
    event.preventDefault();
    axios
      .post("http://localhost:9090/api/auth/register", {
        id: this.state.id,
        username: this.state.username,
        password: this.state.password,
        phone: this.state.phone,
        email: this.state.email
        // isRegistering: true
      })
      .then(response => {
        this.setState({ registrationInfo: response.data.registrationInfo });
      })
      .catch(err => {
        console.log(err);
      });
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
                onChange={this.handleRegistrationFormInput}
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
                onChange={this.handleRegistrationFormInput}
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
            onChange={this.handleRegistrationFormInput}
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
            onChange={this.handleRegistrationFormInput}
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
            handleRegisterBtn={this.handleRegisterBtn}
            handleRegistrationFormInput={this.handleRegistrationFormInput}
            // onSubmit={this.handleRegistration}
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
