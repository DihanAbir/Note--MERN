import React from "react";
import { Navbar, Nav, Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainLogo from "../Assets/MainLogo.png";

import Button from "./Button.js";
import Search from "../Assets/Search.png";
import { Fragment } from "react";
import Location from "../Assets/Location.svg";
import Email from "../Assets/Email.svg";
import Facebook from "../Assets/facebook.png";
import Pinterest from "../Assets/Pinterest.png";
import Instagrame from "../Assets/Instagrame.png";
import Twitter from "../Assets/Twitter.png";
import '../Mycss/Menu.css'

function Menu() {
  return (
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
      <div className="">
        <Navbar className="navbar_class" expand="lg">
          <Link to="/" className="Logo_design">
            <img src={MainLogo} alt="" />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="menu_items ml-auto my-2 my-lg-0" navbarScroll>
              <Link to="/all_notes">all Notes</Link>
              <Link to="/note_description">note_description</Link>
              <Link to="#action1">Course</Link>
              <Link to="#action1">Contact</Link>
            </Nav>

            <Form className="d-flex">
              <Button>Sign Up</Button>
              <img style={{ paddingLeft: "20px" }} src={Search} alt="" />
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Fragment>
  );
}

export default Menu;

//landing page -> all catefgoru
// single category -> all notes
// notes des ->  all_category
