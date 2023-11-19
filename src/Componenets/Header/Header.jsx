import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-danger justify-content-center">
        <Container fluid>
          <Navbar.Brand href="/" className="fs-1 text-light fw-bold">
            E-Commerce
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 fw-bold">
              <Nav.Link className="active" href="/">
                Home
              </Nav.Link>
              <Nav.Link href="/Item">Item</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
              <Nav.Link href="/Login">Account</Nav.Link>
              <Nav.Link href="/Account">Login</Nav.Link>
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
              <h4 className="text-light fs-2">
              <FaShoppingCart />

              </h4>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
