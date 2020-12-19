import React from "react";
// import './App.css';
import './Navbar.css';
import {NavLink} from 'react-router-dom';
import Logo from './images/Texe-logo.png';

const Navbar = () => {
  return (
    <>
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-11 mx-auto">
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    {/* <NavLink className="navbar-brand" to="/">CareerGrads</NavLink> */}
    <NavLink className="navbar-brand" to="/"><img src={Logo} alt="" className="img-fluid"/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse nav-list" id="navbarSupportedContent">
      <ul className="navbar-nav mr-0 mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName="menu-active" exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink activeClassName="menu-active" className="dropdown-item" to="/livecourses">Live Courses</NavLink></li>
            <li><NavLink activeClassName="menu-active" className="dropdown-item" to="/individualcourses">Individual Courses</NavLink></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu-active" className="nav-link" to="/tutorials">Tutorials</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu-active" className="nav-link" to="/internship">Internship</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu-active" className="nav-link" to="/blog">Blog</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu-active" className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
        <NavLink  className="nav-link btn" to="/login">LOGIN</NavLink>
        </li>
      </ul> 
      
    </div>
  </div>
</nav>
</div>
      </div>
    </div>
  
</>
  );
}

export default Navbar;
