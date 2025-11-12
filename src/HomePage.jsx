import React from "react";
import "./HomePage.css";
import Navbar from "./Components/Navbar";
function HomePage() {
  return (
    <div className="homepage-section">
      <Navbar />
      <div className="homepage-container">
        <div className="bg-banner">
          <h1 className="title-01">Instagram Video Downloader</h1>
          <div className="input-section">
            <input
              type="text"
              className="input-url"
              placeholder="Paste Instagram video link here"
            />
            <button className="download-btn">Download</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
