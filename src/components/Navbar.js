// keep first letter capital of filename in components folder

// react function based component , shortcut - rfc
import React from "react";
//import PropTypes from 'prop-types'

export default function Navbar(props) {
  
  return (
    //<nav className="navbar navbar-expand-lg navbar-light bg-light">  // here color is static = light
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >             {/* -> here coloring is dynamic*/}
      {/*  in className, {} is applied to say that I am using js here and use `` backticks and then use ${} for variable */}
    
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.aboutText}
              </a>
            </li>
          </ul>
          <form className="d-flex mx-2" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          {/* switch */}
          {/* <div className={`form-check form-switch text-${props.mode}`}> */}
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input
              className="form-check-input"
              onClick={props.toggleMode}  // color(mode) is changed when this fn is called and that is reflected in props.mode value
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >
              Toggle Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Navbar.propTypes = {title: PropTypes.string.isRequired,
//                     aboutText: PropTypes.string
//                   };

// Navbar.defaultProps = {
//                         title: 'Def Title',
//                         aboutText: 'Def about'
// };
// this will run if props not passed from App.js
