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
                    <h3 className='display'>Food App</h3>
                    <p className="lead">Welcome to the coolest food ordering app!</p>
                    That is the briefest description for this app. The customer app helps the customer
                    to access the online food ordering platforms, search for the right restaurant or
                    the dish they want to order, place their orders and pay easily.App-based food delivery
                    is a popular way to get a quick and easy meal. While food delivery was limited to 
                    certain types of restaurants for years, services like Foodmandu and Bhojdeals have 
                    made it easy to get food delivered to your door from fast-food restaurants or local 
                    family-owned dining establishments.With food delivery apps, you can order from your
                    favorite restaurants simply by pressing a few buttons. Contact-less delivery options
                    can also help cut down the need to stand at the door and wait. We’ve gathered all
                    the essential info for the best food delivery apps for 2020.
                    <p></p>
                    <p className="lead"> If you are new here and haven't registered yet? Click here!
                        <Button color="primary" onClick={() => props.history.push('/register')}>Register</Button>

                    </p>
                </Container>
            </Jumbotron>
            <Footer />
        </div>
    ) 
}
