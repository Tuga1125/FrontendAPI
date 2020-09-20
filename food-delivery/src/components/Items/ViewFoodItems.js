import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import {  Row, Col, Container, Nav, NavItem, NavLink, ListGroup, ListGroupItem, Button, ListGroupItemHeading } from "reactstrap";
import axios from 'axios'

export default class ViewOrder extends Component {
    constructor(props) {
        super(props)
        this.state = {
             fooditem: []
        }
    }

    // const handleLogout = () => {
    //     localStorage.removeItem('token');
    //     props.history.push('/');
    // }
    componentDidMount(){
        axios.get('http://localhost:3001/api/fooditem')
        .then((response)=> {
            console.log(response);
            this.setState({
                fooditem: response.data
            })
        }).catch((err)=> console.log(err));
    }
    deletefooditem= (fooditem) => {
        console.log(fooditem);
        axios.delete('http://localhost:3000/api/fooditem', this.state)
        .then((res) => {
            console.log(res.data);
            const filteredFooditem = this.state.fooditem.filter((fooditem) => {
                return fooditem !== fooditem
            });
            this.setState({
                fooditem: filteredFooditem
            })
        }).catch((err) => console.log(err.response))
    }
    render() {
    return (
        <>
        {/* <NavBar handleLogout={handleLogout} /> */}
        <Navbar />
        <Container fluid>
        <Row>
            <Col className="" xs={6} md={2}>
            <Nav vertical>
            <NavItem className="m-5">
                <NavLink href="/"><b><h3>Home</h3></b></NavLink>
                </NavItem>
                <NavItem className="m-5">
                <NavLink href="/viewfooditems">Fooditems Details</NavLink>
                </NavItem>
                <NavItem className="m-5 active">
                <NavLink href="/order" className="bg-info text-white">View Orders</NavLink>
                </NavItem>
            </Nav>
            </Col>
            <Col xs={12} md={10} className="mt-5">
            <ListGroupItem active>
                <ListGroupItemHeading>List of food items</ListGroupItemHeading>
            </ListGroupItem>    
            <ListGroup>
                {
                    this.state.fooditem.map((fooditem) => {
                        return<ListGroupItem key={fooditem}>Foodname: {fooditem.foodname} | Description:{fooditem.description} | Quantity: {fooditem.quantity} | Price: {fooditem.price}
                        <Button close onClick={() => this.deletefooditem(fooditem)} /></ListGroupItem>
                    })
                }
            </ListGroup>
            </Col>
        </Row>
        </Container>

        </>
    )
            }
}
