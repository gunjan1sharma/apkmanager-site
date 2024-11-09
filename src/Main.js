import React from "react";
import "./App.css";
import FeaturedGraphicIcon from "./images/featured-graphic.png";
import PlayIcon from "./images/featured-graphic.png";
import ScreenshotOneIcon from "./images/shot1.png";
import ScreenshotTwoIcon from "./images/shot2.png";
import ScreenshotThreeIcon from "./images/shot3.png";
import ScreenshotFourIcon from "./images/shot4.png";
import ScreenshotFiveIcon from "./images/shot5.jpg";
import ScreenshotSixIcon from "./images/shot6.png";
import { Footer } from "./Footer";

const screenshots = [
  ScreenshotOneIcon,
  ScreenshotTwoIcon,
  ScreenshotThreeIcon,
  ScreenshotFourIcon,
  ScreenshotFiveIcon,
  ScreenshotSixIcon,
];

export function Main(params) {
  return (
    <div>
      {" "}
      <div className="app-container">
        <header className="header">
          <img src={PlayIcon} alt="App Icon" className="app-icon" />
          <h1>Smart App Manager - Sort, Share, Manage Apps</h1>
        </header>

        <section className="featured">
          <img
            src={FeaturedGraphicIcon}
            alt="Featured Graphic"
            className="featured-graphic"
          />
        </section>

        <section className="description">
          <p className="short-description">
            Effortlessly manage all device apps and system apps with sort,
            share, and uninstall options.
          </p>
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
          <h2>Screenshots</h2>
          <div className="screenshots-carousel">
            {[...screenshots, ...screenshots].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Screenshot ${index + 1}`}
                className="screenshot animated"
              />
            ))}
          </div>
        </section>

        {/* <Footer /> */}
      </div>
    </div>
  );
}
