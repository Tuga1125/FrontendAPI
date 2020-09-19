import React, { Component } from 'react'
import { Form, FormGroup, Input, Button } from 'reactstrap'
import axios from 'axios';
import {Link} from 'react-router-dom';
export default class Review extends Component {
    constructor(props) {
        super(props)
        this.state = {
            foodname: '',
            description: '',
            quantity:'',
            price:''
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/api/fooditem', this.state)
            .then((res) => {
                console.log(res)
            }).catch(err => console.log(err.response.data))
    }
    render() {
      return (
        <div className="container">
            <h1>Add Food Items</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Input type='text' name='foodname' id='foodname'
                            placeholder="Foodname"
                            value={this.state.foodname}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Input type='description' name='description' id='description'
                            placeholder="Description"
                            value={this.state.description}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Input type='quantity' name='quantity' id='quantity'
                            placeholder="Quantity"
                            value={this.state.quantity}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Input type='price' name='price' id='price'
                            placeholder="Price"
                            value={this.state.price}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <Button
            variant="primary"
            type="submit"
            onClick={() => {
              alert("Your fooditem has been successfully added.");
            }}
          >
            Submit
          </Button>
          <Link
                to="/editfooditems"
                style={{
                  marginLeft: "20px",
                  fontWeight: "bold",
                  padding: "5px"
                }}
              >
                Edit Your Fooditems
              </Link>
                </Form>

            </div>
        )
    }
}
