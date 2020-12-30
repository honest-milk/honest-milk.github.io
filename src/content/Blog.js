
import React from "react";
import {Link} from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import {
  Card,
  Container,
  Row,
  CardImg,
  CardImgOverlay, 
  CardTitle, 
  CardText
} from "reactstrap";

import blog1 from "../assets/img/blogs/blog1.jpeg";
import blog2 from "../assets/img/blogs/blog2.jpeg";
import blog3 from "../assets/img/blogs/blog3.jpeg";
import blog4 from "../assets/img/blogs/blog4.jpeg";

import blogs from './blogs';
const images = [
  blog1,
  blog3,
  blog2,
  blog4,
]

class Features extends React.Component {
  state = {};
  componentDidMount() {
  }
  render() {
    let {showHeader = true} = this.props;
    return (
      <>
        <section className="section section-lg pt-0" id="blog">
          <Container>
            { showHeader && <h1>
              Blog
            </h1>}
            <Row className="justify-content-center mt-4">
              <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                containerClass="container"
                draggable
                focusOnSelect={false}
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={true}
                renderDotsOutside={true}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024
                    },
                    items: 3,
                    partialVisibilityGutter: 40
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                  }
                }}
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >
                {
                  blogs.map((blog, i) => (
                    <Link key={i.toString()} to={`/${i+1}/blog-post`}>
                    <Card className="border-0 ms-2" style={{flexGrow: 1}} >
                      <CardImg 
                        className="card-image" 
                        width="100%" 
                        src={images[i]} 
                        alt="Card image cap" 
                      />
                      <CardImgOverlay>
                        <CardTitle>
                          <h3 className="text-white">
                            {blog.title}
                          </h3>
                        </CardTitle>
                        <CardText className="text-white d-none d-md-block">
                          {blog.subtitle}
                        </CardText>
                      </CardImgOverlay>
                    </Card>
                    </Link>
                  ))
                }
              </Carousel>
            </Row>
          </Container>
        </section>
      
      </>
    );
  }
}

export default Features;

