
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
import Logo from "../assets/img/brand/Logo.png";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                {/* <img
                  alt="..."
                  style={{height: 60}}
                  src={require("assets/img/brand/Logo.png")}
                /> */}
                <h3 
                  style={{
                    fontFamily: 'FontAwesome',
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 'bold',
                    color: 'var(--primary)'
                  }}
                  className="mb-0"
                >H<img src={Logo} alt="O" height="24px"></img>nest Milk</h3>
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row className="align-items-center">
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <div 
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                        <h4
                          style={{
                            fontFamily: 'FontAwesome',
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: 18,
                            color: 'var(--primary)'
                          }}
                          className="mb-0"
                        >H<img src={Logo} alt="O" height="24px"></img><span>NEST MILK</span></h4>
                        </div>
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center ml-lg-auto" navbar>

                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="#about-us"
                      id="tooltip333589074"
                    >
                      <span className="nav-link-inner--text ml-2">
                        About Us
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="#purity-meter"
                      id="tooltip333589074"
                    >
                      <span className="nav-link-inner--text ml-2">
                        Purity Meter
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="#how-it-works"
                      id="tooltip333589074"
                    >
                      <span className="nav-link-inner--text ml-2">
                        How It Works
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="#features"
                      id="tooltip333589074"
                    >
                      <span className="nav-link-inner--text ml-2">
                        Why Honest Milk
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="#blog"
                      id="tooltip333589074"
                    >
                      <span className="nav-link-inner--text ml-2">
                        Blog
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem className="d-lg-none">
                    <NavLink
                      className="nav-link-icon"
                      href="#book-visit"
                      id="tooltip333589074"
                    >
                      <span className="nav-link-inner--text ml-2">
                        Book a Farm Visit
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem className="d-none d-lg-block">
                    <Button
                      className="btn-neutral btn-icon ml-2"
                      color="primary"
                      href="#book-visit"
                    >
                      <span className="nav-link-inner--text ml-1">
                        Book a Farm Visit
                      </span>
                    </Button>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
