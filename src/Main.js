import React from "react";
import "./App.css";
import FeaturedGraphicIcon from "./images/appimage_feature.webp";
import PlayIcon from "./images/appmanager.webp";
import ScreenshotOneIcon from "./images/shot1.png";
import ScreenshotTwoIcon from "./images/shot2.png";
import ScreenshotThreeIcon from "./images/shot3.png";
import ScreenshotFourIcon from "./images/shot4.png";
import ScreenshotFiveIcon from "./images/shot5.jpg";
import ScreenshotSixIcon from "./images/shot6.png";
import { Link } from "react-router-dom";

const screenshots = [
  ScreenshotOneIcon,
  ScreenshotTwoIcon,
  ScreenshotThreeIcon,
  ScreenshotFourIcon,
  ScreenshotFiveIcon,
  ScreenshotSixIcon,
];

export function Main() {
  return (
    <div className="app-container">
      <header className="hero glass-panel">
        <img src={PlayIcon} alt="Smart App Manager Icon" className="app-icon" />
        <h1>Smart App Manager</h1>
        <p className="short-description">
          Effortlessly manage all device apps and system apps with sort, share, and uninstall options.
        </p>
        
        <a 
          href="https://play.google.com/store/apps/details?id=com.geekforce.appmanager" 
          target="_blank" 
          rel="noopener noreferrer"
          className="download-btn"
        >
          Get it on Google Play
        </a>
      </header>

      <section className="featured">
        <img
          src={FeaturedGraphicIcon}
          alt="Featured Graphic"
          className="featured-graphic"
        />
      </section>

      <section className="description glass-panel">
        <p className="long-description">
          Smart App Manager is the ultimate Android tool for managing all
          device and system apps in one place, packed into a compact 10 MB
          app. Quickly find, filter, and manage apps on your device with
          features like sorting by name, size, and date added/modified in
          ascending or descending order. Easily share apps (APK files or Play
          Store links) with others, open app settings, uninstall unwanted
          apps, and access essential app details like package name, version,
          and app size. Get control over your apps with this powerful,
          user-friendly app manager built to streamline your app experience.
        </p>
      </section>

      <section className="screenshots">
        <h2>Beautiful Interface</h2>
        <div className="screenshots-carousel">
          {screenshots.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`App Interface Screenshot ${index + 1}`}
              className="screenshot animated"
            />
          ))}
        </div>
      </section>
      
      <div style={{ textAlign: 'center', marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <Link to="/privacy-policy" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy Policy</Link>
        <Link to="/terms-and-conditions" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Terms & Conditions</Link>
      </div>
    </div>
  );
}
