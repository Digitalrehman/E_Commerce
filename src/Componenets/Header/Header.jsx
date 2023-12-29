import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart } from "react-icons/fa";
import "./header.css";
import { useSelector } from "react-redux";

const Header = () => {
  let {quantity} = useSelector((state) => state.CardItemProducts)
  
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-danger p-0"
      >
        <Container fluid >
          <Navbar.Brand as={Link} to="/" className="fs-1 text-light fw-bold">
            E-Commerce
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 fw-bold">
              <Nav.Link as={Link} to="/" className="active">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Item">
                Item
              </Nav.Link>
              <Nav.Link as={Link} to="/About">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/Login">
                Account
              </Nav.Link>
              <Nav.Link as={Link} to="/Account">
                Login
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light" className="me-3">
                Search
              </Button>
            </Form>
            <div className="col-1">
              <h4 className="text-light text-light">
                <p className="bg-dark">{quantity}</p>
                <Link to="/Menu" className="text-light">
                  <FaShoppingCart />
                </Link>
              </h4>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
