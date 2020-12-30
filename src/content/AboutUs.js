import React from "react";
import Logo from "../assets/img/brand/Logo.png";
import Product from "../assets/img/brand/Product.png";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

class Profile extends React.Component {
  render() {
    return (
      <>
        <section className="section pt-8" id="about-us" style={{backgroundColor: 'rgb(113, 113, 113)'}}>
          <Container>
            <div className="">
              <div className="px-4">
                <Row className="justify-content-center">
                  <Col>
                    <div 
                      className="card-profile-image text-center" 
                      style={{
                        marginTop: "-100px"
                      }}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={Logo}
                        style={{
                          height: 200
                        }}
                      />
                    </div>
                  </Col>
                </Row>
                <div className="text-center mt-2">
                  <h1 className="text-white">
                    About Us
                  </h1>
                </div>
                <div className="mt-2 pt-2 pb-4">
                  <Row className="justify-content-center">
                    <Col>
                      <p style={{fontSize: 20, color: 'white'}}>
                      Honest Milk is a brand that not only strive to provide you the unadulterated chemical-free milk, but also guarantee you antibiotic and growth hormone free milk. We bring to you the promise of sanctity, the unmatched food-value and the dosage of unadulterated nutritional value. Our mission is to reach the families that lack access to the farm fresh milk and provide them with wholesome milk nutrition. Though India is the richest producer of most commonly used commodity - Milk, the godsend gift. But with the growing demand not only the quality has been compromised, but the production practices being used are not only affecting the cattle health, but also has adverse effects on environment. But worry not. With Honest Milk, we intend to reconnect with the nature and serve to you the absolute goodness at your doorstep.
                      </p>
                      {/* <a href="#pablo" onClick={e => e.preventDefault()}>
                        Show more
                      </a> */}
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </>
    );
  }
}

export default Profile;
