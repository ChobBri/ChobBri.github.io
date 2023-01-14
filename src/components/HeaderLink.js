import { NavLink } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";


export default function HeaderLink({to, text}) {
  return (
    <Nav.Item>
      <Nav.Link className="HeaderLink" as={NavLink} to={to}>{text}</Nav.Link>
    </Nav.Item>
  );
}