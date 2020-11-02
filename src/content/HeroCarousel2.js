import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Row, Col, Button
} from 'reactstrap';

const items = [
  {
    id: 1,
    altText: 'Farm Fresh Lab Tested',
    render: (
      <section 
        className="section pb-0 pb-6 hero-row" 
        id="banner-1"
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          position:'relative'
        }}
      >
        <div 
          className="hero-action-buttons"
        >
          <Row>
            <Col>
            <Button
              className="btn-lg btn-icon ml-2"
              color="primary"
              href="#test-milk"
            >
              <span className="nav-link-inner--text ml-1">
                Test Your Milk
              </span>
            </Button>
            </Col>
            <Col>
              <Button
                className="btn-lg btn-icon ml-2"
                color="primary"
                href="#book-sample"
              >
                <span className="nav-link-inner--text ml-1">
                  Book Free Sample
                </span>
              </Button>
            </Col>
          </Row>
        </div>
      </section>
    ),
    caption: '',
    src: 'https://github.com/chuanshuoge1/reactstrap/blob/gh-pages/image/1.png?raw=true'
  },
  {
    id: 2,
    altText: '',
    render: (
      <section 
        className="section pb-0 pb-6 hero-row" 
        id="banner-1"
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          position:'relative'
        }}
      >
        <div 
          className="hero-action-buttons"
        >
          <Row>
            <Col>
            <Button
              className="btn-lg btn-icon ml-2"
              color="primary"
              href="#test-milk"
            >
              <span className="nav-link-inner--text ml-1">
                Test Your Milk
              </span>
            </Button>
            </Col>
            <Col>
            <Button
              className="btn-lg btn-icon ml-2"
              color="primary"
              href="#book-sample"
            >
              <span className="nav-link-inner--text ml-1">
                Book Free Sample
              </span>
            </Button>
            </Col>
          </Row>
        </div>
      </section>
    ),
    caption: '',
    src: 'https://github.com/chuanshuoge1/reactstrap/blob/gh-pages/image/2.png?raw=true'
  },
  {
    id: 3,
    altText: '',
    caption: '',
    render: (
      
      <section 
        className="section pb-0 pb-6 hero-row" 
        id="banner-1"
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          position:'relative'
        }}
      >
        <div 
          className="hero-action-buttons"
        >
          <Row>
            <Col>
            <Button
              className="btn-lg btn-icon ml-2"
              color="primary"
              href="#test-milk"
            >
              <span className="nav-link-inner--text ml-1">
                Test Your Milk
              </span>
            </Button>
            </Col>
            <Col>
            <Button
              className="btn-lg btn-icon ml-2"
              color="primary"
              href="#book-sample"
            >
              <span className="nav-link-inner--text ml-1">
                Book Free Sample
              </span>
            </Button>
            </Col>
          </Row>
        </div>
      </section>
    ),
    src: 'https://github.com/chuanshuoge1/reactstrap/blob/gh-pages/image/3.png?raw=true'
  }
];

class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          className="my-Carousel"
          tag="div"
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          {item.render}
        </CarouselItem>
      );
    });

    return (
      <div>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}

export default MyCarousel;