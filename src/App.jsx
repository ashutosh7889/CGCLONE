import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
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
      <Route exact path="/" component={Home} />
      <Route exact path="/courses" component={Courses} />
      <Route exact path="/tutorials" component={Tutorials} />
      <Route exact path="/internship" component={Internship} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" />
    </Switch>
    </>
  );
}

export default App;
