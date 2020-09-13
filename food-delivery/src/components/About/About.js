// import "./About.css";
import Review from "../Review/Review";
// import Appoint from "../Core-component/Appoint";
 //import CardOne from "../Core-component/CardOne";

import React from "react";
import {
  Image,
  Jumbotron,
  Button,
  Container,
  Row,
  Col,
  // Card,
  CardDeck
} from "react-bootstrap";
import { Link } from "react-router-dom";

class About extends React.Component {
  render() {
    return (
      <div>
        <Image class="header-image" src="./images/header-image.jpg" fluid />
        <Jumbotron>
          <h2>Foodie</h2>
          <p>
          is a easy to go app for all the foodies in Nepal, 
          where they can search for their favourite restaurants, 
          get food delivered to their home or office, get awesome
           deals when they dine-in at the restaurants, read and post 
           restaurant reviews, explore restaurant menu, earn credits 
           to their and much more. You name it!
          </p>
          <p>
            <Link to="/contact">
              <Button variant="primary">Contact us</Button>
            </Link>
          </p>
        </Jumbotron>
{/* 
        <div class="card-container">
          <Container>
            <CardDeck class="card-deck">
              <CardOne
                imageSrc="./images/man1.jpg"
                title="Founder"
                content="this is the contenet and here we will place some of the content and it sounds reacts"
              />
              <CardOne
                imageSrc="./images/man2.jpg"
                title="Chairman"
                content="this is the contenet and here we will place some of the content and it sounds reacts"
              />
              <CardOne
                imageSrc="./images/man3.jpg"
                title="CEO"
                content="this is the contenet and here we will place some of the content and it sounds reacts"
              />
            </CardDeck>
          </Container>
        </div> */}
        <div className="container">
          <Row>
            <Col xs={12} md={6}>
              <Review title="REVIEW" label="Your Reviews" />
            </Col>
            {/* <Col xs={12} md={6}>
              <Appoint />
            </Col> */}
          </Row>
        </div>
      </div>
    );
  }
}

export default About;
