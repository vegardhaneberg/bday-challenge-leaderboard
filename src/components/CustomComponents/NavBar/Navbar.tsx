import { Dispatch, SetStateAction } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";

export function NavBar(props: {
  setGlobalState: Dispatch<SetStateAction<number>>;
}) {
  const { setGlobalState } = props;

  function handleOnClick(state: number) {
    console.log("setting global state");
    setGlobalState(state);
  }

  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={() => handleOnClick(1)}>
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleOnClick(2)}>
              Legg til forsøk
            </Nav.Link>
            <Nav.Link onClick={() => handleOnClick(3)}>Spillere</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
