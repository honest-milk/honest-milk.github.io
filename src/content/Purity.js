import React, { Component } from 'react';

import {
  Container,
  Row,
  Col, 
  TabContent, 
  TabPane, 
  Nav, 
  NavItem, 
  Spinner,
  NavLink
} from "reactstrap";
import PurityTable from './PurityTable';
import ContentsTest from './ContentsTest';
import classnames from 'classnames';

import {getProduct} from '../apis';

class Purity extends Component {
  state = {
    activeTab: '1',
    loading: false,
    product: {
      "id": 1,
      "name": "Milk A2",
      "description": "Premium quality milk",
      "image": "https://www.honestmilk.in/static/media/Logo.7e86ef7a.png",
      "price": 30,
      "date": new Date().toISOString(),
      "time": "08:30 AM",
      "netContent": 500,
      "unit": "ML",
      "details": {
          "date": "2020-11-20",
          "time": "08:30 AM",
          "quality": {
              "fat": {
                  "title": "FAT",
                  "value": '4.2 %'
              },
              "snf": {
                  "title": "SNF (Solid Non-Fats)",
                  "value": '9.1 %'
              },
              "protein": {
                  "title": "Protein",
                  "value": '3.3 %'
              },
              "mbrt": {
                  "title": "MBRT Tests",
                  "value": '5 Hours'
              }
          },
          "adulteration": {
              "boric": {
                  "natural": "no-change",
                  "adulterated": ""
              },
              "urea": {
                  "natural": "no-change",
                  "adulterated": ""
              },
              "starch": {
                  "natural": "no-change",
                  "adulterated": ""
              },
              "detergent": {
                  "natural": "light-yellow",
                  "adulterated": ""
              },
              "peroxide": {
                  "natural": "no-change",
                  "adulterated": ""
              },
              "neutraliser": {
                  "natural": "light-orange",
                  "adulterated": ""
              }
          },
          "quality2": {
              "mq1": "above 25",
              "mq2": "above 25"
          }
      },
      "createdAt": "2020-11-02T08:00:00.000Z",
      "updatedAt": "2020-11-20T07:15:19.679Z"
    }
  }
  componentDidMount() {
    // getProduct(1)
    // .then(res => {
    //   let product = res.data;
    //   this.setState({
    //     product,
    //     loading: false
    //   })
    // })
    // .catch(err => {
    //   this.setState({
    //     error: err.response ? err.response.data : 'Some Error Occured.',
    //     loading: false
    //   })
    // })
  }
  toggle = (activeTab) => {
    this.setState({activeTab});
  }
  render() {
    let {activeTab, loading, product} = this.state;

    let details, quality;
    if(product) {
      details = product.details;
      quality = details.quality;
    }

    return (
      <>
        <section 
          className="section section-lg pt-lg-0 section-contact-us mt-3"
          id="purity-meter"
        >
          <Container>
            
          <h4 className="display-3">Quality Test</h4>
          {
            loading?
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <Spinner color="primary" />
            </div>
            :
            <>
            <Row>
              <Col span="24">
                <h5>Date: <b>{new Date(product.date).toDateString()}</b></h5>
                <h5>Time: <b>{product.time}</b></h5>
              </Col>
            </Row>
            <Row className="row-grid ">
              <Col>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '1' })}
                      onClick={() => { this.toggle('1'); }}
                      style={{color: 'var(--primary)', fontSize: 24, cursor: 'pointer'}}
                    >
                      Test for Milk Quality
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '2' })}
                      onClick={() => { this.toggle('2'); }}
                      style={{color: 'var(--primary)', fontSize: 24, cursor: 'pointer'}}
                    >
                      Test for Adulteration
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <ContentsTest 
                      product={product}
                    />
              
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <Col style={{overflow: 'auto'}}>
                        <PurityTable 
                          product={product}
                        />
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
                </Col>
            </Row>
            </>
          }
          </Container>
        </section>
      </>
    );
  }
}

export default Purity;