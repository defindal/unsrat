import React, {Component} from "react";
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../index.css';

class Header extends Component{

    render(){
        return(
            <Navbar>
                <Nav>
                    <NavItem> <Link to="/" > Home </Link> </NavItem>
                    <NavItem> <Link to="/list" > Add Student </Link> </NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default Header;
