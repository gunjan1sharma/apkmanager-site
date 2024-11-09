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
import { Main } from "./Main";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Terms } from "./Terms";

const screenshots = [
  ScreenshotOneIcon,
  ScreenshotTwoIcon,
  ScreenshotThreeIcon,
  ScreenshotFourIcon,
  ScreenshotFiveIcon,
  ScreenshotSixIcon,
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />{" "}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
