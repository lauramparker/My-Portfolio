import React from "react";
import { Nav, Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "./style.css";

function Header() {
    return (
        <Navbar bg='light' expand='large'>
            <Navbar.Brand href="#home">Laura M. Parker</Navbar.Brand>
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