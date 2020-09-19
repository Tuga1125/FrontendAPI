import React from 'react'
import { Jumbotron, Container, Button } from 'reactstrap'
// import Login from './Authentication/Login'
import Slider from "../Navbar/Slider"
import Footer from '../Navbar/Footer'

export default function Home(props) {
    return (
        <div>
                     

            <Jumbotron fluid>
                <Container fluid> 
                    <h2 className='display-3'>Food App</h2>
                    <p className="lead"> Dear Customer we Welcome to the coolest food delivery app in the world!!</p>
                </Container>
            </Jumbotron>
            <Slider />
            <Footer />
        </div>
    ) 
}
