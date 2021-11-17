import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Hero from "./components/hero";
import About from "./components/about";
import Project from "./components/project";
import Testimonial from "./components/testimonial";
import Contact from "./components/contact";
import Footer from "./components/footer"
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Fragment>
      <Hero />
      <About />
      <Project />
      <Testimonial/>
      <Contact/>
      <Footer/>
    </Fragment>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
