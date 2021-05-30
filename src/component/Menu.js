import React from "react";
import { Navbar, Nav, NavDropdown, Form, Container } from "react-bootstrap";
import Logo from "../Assets/Logo.png";
import Button from "../Custom component/Button.js";
import Search from "../Assets/Search.png";
import { Fragment } from "react";
import Location from "../Assets/Location.svg";
import Email from "../Assets/Email.svg";
import Facebook from "../Assets/facebook.png";
import Pinterest from "../Assets/Pinterest.png";
import Instagrame from "../Assets/Instagrame.png";
import Twitter from "../Assets/Twitter.png";

function Menu() {
  return (
<<<<<<< HEAD
    <Fragment>
      <div className="top_bar">
        <div className="part_one">
          <img src={Location} alt="" />
          <span>1600 Amphitheatre Parkway, CA 94043</span>
          <img src={Email} alt="" />
          <span>vctung@outlook.com</span>
        </div>
        <div className="part_two">
          <img src={Facebook} alt="" />
          <img src={Pinterest} alt="" />
          <img src={Twitter} alt="" />
          <img src={Instagrame} alt="" />
        </div>
      </div>
      {/* top bar end */}
      <div className="our_container">
        <Navbar className="navbar_class" expand="lg">
          <Navbar.Brand href="#">
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ml-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action1">About</Nav.Link>
              <Nav.Link href="#action1">Course</Nav.Link>
              <Nav.Link href="#action1">Contact</Nav.Link>
            </Nav>

            <Form className="d-flex">
              <Button>Sign Up</Button>
              <img src={Search} alt="" />
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Fragment>
=======
    <div>
      <p>menu sakib</p>
    </div>
>>>>>>> 0a0537f27aeca99d010832c245e612515266288c
  );
}

export default Menu;
