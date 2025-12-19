import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>KINGS</h1>
          <p>Events & Weddings</p>
        </div>

        <div className="tag">
          <label>Newsletter</label>
          <div>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
          <p>
            Sign up with your email address to receive news and updates about our
            latest events and services.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 KINGS Events | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
