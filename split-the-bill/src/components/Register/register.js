import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Link } from "react-router-dom";
// import Loader from "react-loader-spinner";
import { withRouter } from 'react-router';
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

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles.css";
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';

export default class Register extends React.Component {
  constructor() {
    super();
    this.state = {      
        // id: "",
        username: "",
        password: "",
        phone: "",
        email: "",
        // isRegistering: false
      
    };
  }
  /////////////////////////////////////////
  componentDidMount() {
    axios
      .get("https://arpita-sinha-split-the-bill.herokuapp.com/api/auth/register")
      .then(res => {
        console.log(res.data);
        this.setState({
          state: res.data
        });
      })
      .catch(err => console.log(err));
  }

  handleRegistrationFormInput = event => {
    const newUser = event.target.newUser;
    this.setState({ [newUser]: event.target.value });
  };



  handleRegisterBtn = event => {
    event.preventDefault();
    axios.post("https://arpita-sinha-split-the-bill.herokuapp.com/api/auth/register", this.state)
    .then (res =>{
        console.log("POST Register RESPONSE",res)
        console.log("POST RESPONSE",res.data)
        localStorage.setItem('jwt',res.data.token)
        this.props.history.push('/users')
      })
      .catch(err => {
        console.log(err);
      })
  };

  render() {
    return (
      <Form
        className="registration-form"
        // registrationInfo={this.state.registrationInfo}
      >
        {/* <h1>Split the Bill</h1> */}
        <h3>Register Here</h3>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="RegisterEmail">Username</Label>
              <Input
                type="text"
                name="user"
                id="RegisterUsername"
                placeholder="enter your username"
                value={this.state.username}
                onChange={this.handleRegistrationFormInput}
                required
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
                value={this.state.password}
                onChange={this.handleRegistrationFormInput}
                required
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="RegisterEmail">Email</Label>
          <Input
            type="text"
            name="email"
            id="RegisterEmail"
            placeholder="enter your email"
            value={this.state.email}
            onChange={this.handleRegistrationFormInput}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="RegisterPhoneNumber">Phone Number</Label>
          <Input
            type="text"
            name="phonenumber"
            id="RegisterPhoneNumber"
            placeholder="enter your phone number"
            value={this.state.phone}
            onChange={this.handleRegistrationFormInput}
            required
          />
        </FormGroup>

        <FormGroup check>
          <Input type="checkbox" name="check" id="exampleCheck" />
          <Label for="exampleCheck" check>
            Receive Email Promotions
          </Label>
        </FormGroup>
        <Link to="/dashboard" className="home-route">
          <Button
            className="register-btn"
            handleRegisterBtn={this.handleRegisterBtn}
            handleRegistrationFormInput={this.handleRegistrationFormInput}
            required
            onSubmit={this.handleRegistrationBtn}
          >
            {this.props.isRegistering ? (
              {/* <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" /> */}
            ) : (
              "Register"
            )}
          </Button>
        </Link>
      </Form>
    );
  }
}