import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Tutorials from "./Tutorials";
import Internship from "./Internship";
import Blog from "./Blog";
import Contact from "./Contact";
import Navbar from "./Navbar";
import LiveCourses from "./LiveCourses";
import IndividualCourses from "./IndividulaCourses";
// import './App.css';

const App = () => {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/livecourses" component={LiveCourses} />
      <Route exact path="/individualcourses" component={IndividualCourses} />
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
