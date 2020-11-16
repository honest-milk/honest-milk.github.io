
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import moment from 'moment';
import ReactDatetime from "react-datetime";
// import farmSVG from "../assets/img/ill/farm.svg";

// reactstrap components
import {
  Container,
  Row,
  Col,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Button,
  Alert, Form
} from "reactstrap";

import farmSVG from '../assets/img/ill/farm.jpg';
import {bookVisit} from '../apis';

class Landing extends React.Component {
  state = {
    loading: false,
    date: moment().add(1, 'day')
  };
  componentDidMount() {
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onDateChange = (value) => {
    this.setState({
      date: value.format('YYYY-MM-DD')
    })
  }
  disablePastDt = current => {
    let yesterday = moment().subtract(1, 'day');
    return current.isAfter(yesterday);
  };
  submit = (e) => {
    e.preventDefault();
    this.setState({
      loading: true
    });
    bookVisit(this.state)
    .then(res => {
      this.setState({
        result: 'success',
        feedback: 'Thank you. Your request has been submitted. Our team will get in touch with your shortly.',
        loading: false
      });
    })
    .catch(err => {
      this.setState({
        result: 'danger',
        loading: false,
        feedback: 'Some error occured, please refresh the page and try again.'
      });
    });
  }
  render() {
    let {loading, result, feedback} = this.state;
    return (
      <>
        <section 
          className="section pb-0 pb-6" 
          id="book-visit"
          style={{
            backgroundImage: `url(${farmSVG})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover'
          }}
        >
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5 ">
                    {/* <img
                      alt="..."
                      className="img-center img-fluid"
                      src={farmSVG}
                    /> */}
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-warning" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white text-bold text-shadow">Book A Farm Visit</h4>
                      <p className="text-white text-bold text-shadow">
                        See how we deliver quality we promise.
                        We are located at: <br/>
                          Organic Dairy Farm, 
                          Village Dhanouni  <br/>
                          Tehsil Dera Bassi, 
                          District Mohali <br/>
                      </p>
                    </div>
                  </div>
                  <div>
                    <Form
                      onSubmit={this.submit}
                    >
                  <FormGroup
                    className={classnames("mt-5", {
                      focused: this.state.nameFocused
                    })}
                  >
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-circle-08" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Your name"
                        type="text"
                        name="name"
                        required
                        onChange={this.onChange}
                        onFocus={e => this.setState({ nameFocused: true })}
                        onBlur={e => this.setState({ nameFocused: false })}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: this.state.emailFocused
                    })}
                  >
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-phone" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Phone Number"
                        type="number"
                        name="phone"
                        min={6000000000}
                        max={9999999999}
                        required
                        onFocus={e => this.setState({ emailFocused: true })}
                        onBlur={e => this.setState({ emailFocused: false })}
                        onChange={this.onChange}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-calendar-grid-58" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <ReactDatetime
                        inputProps={{
                          placeholder: "Pick a date"
                        }}
                        defaultValue={moment().add(1, 'day')}
                        dateFormat={'DD-MM-YYYY'}
                        isValidDate={this.disablePastDt}
                        timeFormat={false}
                        required
                        name="date"
                        onChange={this.onDateChange}
                      />
                    </InputGroup>
                  </FormGroup>
                  {result && <div>
                    <Alert color={result} >
                      {feedback}
                    </Alert>
                  </div>}
                  <div>
                    <Button
                      block
                      className={`btn-round ${loading ? 'loading': ''}`}
                      disabled={loading}
                      color="default"
                      size="lg"
                      type="submit"
                    >
                      Book A Visit
                    </Button>
                  </div>
                  
                  </Form>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
      </>
    );
  }
}

export default Landing;
