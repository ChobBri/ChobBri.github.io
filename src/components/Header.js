import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function Header() {
    return (
      <Navbar bg="light" sticky="top" className="Header">
        <Container>
          <Navbar.Brand>Brian Cho</Navbar.Brand>
        </Container>
      </Navbar>
    );
  }