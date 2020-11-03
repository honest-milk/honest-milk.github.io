
import React from "react";

import {
  Card,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";


import flask from '../assets/img/icons/common/flask.svg';
import medal from '../assets/img/icons/common/medal.svg';
import shield from '../assets/img/icons/common/preservatives.png';
import earth from '../assets/img/icons/common/planet-earth.svg';
function Flask() {
  return (
    <img src={flask} alt="icon" width="40px" />
  );
}

function Medal() {
  return (
    <img src={medal} alt="icon" width="40px" />
  );
}
function Shield() {
  return (
    <img src={shield} alt="icon" width="40px" />
  );
}
function EnvFriendly() {
  return (
    <img src={earth} alt="icon" width="40px" />
  );
}

class Features extends React.Component {
  state = {};
  componentDidMount() {
    // document.documentElement.scrollTop = 0;
    // document.scrollingElement.scrollTop = 0;
    // this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <section className="section section-lg pt-lg-5" id="features">
          <Container>
            <h1>
              Why Honest Milk?
            </h1>
            <Row className="justify-content-center mt-4">
              <Col lg="12">
                <Row className="row-grid">
                  <Col lg="6" style={{display: 'flex', flexDirection: 'column'}}>
                    <Card className="feature-card shadow border-0" style={{flexGrow: 1}}>
                      <CardBody className="py-4">
                        <div className="d-flex align-items-center">
                          <Medal />
                          <h4 style={{margin: 0, marginLeft: '10px'}} className="text-primary text-bold">
                            Quality at its Best
                          </h4>
                        </div>
                        <p className="description">
                        Farm Fresh Raw Milk- Unlike other name brands where milk is highly processed and is generally 4-5 days old, Honest Milk is delivered at your doorstep within 5-6 hours of milking. It’s Pure, Raw and 100% natural milk without any processing or any cream separated.
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="6" style={{display: 'flex', flexDirection: 'column'}}>
                    <Card className="feature-card shadow border-0" style={{flexGrow: 1}}>
                      <CardBody className="py-4">
                        
                        <div className="d-flex align-items-center">
                          <Flask />
                          <h4 style={{margin: 0, marginLeft: '10px'}} className="text-primary text-bold">
                            Free of Antibiotics and Growth Hormones
                          </h4>
                        </div>
                        <p className="description">
                         Honest milk is a direction towards the upbringing of milk yield. Our milk comes from the cows that are not treated with artificial growth hormones or antibiotics. We focus on animal health and nutrition to provide you and your family the best quality of milk without altering the natural production cycle.
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row className="row-grid">
                  <Col lg="6" style={{display: 'flex', flexDirection: 'column'}}>
                    <Card className="feature-card shadow border-0" style={{flexGrow: 1}}>
                      <CardBody className="py-4">
                        <div className="d-flex align-items-center">
                          <Shield />
                          <h4 style={{margin: 0, marginLeft: '10px'}} className="text-primary text-bold">
                          No Preservatives
                          </h4>
                        </div>
                          <p className="description">
                            Preservatives such as Formalin, Sodium Benzoate etc. are often used to increase the shelf life of milk and prevent spoilage. But this is not what we believe in! Our cold supply chain ensures that you get the fresh milk at your doorstep with it’s nutrients intact without adding any chemicals.
                          </p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="6" style={{display: 'flex', flexDirection: 'column'}}>
                    <Card className="feature-card shadow border-0" style={{flexGrow: 1}}>
                      <CardBody className="py-4">
                        <div className="d-flex align-items-center">
                          <EnvFriendly />
                          <h4 style={{margin: 0, marginLeft: '10px'}} className="text-primary text-bold">
                            Environment Friendly
                          </h4>
                          </div>
                        <p className="description">
                        Not only our production practices are environmental friendly, but we also ensure that our packaging is not a burden on the earth. That’s why we use recyclable and reusable glass bottles to package our milk.  Since glass is non-toxic and non-reactive, as compared to plastic, which can leach into food products, We couldn’t take any chances!
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      
      </>
    );
  }
}

export default Features;

