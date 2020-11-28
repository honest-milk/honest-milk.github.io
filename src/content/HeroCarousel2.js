import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Row, Col, Button
} from 'reactstrap';

function ButtonRow() {
  return (
    
  <div 
    className="hero-action-buttons"
  >
    <Row>
      <Col
        className="hero-button-col"
        id="hero-button-col-1"
      >
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
      <Col
        className="hero-button-col"
        id="hero-button-col-2"
      >
        <Button
          className="btn-lg btn-icon ml-2"
          color="primary"
          href="#book-sample"
        >
          <span className="nav-link-inner--text ml-1">
            Book Your Trial Pack
          </span>
        </Button>
      </Col>
    </Row>
  </div>
  )
}

const items = [
  {
    id: 1,
    render: (
      <section 
        className="section pb-0 pb-6 hero-row" 
        id="banner-1"
      >
        <ButtonRow />
      </section>
    ),
  },
  {
    id: 2,
    render: (
      <section 
        className="section pb-0 pb-6 hero-row" 
        id="banner-2"
      >
        <ButtonRow />
      </section>
    ),
  },
  {
    id: 3,
    render: (
      
      <section 
        className="section pb-0 pb-6 hero-row" 
        id="banner-1"
      >
        <ButtonRow />
      </section>
    )
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
      <div
        style={{marginTop: 80}}
      >
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
          translate="no"
          // interval={120000}
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