import Fooditems from "./Fooditems"
import React from 'react';
import {Row,Col } from "react-bootstrap";
  import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
  } from 'reactstrap';
 
 
const Example = (props) => {
  return (
      <div>
    <CardGroup>
      <Card>
        <CardImg top width="100%" src="/images/desserts.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/images/momos.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
        
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/images/pizza.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
         
        </CardBody>
      </Card>
      
    </CardGroup>
    <CardGroup>
      <Card>
        <CardImg top width="100%" src="/images/pasta.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
        
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/images/vegetableskewer.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>

        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/images/eat.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
             </CardBody>
      </Card>
      
    </CardGroup>
  );
    <div className="container">
    <Row>
      <Col xs={12} md={6}>
        <Fooditems title="Items you would like to add" label="Your Reviews" />
      </Col>
    </Row>
    </div>
    </div>
  );
};

export default Example;