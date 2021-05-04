import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";



function App() {
  return (
    <HashRouter>
      <div>

        <Route exact path="/" component={About} />
        <Route exact path="/index" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />

      </div>
    </HashRouter>
  );
}

export default App;
