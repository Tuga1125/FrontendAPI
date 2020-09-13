import React from 'react'
import { Jumbotron, Container, Button } from 'reactstrap'
// import Login from './Authentication/Login'
import Slider from "./Navbar/Slider"
import Footer from './Navbar/Footer'

export default function Home(props) {
    return (
        <div>
                        <Slider />

            <Jumbotron fluid>
                <Container fluid> 
                    <h1 className='display-3'>Food App</h1>
                    <p className="lead">Welcome to the coolest food delivery app in the world!!</p>
                    {/* <hr />
                    <Login />
                    <hr /> */}
                    <p className="lead"> If you haven't registered yet? Click here!
                        <Button color="primary" onClick={() => props.history.push('/register')}>Register</Button>
                        {/* <Link to='/register'>
                            <button className="btn-primary">Register</button>
                        </Link> */}
                    </p>
                </Container>
            </Jumbotron>
            <Footer />
        </div>
    ) 
}
