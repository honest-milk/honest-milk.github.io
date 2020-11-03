
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import constants from '../constants';

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <Container>
            <Row className=" row-grid align-items-top mb-5 justify-content-md-between">
              
              <Col lg="6">
                <h2 className=" text-primary font-weight-light mb-2">
                  Honest Milk
                </h2>
                <h6 className=" mb-0 font-weight-light">
                  At ‘Honest Milk’, our mission is to reach the families that lack access to the farm fresh milk and provide them with wholesome milk nutrition.
                </h6>
              </Col>
              <Col id="footer-details" className="btn-wrapper" lg="6">
                <div>
                  <Button
                    className="btn-icon-only rounded-circle ml-1"
                    color="dribbble"
                    href="https://www.instagram.com/honest.milk/?hl=en"
                    id="tooltip829810202"
                    target="_blank"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-instagram" />
                    </span>
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip829810202">
                    Follow us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon-only rounded-circle ml-1"
                    color="facebook"
                    href="https://www.facebook.com/honest.milk.73/"
                    id="tooltip837440414"
                    target="_blank"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-facebook-square" />
                    </span>
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip837440414">
                    Like us
                  </UncontrolledTooltip>
                </div>
                <div className="text-lg-right mt-3">
                  <table 
                    style={{
                      textAlign: "left"
                    }}
                  >
                    <tbody>
                      <tr>
                        <td>
                          <div className="icon icon-lg icon-shape text-primary">
                            <i className="ni ni-building"></i>
                          </div>
                        </td>
                        <td>
                          Organic Dairy Farm
                          <br/>
                          Village Dhanouni, 
                          <br/>
                          Tehsil Dera Bassi,
                          <br />
                          District Mohali
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icon icon-lg icon-shape text-primary">
                            <i className="fa fa-phone"></i>
                          </div>
                        </td>
                        <td>
                          <a href={`tel:${constants.phone}`}>{constants.phone}</a>
                          
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icon icon-lg icon-shape text-primary">
                            <i className="ni ni-email-83"></i>
                          </div>
                        </td>
                        <td>
                        <a href={`mailto:${constants.email}`}>support@honestmilk.in</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
            <hr />
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="/"
                  >
                    Honest Milk
                  </a>
                  .
                </div>
              </Col>
              <Col md="6">
                <Nav className=" nav-footer justify-content-end">
                  
                  <NavItem>
                    <NavLink
                      href="#about-us"
                    >
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="#faq"
                    >
                      FAQ
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="#blog"
                    >
                      Blog
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
