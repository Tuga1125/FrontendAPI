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
            password: '',
            isUser: false,
            isAdmin: false,
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
   
    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/users/login', this.state)
            .then((res) => {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                let user = jwtDecode(res.data.token.split(' ')[1]);
                if (user.role === 'admin') this.setState({ isAdmin: true })
                else this.setState({ isUser: true })
            }).catch(err => console.log(err));
    }

    render() {
        if (this.state.isAdmin) {
            return <Redirect to='/admin' />
        } else if (this.state.isUser) {
            return <Redirect to='/profile' />
        }
        return (
            <div className='container'>
                <h1>Login Form</h1>
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
                        <Input type='password' name='password' id='password'
                            placeholder="Password"
                            value={this.state.password}
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
