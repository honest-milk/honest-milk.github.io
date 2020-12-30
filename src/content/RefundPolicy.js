import React from "react";
import { Container, Row, Col, } from "reactstrap";
import constants from '../constants';

class Profile extends React.Component {
  render() {
    return (
      <>
        <section className="section pt-8" id="refund">
          <Container>
            <Row>
              <Col>
                <h1>Return and Refund Policy</h1>
                <h2>Cancellations</h2>
We are here to make your life simpler. You can now manage your subscriptions/ orders conveniently with us! If you wish to cancel/pause your subscription/order, please call us at  <a href={`tel:${constants.phone}`}>{constants.phone}</a> at  least 12 hours before your delivery is scheduled.  All advance or over payments will be refunded within 2-3 business days. 

<h2>Quality and Service Guarantee: </h2>
Customer satisfaction is priority for us! In case you are unsatisfied with our service, or food quality or if there is a significant delay in delivery, please contact us on phone at <a href={`tel:${constants.phone}`}>{constants.phone}</a> and we will try our best to resolve the issue to your complete satisfaction. For replacement or refund of the product you would be required to return the original product.
<h2>Refunds:</h2>
Refunds can take up to 2-3 working days before they are reflected on your account or to your original payment source (Credit / Debit Card, Net Banking, etc.). 

              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Profile;
