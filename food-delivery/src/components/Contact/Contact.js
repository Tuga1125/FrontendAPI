import React from "react";
import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";
import Footer from '../Navbar/Footer'


class Contact extends React.Component {
  render() {
    return (
      <div>
        <h1>
         You can also Contact Us Here! 
        </h1>
        <Container>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                width={1000}
                height={500}
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Foodmario&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder={0}
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                title="map"
              />
              <a href="https://www.divi-discounts.com">divi-discounts.com</a>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  ".mapouter{position:relative;text-align:right;height:500px;width:1000px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1000px;}"
              }}
            />
          </div>
        </Container>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <h1>Address Information</h1>
              <Card style={{ width: "30rem" }}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <strong>Name :</strong>: Foodie.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Address :</strong> Pulchowk, Lalitpur, Nepal
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Tel :</strong> 012345678,014545454
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Email :</strong> info@foodies.com
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
        <p></p>
        <Footer />
      </div>
    );
  }
}

export default Contact;
