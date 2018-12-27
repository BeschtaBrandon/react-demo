import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { Nav, Navbar, NavItem } from 'react-bootstrap';

class NavBar extends Component {
  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Home</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/work">
            Work
          </NavItem>
          <NavItem eventKey={2} href="/contact">
            Contact
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
