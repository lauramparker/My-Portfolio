import React from "react";
import { Nav, Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "./style.css";

function Header() {
    return (
        <Navbar style={{ backgroundColor: '#e98074' }} expand='large'>
            <Navbar.Brand href="#home" style={{ color: 'white' }}>Laura M. Parker</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#index">About</Nav.Link>
                    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    {/* <Nav.Link href="#contact">Contact</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;