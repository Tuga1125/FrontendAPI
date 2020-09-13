import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'
import { withRouter } from "react-router";

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          firstname: "", 
          lastname: "",
          username:"",
          email: "",
          password: "",
          role:""
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/api/users/register', this.state)
            .then((res) => {
                console.log(res)
            }).catch(err => console.log(err.response.data))
    }
    render() {
        return (
            <div className="container">
                <h1>Registration Form</h1>
            <Form>
     
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">First Name</Label>
            <Input type="text" name="firstname" id="firstname" placeholder="input your firstname" 
            value={this.state.firstname}
            onChange={this.handleChange}  />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Last Name</Label>
            <Input type="text" name="lastname" id="lastname" placeholder="Last Name" 
            value={this.state.lastname}
            onChange={this.handleChange}  />

</FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="email" placeholder="with a placeholder" 
            value={this.state.email}
            onChange={this.handleChange}  />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleUsername">Username</Label>
            <Input type="text" name="username" id="username" placeholder="input your username" 
            value={this.state.username}
            onChange={this.handleChange}  />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="password" placeholder="input your password" 
            value={this.state.password}
            onChange={this.handleChange}  />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleRole">Role</Label>
            <Input type="role" name="role" id="role" placeholder="with a placeholder" 
            value={this.state.role}
            onChange={this.handleChange}  />
          </FormGroup>
        </Col>
      </Row>
    
      <Button
            variant="primary"
            type="submit"
            onClick={() => {
              alert("Thanks for registering with us.");
            }}
          >
            Submit
          </Button>    </Form> </div>
        )
    }
}

export default withRouter(Register);
