import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import "./Navbar.css";

class NavBar extends React.Component {
  logout = () => {
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.clear();
      this.props.history.push("/login");
    }
  };
  render() {
    const token = localStorage.getItem("token");
    if (!token) {
      return (
        <Navbar color="light" light expand="md">
              <Navbar.Brand href="/">
                <img
                  src="images/logo1.png"
                  width="70"
                  height="70"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
            
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                  <Nav.Link href="/fooditems">FoodItems</Nav.Link>
                  <NavDropdown title="Profile" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                    <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
      );
    }
    if (token) {
      return(
        <Navbar color="light" light expand="md">
         <Navbar.Brand href="/">
           {/* <img
             src="logo/hospital.png"
             width="30"
             height="30"
             className="d-inline-block align-top"
             alt="React Bootstrap logo"
           /> */}
           &nbsp;&nbsp;&nbsp; Food
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="mr-auto">
             <Nav.Link href="/">Home</Nav.Link>
             <Nav.Link href="/about">About</Nav.Link>
             <Nav.Link href="/contact">Contact</Nav.Link>
             <Nav.Link href="/fooditems">FoodItems</Nav.Link>
           </Nav>
         </Navbar.Collapse>
         <Nav className="">
                <Button onClick={this.logout}>Logout</Button>
              </Nav>
       </Navbar>
 );
    }
  }
}

export default withRouter(NavBar);
