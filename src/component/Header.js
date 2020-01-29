import React, { useState, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const isLogin = JSON.parse(localStorage.getItem("status"));
  const signOut = () => {
    localStorage.setItem("status", false);
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink tag={Link} to="/profile">Profile</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to="/About">API Mode</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to="/class">Open API</NavLink>
            </NavItem>
          </Nav>
          <Nav className="mr-6" navbar>
            {isLogin ? (
              <NavItem>
                <NavLink onClick={signOut}>Sign Out</NavLink>
              </NavItem>
            ) : (
              <Fragment>
                <NavItem>
                  <NavLink tag={Link} to="/signin">
                    Sign In
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink tag={Link} to="/signup">
                    Sign Up
                  </NavLink>
                </NavItem>
              </Fragment>

            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
