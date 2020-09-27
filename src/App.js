import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;
