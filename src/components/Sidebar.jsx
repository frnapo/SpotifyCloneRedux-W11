import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchTracks } from "../redux/actions/searchActions";

import { Nav, Navbar, Col, Button, Form, FormControl } from "react-bootstrap";
import Logo from "../assets/logo.png";
import { HouseDoorFill } from "react-bootstrap-icons";
import { BookFill } from "react-bootstrap-icons";

const Sidebar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchTracks(query));
  };
  return (
    <Col xs={2} className="sidebar-fixed p-0 d-none d-lg-block" style={{ width: "250px" }}>
      <Navbar className="flex-column vh-100 d-flex justify-content-between main-nav" bg="black">
        <div className="mt-4 ms-4">
          <Navbar.Brand href="#home">
            <img src={Logo} width="150" height="45" alt="Logo" className="mb-2" />
          </Navbar.Brand>
          <Nav className="flex-column mt-4">
            <Nav.Link href="#home" className="text-secondary fs-5 pe-5">
              <HouseDoorFill className="fs-3 mb-2 me-2" />
              Home
            </Nav.Link>
            <Nav.Link href="#library" className="text-secondary fs-5">
              <BookFill className="fs-3 mb-2 me-2" />
              Your Library
            </Nav.Link>
            <Form className="mt-4 d-flex" onSubmit={handleSubmit}>
              <div className="flex-grow-1">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="no-rounded-right"
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <Button variant="outline-secondary me-3 no-rounded-left" type="submit">
                GO
              </Button>
            </Form>
          </Nav>
        </div>
        <div className="mb-3">
          <Button variant="light" className="mb-2 w-100 rounded-5 custom-button border-0">
            Sign Up
          </Button>
          <button type="button" className="btn btn-outline-light w-100 rounded-5 my-2">
            {/* non funzionava la variant outline-white qua, ho dovuto usare un button con classi normali */}
            Login
          </button>
          <p className="mt-2 text-secondary">
            <span style={{ cursor: "pointer" }}>Cookie Policy </span>|
            <span style={{ cursor: "pointer" }}> Privacy</span>
          </p>
        </div>
      </Navbar>
    </Col>
  );
};

export default Sidebar;
