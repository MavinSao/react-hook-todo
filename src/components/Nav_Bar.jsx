import React from "react";
import {Container, Navbar} from 'react-bootstrap';
function Nav_Bar() {
  return (
    <Navbar>
        <Container>
      <Navbar.Brand href="#home">Todo List</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">Mark Otto</a>
        </Navbar.Text>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav_Bar;
