import React from 'react';
  import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody, CardLink
  } from 'reactstrap';
 
 
const Example = (props) => {
  return (
      <div>
    <CardGroup>
      <Card>
        <CardImg top width="100%" src="/images/desserts.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Desserts</CardTitle>
          <CardSubtitle>Special Soft and delicate fruits desserts</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button href="/food/">Add</Button>
          <Button href="/order"> Order</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/images/momos.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Momos</CardTitle>
          <CardSubtitle>Momo of various flavors</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button href="/food/">Add</Button>
          
          <Button href="/order"> Order</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/images/pizza.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Pizza</CardTitle>
          <CardSubtitle>Veg and non veg Pizza both are available</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button href="/food/">Add</Button>
          <Button href="/order"> Order</Button>
        </CardBody>
      </Card>
      
    </CardGroup>
    <CardGroup>
      <Card>
        <CardImg top width="100%" src="/images/pasta.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Pasta</CardTitle>
          <CardSubtitle>Cheese Pasta, Double cheese or no cheese</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button href="/food/">Add</Button>
          <Button href="/order"> Order</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/images/vegetableskewer.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Vegetable Skewer</CardTitle>
          <CardSubtitle>Different veggies are made up in a skewer</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button href="/food/">Add</Button>
          <Button href="/order"> Order</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/images/eat.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Salad</CardTitle>
          <CardSubtitle>Veggies are sliced and garnished a per your wish</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button href="/food/">Add</Button>
          <Button href="/order"> Order</Button>    
        </CardBody>
      </Card>
      
    </CardGroup>
  
    </div>
  );
};

export default Example;