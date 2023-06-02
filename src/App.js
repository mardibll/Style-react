import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./view/home/Home";
import About from "./view/about/About";
import Contact from "./view/contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" id="nav">
            Mardi migrasi
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link id="nav" href="/About">
              About
            </Nav.Link>
            <Nav.Link id="nav" href="/Contact">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
