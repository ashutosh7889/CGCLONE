import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import IndividualCourses from "./IndividulaCourses";
import LiveCourses from "./LiveCourses";
// import './App.css';

const Courses = () => {
    return (
        <>
        {/* <Navbar /> */}
        <Switch>
        <Route exact path="/livecourses" component={LiveCourses} />
      <Route exact path="/individualcourses" component={IndividualCourses} />
          <Redirect to="/" />
        </Switch>
        </>
      );
}

export default Courses;
