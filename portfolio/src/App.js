import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";



function App() {
  return (
    <div>
      <Header></Header>
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
      <Footer></Footer>
    </div>
  );
}

export default App;
