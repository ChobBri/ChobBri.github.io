import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import HeaderLink from './HeaderLink';
export default function Header() {
    return (
      <Navbar bg="light" sticky="top" className="Header">
        <Container>
          <Navbar.Brand>Brian Cho</Navbar.Brand>
        <div >
        <Nav className="HeaderNav">
          <HeaderLink to="/" text="Home"/>
          <HeaderLink to="/projects" text="Projects"/>
          <HeaderLink to="/music" text="Music"/>
          <HeaderLink to="/contact" text="Contact"/>
        </Nav>
        </div>
        </Container>
      </Navbar>
    );
  }