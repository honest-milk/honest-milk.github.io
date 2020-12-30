import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect, HashRouter } from "react-router-dom";

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss?v1.1.0";
import "./assets/css/style.css";

import Index from "./content/Index";
import FAQ from "./content/FAQ";
import Terms from "./content/Terms";
import Refund from "./content/RefundPolicy";
import PrivacyPolicy from "./content/PrivacyPolicy";
import BlogPost from "./content/BlogPost";
import BookFreeSample from "./content/BookFreeSample";
import NavBar from "./content/Header";
import Footer from "./content/Footer";
import ContactMenu from "./content/ContactMenu";

ReactDOM.render(
  <HashRouter base="honest-milk">
    <NavBar />
    <ContactMenu />
    <Switch>
      <Route path="/book-sample" exact render={props => <BookFreeSample {...props}/>} />
      <Route path="/faq" exact render={props => <FAQ {...props}/>} />
      <Route path="/terms" exact render={props => <Terms {...props}/>} />
      <Route path="/privacy" exact render={props => <PrivacyPolicy {...props}/>} />
      <Route path="/refund" exact render={props => <Refund {...props}/>} />
      <Route path="/:id/blog-post" exact render={props => <BlogPost {...props}/>} />
      <Route path="/" render={props => <Index {...props} />} />
      <Redirect to="/" />
    </Switch>
    <Footer />
  </HashRouter>,
  // <div>
  //   Hey
  // </div>,
  document.getElementById("root")
);
