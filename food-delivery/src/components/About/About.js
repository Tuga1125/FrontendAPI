import Review from "../Review/Review";
import React from "react";
import {
  Image,
  Jumbotron,
  Button,
  Row,
  Col
} from "react-bootstrap";
import { Link } from "react-router-dom";

class About extends React.Component {
  render() {
    return (
      <div>
        <Image class="" src="./images/chef.png"/>
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
        <div className="container">
          <Row>
            <Col xs={12} md={6}>
              <h1>YOUR REVIEWS</h1>
              <Review title="YOUR REVIEW" label="Your Reviews" />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default About;
