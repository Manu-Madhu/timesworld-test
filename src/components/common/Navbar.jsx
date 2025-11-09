import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

const CountryNavbar = ({ active, navItems, setActive }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="white" expand="md" expanded={expanded} className="py-4 py-md-5 px-2">
      <Container
        fluid
        className="common-container d-flex justify-content-between align-items-center"
      >
        {/* Left side */}
        <Navbar.Brand className="fw-bold fs-3 text-dark m-0">
          Countries
        </Navbar.Brand>

        {/* Toggle button (mobile) */}
        <Navbar.Toggle
          aria-controls="country-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
          className="border-0 shadow-none"
        >
          <FaBars color="#6c6c6c" />
        </Navbar.Toggle>

        {/* Right side */}
        <Navbar.Collapse
          id="country-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="align-items-center gap-5">
            {navItems.map((item) => (
              <Nav.Link
                key={item}
                href="#"
                onClick={() => {
                  setActive(item);
                  setExpanded(false); 
                }}
                className={`fw-semibold  position-relative ${
                  active === item ? "text-dark" : "text-muted"
                }`}
                style={{ paddingBottom: "6px" , fontSize:'20px' }}
              >
                {item}
                {active === item && (
                  <span
                    className="position-absolute start-0 bottom-0 w-100"
                    style={{
                      height: "3px",
                      backgroundColor: "#3E3E3E",
                      borderRadius: "1px",
                      marginLeft: "7px",
                    }}
                  ></span>
                )}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CountryNavbar;
