import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Register extends React.Component {
    state = {
        registrationInfo: {
          username: "",
          password: "",          
          phoneNumber: "",
          email: "",
          isRegistering: ""
        }
      };
    render() {
        return (
        <Form>
            <Row form>
            <Col md={6}>
                <FormGroup>
                <Label for="RegisterEmail">Username</Label>
                <Input type="username" name="user" id="RegisterUsername" placeholder="with a placeholder" />
                </FormGroup>
            </Col>
            <Col md={6}>
                <FormGroup>
                <Label for="RegisterPassword">Password</Label>
                <Input type="password" name="password" id="RegisterPassword" placeholder="password placeholder" />
                </FormGroup>
            </Col>
            </Row>
            <FormGroup>
            <Label for="RegisterEmail">Email</Label>
            <Input type="email" name="email" id="RegisterEmail" placeholder="email"/>
            </FormGroup>
            <FormGroup>
            <Label for="RegisterPhoneNumber">Phone Number</Label>
            <Input type="text" name="phonenumber" id="RegisterPhoneNumber" placeholder="123"/>
            </FormGroup>

            <FormGroup check>
            <Input type="checkbox" name="check" id="exampleCheck"/>
            <Label for="exampleCheck" check>Check me out</Label>
            </FormGroup>
            <Button>Register</Button>
        </Form>
    );
  }
}