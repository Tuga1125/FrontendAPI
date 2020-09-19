import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'
import { withRouter } from "react-router";

class Fooditems extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          foodname: "", 
          description: "",
          quantity:"",
          price: ""
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        axios.put('http://localhost:3000/api/fooditem', this.state)
            .then((res) => {
                console.log(res)
            }).catch(err => console.log(err.response.data))
    }
    render() {
        return (
            <div className="container">
                <h1>Add Food Items</h1>
            <Form>
     
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleFoodname">Food Name</Label>
            <Input type="text" name="foodname" id="foodname" placeholder="Enter your foodname" 
            value={this.state.foodname}
            onChange={this.handleChange}  />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleDescription">Description</Label>
            <Input type="text" name="description" id="description" placeholder="Description" 
            value={this.state.description}
            onChange={this.handleChange}  />

</FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleQuantity">Quantity</Label>
            <Input type="quantity" name="quantity" id="quantity" placeholder="with a placeholder" 
            value={this.state.email}
            onChange={this.handleChange}  />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePrice">Price</Label>
            <Input type="text" name="price" id="price" placeholder="Enter the price" 
            value={this.state.username}
            onChange={this.handleChange}  />
          </FormGroup>
        </Col>
      </Row>
    
      <Button
            variant="primary"
            type="submit"
            onClick={() => {
              alert("Your fooditem is added!");
            }}
          >
            Submit
          </Button>   
           </Form> 
           </div>
        )
    }
}

export default withRouter(Fooditems);
