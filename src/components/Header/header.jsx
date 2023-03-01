import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./header.css";

import logo from "../../resources/img/logo.png";
import home from "../../resources/img/home.svg";
import linkedin from "../../resources/img/nav-icon1.svg";
import facebook from "../../resources/img/nav-icon2.svg";
import instagram from "../../resources/img/nav-icon3.svg";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");

  const onUpdateActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
      <Navbar expand="lg">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" onClick={() => onUpdateActiveLink("home")}>
                <div
                  className={
                    activeLink === "home"
                      ? "active home-icon-container"
                      : "home-icon-container"
                  }
                >
                  <img src={home} alt="home" className="home-icon" />
                </div>
              </Nav.Link>

              <Nav.Link
                href="#blog"
                className={
                  activeLink === "blog" ? "navbar-link active" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("blog")}
              >
                Blog
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={
                  activeLink === "about" ? "navbar-link active" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("about")}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#work"
                className={
                  activeLink === "work" ? "navbar-link active" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("work")}
              >
                Work
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icons">
                <a href="#">
                  <img src={facebook} alt="Facebook" />
                </a>
                <a href="#">
                  <img src={instagram} alt="Instagram" />
                </a>
                <a href="#">
                  <img src={linkedin} alt="LinkedIn" />
                </a>
              </div>
              {/*<button className="vvd">
              <span>Login</span>
            </button>*/}
            </span>
          </Navbar.Collapse>
          {/*<Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>*/}
        </Container>
      </Navbar>
  );
};

export default Header;
