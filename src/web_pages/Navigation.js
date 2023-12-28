import React from "react";
// Navigation component for the website
function Navigation(User) {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary border-bottom" data-bs-theme="dark">
      <div className="container">
        {/* Brand/logo */}
        <a className="navbar-brand" href="/">
          Dharmang Designs
        </a>
        {/* Toggle button for mobile navigation */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navigation links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Home link */}
            <li className="nav-item px-3">
              <a className="nav-link text-white" href="/" id="home">
                Home
              </a>
            </li>
            {/* About link */}
            <li className="nav-item px-3">
              <a className="nav-link text-white" href="/about" id="about">
                About
              </a>
            </li>
            {/* Services link */}
            <li className="nav-item px-3">
              <a className="nav-link text-white" href="/services" id="services">
                Services
              </a>
            </li>
            {/* News Updates link */}
            <li className="nav-item px-3">
              <a className="nav-link text-white" href="/news_update" id="newsupdates">
                News Updates
              </a>
            </li>
            {/* Contact link */}
            <li className="nav-item px-3">
              <a className="nav-link text-white" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navigation;
