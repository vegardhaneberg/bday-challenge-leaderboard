import { Dispatch, SetStateAction, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./NavbarComponent.css";

function NavbarComponent(props: {
  setGlobalState: Dispatch<SetStateAction<number>>;
}) {
  const { setGlobalState } = props;
  const [expanded, setExpanded] = useState<boolean>(false);

  function handleOnClick(state: number) {
    console.log("lol");
    setExpanded(false);
    setGlobalState(state);
  }

  return (
    <>
      <Navbar
        fixed="top"
        expand="lg"
        className="navbarMain"
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand className="brand" onClick={() => handleOnClick(1)}>
            &#127866; Bday Challenge
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="link" onClick={() => handleOnClick(2)}>
                Legg til forsøk
              </Nav.Link>
              <Nav.Link className="link" onClick={() => handleOnClick(3)}>
                Spillere
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
