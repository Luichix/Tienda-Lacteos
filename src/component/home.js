import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./footer";
import Main from "./main";
import Carousel from "./links";
import Slider from "./slider";
import banArr from "./images";

function Home() {
  return (
    <Router>
      <Slider slides={banArr} autoPlay={10} />
      <Main />
      <Carousel />
      <Footer />
    </Router>
  );
}

export default Home;
