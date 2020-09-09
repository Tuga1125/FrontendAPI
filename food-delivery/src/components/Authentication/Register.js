import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import { withRouter } from "react-router";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {  
      userame:"",   
      firstName: "", 
      lastName: "",
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.lastName.value);
    const body = {
    
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      password: this.password.value,
      email: this.email.value,
      username: this.username.value
    };

    axios
      .post(`http://localhost:3002/api/users/register`, { body })
      .then(res => {
        alert("form submitted");
        this.props.history.push("/submitted");
      })
      .catch(err => {
        alert("Username already taken");
      });
  }

  render() {
    return (
      <div>
        <Container className="">
          <Form onSubmit={this.handleSubmit}>
            <fieldset
              style={{
                width: "70%",
                margin: "auto",
                border: "2px solid grey",
                padding: "30px"
              }}
            >
              <h3>Register Here</h3>

              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  ref={firstName => (this.firstName = firstName)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  ref={lastName => (this.lastName = lastName)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="chose Username"
                  ref={username => (this.username = username)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  ref={email => (this.email = email)}
                  required
                />
                <Form.Text className="text-muted">
                  Your email is safe with us.
                </Form.Text>
              </Form.Group>


              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  ref={password => (this.password = password)}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" block onClick={this.handleSubmit}>
                Submit
              </Button>
            </fieldset>
          </Form>
        </Container>
      </div>
    );
  }
}

export default withRouter(Signup);
