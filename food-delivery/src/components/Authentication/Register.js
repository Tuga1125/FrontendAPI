import React, { Component } from 'react'
import { Row, Col, Form, FormGroup, Input, Button } from 'reactstrap'
import axios from 'axios';
import { Redirect } from 'react-router-dom'; 
import jwtDecode from 'jwt-decode';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            firstname: '',
            lastname:'',
            role:''
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
   
    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/users/register', this.state)
        .then((res) => {
          console.log(res)
      }).catch(err => console.log(err.response.data))
}
render() {
  return (
      <div className="container">
          <h1>Registration Form</h1>
                <p></p>
                <Form onSubmit={this.handleSubmit}>
                <Row form>
                   <Col md={6}>
                    <FormGroup>
                        <Input type='text' name='username' id='username'
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.handleChange} />
                    </FormGroup>
                    </Col>
                    </Row>
                    <Row form>
                   <Col md={6}>
                    <FormGroup>
                        <Input type='text' name='email' id='email'
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleChange} />
                    </FormGroup>
                    </Col>
                    </Row>
                    <Row form>
                   <Col md={6}>
                    <FormGroup>
                        <Input type='password' name='password' id='password'
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange} />
                    </FormGroup>
                    </Col>
                    </Row>
                    <Row form>
                   <Col md={6}>
                    <FormGroup>
                        <Input type='text' name='firstname' id='firstname'
                            placeholder="Firstname"
                            value={this.state.f}
                            onChange={this.handleChange} />
                    </FormGroup>
                    </Col>
                    </Row>
                    <Row form>
                   <Col md={6}>
                    <FormGroup>
                        <Input type='lastname' name='lastname' id='lastname'
                            placeholder="Lastname"
                            value={this.state.lastname}
                            onChange={this.handleChange} />
                    </FormGroup>
                    </Col>
                    </Row>
                    <Row form>
                   <Col md={6}>
                    <FormGroup>
                        <Input type='role' name='role' id='role'
                            placeholder="Role"
                            value={this.state.role}
                            onChange={this.handleChange} />
                    </FormGroup>
                    </Col>
                    </Row>
                    <Button
            variant="primary"
            type="submit"
            onClick={() => {
              alert("You are logged in successfully");
            }}
          >
            Submit
          </Button>
                </Form>

            </div>
        )
    }
}
