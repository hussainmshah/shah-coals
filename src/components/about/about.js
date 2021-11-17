import React from "react";
import aboutImg from "../../assets/img/about.png";
const about = () => {
  return (
    <about>
      <div className="about-container">
        <img src={aboutImg} alt="About" />
        <div className="about-section">
          <h2>Award winning real estate company in Dubai</h2>
          <p>
            Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra
            scelerisque. Ipsum, turpis facilisis tempor pulvinar in lobortis
            ornare magna.
          </p>
          <div className="about-contentHolder">
            <div className="about-content">
              <p>Previous projects</p>
              <h2>34+</h2>
            </div>
            <div className="about-content">
              <p>years experience</p>
              <h2>20y</h2>
            </div>
            <div className="about-content">
              <p>Ongoing projects</p>
              <h2>12</h2>
            </div>
          </div>
        </div>
      </div>
    </about>
  );
};

export default about;
