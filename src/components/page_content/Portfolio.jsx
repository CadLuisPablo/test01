import React from "react";
import { FormattedMessage } from "react-intl";

const Portfolio = () => {
  return (
    <div className="w3-padding-64 w3-content" id="photos">
      <h2 className="w3-text-light-grey">
        <FormattedMessage id="portfolio.title" />
      </h2>
      <hr style={{ width: "200px" }} className="w3-opacity" />

      {/* Grid for photos */}
      <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
        <div className="w3-half">
          <img src="/w3images/portfolio/01.jpg" style={{ width: "100%", filter: "grayscale(70%)" }} alt="" />
          <img src="/w3images/portfolio/02.jpg" style={{ width: "100%", filter: "grayscale(70%)" }} alt="" />
          <img src="/w3images/portfolio/03.jpg" style={{ width: "100%", filter: "grayscale(70%)" }} alt="" />
          <img src="/w3images/portfolio/04.jpg" style={{ width: "100%", filter: "grayscale(70%)" }} alt="" />
        </div>

        <div className="w3-half">
          <img src="/w3images/portfolio/05.jpg" style={{ width: "100%", filter: "grayscale(70%)" }} alt="" />
          <img src="/w3images/portfolio/06.jpg" style={{ width: "100%", filter: "grayscale(70%)" }} alt="" />
          <img src="/w3images/portfolio/07.jpg" style={{ width: "100%", filter: "grayscale(70%)" }} alt="" />
        </div>
        {/* End photo grid */}
      </div>
      {/* End Portfolio Section */}
    </div>
  );
};

export default Portfolio;
