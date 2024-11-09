import React from "react";
import { FaLinkedin, FaGooglePlay } from "react-icons/fa"; // Import icons
import "./App.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/privacy-policy" className="footer-link">
            Privacy Policy
          </a>
          <a href="/terms-and-conditions" className="footer-link">
            Terms & Conditions
          </a>
        </div>
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/gunjan1sharma/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BSwborCgcQXqvCMa%2BkqiDeQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>
          <a
            href="https://www.docbay.in"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            Docbay.in
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=your-app-id"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <FaGooglePlay size={20} /> Download on Play Store
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Gunjan Sharma. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
