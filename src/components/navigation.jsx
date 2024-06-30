import React from "react";
import logo from '../images/UrduX.svg';
import '../components/navigation.css';
export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top" style={{ padding: '0' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>
        <div className="navbar-header" style={{ display: 'flex', alignItems: 'center', margin: '0' }}>
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            style={{ margin: '0 10px 0 0' }}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top" style={{ padding: '0', height: 'auto' }}>
            <img src={logo} alt="Logo" style={{ maxWidth: '80px', height: 'auto' }} />
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
          style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}
        >
          <ul className="nav navbar-nav navbar-right" style={{ margin: '0', display: 'flex', alignItems: 'center' }}>
            <li><a href="#features" className="page-scroll">Features</a></li>
            <li><a href="#about" className="page-scroll">About</a></li>
            <li><a href="#services" className="page-scroll">Services</a></li>
            <li><a href="#portfolio" className="page-scroll">Gallery</a></li>
            <li><a href="#testimonials" className="page-scroll">Testimonials</a></li>
            <li><a href="#team" className="page-scroll">Team</a></li>
            <li><a href="#contact" className="page-scroll">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};