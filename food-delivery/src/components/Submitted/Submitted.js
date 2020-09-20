import React from "react";
import { Image, Container, Button } from "react-bootstrap";

class Submitted extends React.Component {
  render() {
    return (
      <div style={{ height: "58vh" }}>
        <h1 className="text-primary text-center">Welcome to Foodie!</h1>
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <Image
            src="images/blueberries.jpg"
            fluid
            style={{ width: "250px", margin: "auto" }}
          />
        </Container>
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <Button href="/login" variant="primary" size="sm">
            Back to login Page
          </Button>
        </Container>
      </div>
    );
  }
}

export default Submitted;
