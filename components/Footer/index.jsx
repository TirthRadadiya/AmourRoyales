import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <aside className="footer-brand">
          <div className="footer-icon"></div>
          <p className="brand-text">
            ATOMIC Industries Ltd.
            <br />
            Providing reliable atoms since 1945.
          </p>
        </aside>
        <nav className="mx-auto">
          <h6 className="footer-heading">Services</h6>
          <a className="footer-link">Branding</a>
          <a className="footer-link">Design</a>
          <a className="footer-link">Marketing</a>
          <a className="footer-link">Advertisement</a>
        </nav>
        <nav className="mx-auto">
          <h6 className="footer-heading">Company</h6>
          <a className="footer-link">About us</a>
          <a className="footer-link">Contact</a>
          <a className="footer-link">Jobs</a>
          <a className="footer-link">Press kit</a>
        </nav>
        <nav className="mx-auto">
          <h6 className="footer-heading">Legal</h6>
          <a className="footer-link">Terms of use</a>
          <a className="footer-link">Privacy policy</a>
          <a className="footer-link">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
