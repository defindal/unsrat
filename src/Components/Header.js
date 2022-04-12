import React, { Component } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../index.css';

class Header extends Component {

    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Link className="navbar-brand" to="/list"> React Bootstrap </Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Link className="nav-link" to="/list" >Users </Link>
                            </Nav>
                            <Nav>
                            <Link className="nav-link" to="/login" >Login </Link>
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default Header;
