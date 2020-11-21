
import React from "react";

// index page sections
import Hero from "./HeroCarousel2";
import AboutUs from "./AboutUs";
import Features from "./Features";
import ContactUs from "./ContactUs2";
import BookVisit from './BookVisit';
import HowItWorks from './HowItWorks';
import Purity from './Purity';
import Blog from './Blog';

class Index extends React.Component {
  render() {
    return (
      <>
        <main ref="main">
          <Hero />
          <AboutUs />
          <Features />
          <Blog />
          <Purity />
          <BookVisit />
          <HowItWorks />
          <ContactUs />
        </main>
      </>
    );
  }
}

export default Index;
