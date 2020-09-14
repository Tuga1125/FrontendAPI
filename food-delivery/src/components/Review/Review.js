import React, { Component } from 'react'
import { Form, FormGroup, Input, Button } from 'reactstrap'
import axios from 'axios';

export default class Review extends Component {
    constructor(props) {
        super(props)
        this.state = {
            foodname: '',
            comment: '',
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/api/review', this.state)
            .then((res) => {
                console.log(res)
            }).catch(err => console.log(err.response.data))
    }
    render() {
        return (
            <div className='container'>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Input type='text' name='foodname' id='foodname'
                            placeholder="Foodname"
                            value={this.state.foodname}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Input type='comment' name='comment' id='comment'
                            placeholder="Comment"
                            value={this.state.comment}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <Button
            variant="primary"
            type="submit"
            onClick={() => {
              alert("Thanks for submitting your valueable feedback.");
            }}
          >
            Submit
          </Button>
                </Form>

            </div>
        )
    }
}
