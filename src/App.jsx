import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Courses from "./Courses";
import Tutorials from "./Tutorials";
import Internship from "./Internship";
import Blog from "./Blog";
import Contact from "./Contact";
// import './App.css';

const App = () => {
  return (
    <>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/courses" component={Courses} />
      <Route path="/tutorials" component={Tutorials} />
      <Route path="/internship" component={Internship} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
    </Switch>
    </>
  );
}

export default App;
