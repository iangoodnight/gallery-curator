import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";
import "./Header.css";

const Header = props => (
  <div className="headers">
    <Navbar color="black" dark expand="md">
      <NavbarBrand href="/">
        <img className="img-fluid banner" src="img/gallery-logo.png"/>
      </NavbarBrand>
    </Navbar>
    <NavbarToggler onClick={props.toggle} />
    <Collapse isOpen={props.isOpen} navbar>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            {props.user}
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Option 1
            </DropdownItem>
            <DropdownItem>
              Option 2
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Reset
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Collapse>
  </div>
);

export default Header;