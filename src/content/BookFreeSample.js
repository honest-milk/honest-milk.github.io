
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import moment from 'moment';
import ReactDatetime from "react-datetime";
import farmSVG from "../assets/img/ill/farm.jpg";

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

import {bookSampleConfirm, bookSampleInit} from '../apis';

class Landing extends React.Component {
  state = {
    stage: 1,
    loading: false,
    date: moment().add(1, 'days')
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
  submitInit = (e) => {
    e.preventDefault();
    this.setState({
      loading: true
    });
    let {name, phone, flat, street, region, } = this.state;
    let sample = {
      name, phone, 
      address: {
        name: 'Home',
        flat,
        street,
        region,
        isPrimary: true
      }
    }
    bookSampleInit(sample)
    .then(res => {
      this.setState({
        result: 'success',
        feedback: res.data,
        loading: false,
        stage: 2
      });
    })
    .catch(err => {
      if(err.response.status === 400) {
        this.setState({
          result: 'danger',
          loading: false,
          feedback: err.response.data
        });
      } else {
        this.setState({
          result: 'danger',
          loading: false,
          feedback: 'Some error occured, please refresh the page and try again.'
        });
      }
    });
  }
  submitConfirm = (e) => {
    e.preventDefault();
    this.setState({
      loading: true
    });
    let {otp, phone, date} = this.state;
    bookSampleConfirm({otp, phone, date})
    .then(res => {
      this.setState({
        result: 'success',
        feedback: res.data,
        loading: false,
        stage: 3
      });
    })
    .catch(err => {
      console.log(err.status);
      if(err.status === 400) {
        this.setState({
          result: 'danger',
          loading: false,
          feedback: err.response.data
        });
      } else {
        this.setState({
          result: 'danger',
          loading: false,
          feedback: 'Some error occured, please refresh the page and try again.'
        });
      }
    });
  }
  render() {
    let {stage, loading, result, feedback, date} = this.state;
    return (
      <>
        <section 
          className="section pb-0 pb-6" 
          id="book-visit"
          style={{
            backgroundImage: `url(${farmSVG})`,
            // backgroundColor: 'var(--primary)',
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
                      src={Logo}
                      style={{
                        height: '220px'
                      }}
                    /> */}
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="fa fa-money text-warning" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white text-shadow text-bold">Book A Free Sample</h4>
                      <p className="text-white text-shadow text-bold">
                        Book your one free sample and test our milk before buying a subscription.
                      </p>
                    </div>
                  </div>
                  <div>
                  {stage === 1 && <Form
                    onSubmit={this.submitInit}
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
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-home" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Flat/House No."
                        type="text"
                        name="flat"
                        required
                        onChange={this.onChange}
                        onFocus={e => this.setState({ nameFocused: true })}
                        onBlur={e => this.setState({ nameFocused: false })}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-home" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Street/Apartment"
                        type="text"
                        name="street"
                        required
                        onChange={this.onChange}
                        onFocus={e => this.setState({ nameFocused: true })}
                        onBlur={e => this.setState({ nameFocused: false })}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-home" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Region/Sector"
                        type="text"
                        name="region"
                        required
                        onChange={this.onChange}
                        onFocus={e => this.setState({ nameFocused: true })}
                        onBlur={e => this.setState({ nameFocused: false })}
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
                        defaultValue={date}
                        isValidDate={this.disablePastDt}
                        dateFormat={'DD-MM-YYYY'}
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
                      Send OTP
                    </Button>
                  </div>
                  
                  </Form>}

                  {stage === 2 && <Form
                    onSubmit={this.submitConfirm}
                  >
                  <FormGroup
                    className={classnames({
                      focused: this.state.emailFocused
                    })}
                  >
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-lock" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="OTP"
                        type="number"
                        name="otp"
                        required
                        onFocus={e => this.setState({ emailFocused: true })}
                        onBlur={e => this.setState({ emailFocused: false })}
                        onChange={this.onChange}
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
                      Book your Sample
                    </Button>
                  </div>
                  
                  </Form>}

                  {
                    stage === 3 &&
                    <div>
                      <h3>We have received your request. Our team will contact you shortly.</h3>
                    </div>
                  }
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
