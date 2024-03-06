import { Navbar, Container, Nav } from "react-bootstrap";
import "./NavbarComponent.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function NavbarComponent() {
  const [expanded, setExpanded] = useState<boolean>(false);

  const navigate = useNavigate();
  const navigateTo = (subPath: string) => {
    navigate(`/${subPath}`);
  };

  function handleOnClick(subPath: string) {
    setExpanded(false);
    navigateTo(subPath);
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
          <Navbar.Brand className="brand" onClick={() => navigateTo("")}>
            &#127866; Bday Challenge
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                className="link"
                onClick={() => handleOnClick("addchallenge")}
              >
                Legg til forsøk
              </Nav.Link>
              <Nav.Link
                className="link"
                onClick={() => handleOnClick("players")}
              >
                Spillere
              </Nav.Link>
              <Nav.Link
                className="link"
                onClick={() => handleOnClick("bredvid")}
              >
                Bredvid 12-kamp
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
