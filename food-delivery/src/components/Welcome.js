import React from 'react'
import { Jumbotron, Container, Button } from 'reactstrap'
import Login from './Authentication/Login'

export default function Welcome(props) {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className='display-3'>Food App</h1>
                    <p className="lead">Welcome to the coolest food delivery app in the world!!</p>
                    <hr />
                    <Login />
                    <hr />
                    <p className="lead"> You haven't registered? Signup here!
                        <Button color="primary" onClick={() => props.history.push('/register')}>Register</Button>
                        {/* <Link to='/register'>
                            <button className="btn-primary">Register</button>
                        </Link> */}
                    </p>
                </Container>
            </Jumbotron>
        </div>
    )
}
