import React, { Component } from 'react'
import { Form, FormGroup, Input, Button } from 'reactstrap'
import axios from 'axios';

export default class Review extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity:'',
            price:'',
            date:''
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/api/orderitem', this.state)
            .then((res) => {
                console.log(res)
                this.props.history.push("/fooditems");
            }).catch(err => console.log(err.response.data))
    }
    render() {
      return (
        <div className="container">
            <h1>Order Food Items</h1>
                <Form onSubmit={this.handleSubmit}>
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
                    <FormGroup>
                        <Input type='date' name='date' id='date'
                            placeholder="Date"
                            value={this.state.date}
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
                </Form>

            </div>
        )
    }
}
