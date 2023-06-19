import { FormattedMessage } from "react-intl";

const About = () => {
  return (
    <div className="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
      <h2 className="w3-text-light-grey">
        <FormattedMessage id="about.title" />
      </h2>
      <hr style={{ width: "200px" }} className="w3-opacity" />
      <p>
        <FormattedMessage id="about.text.01" />+
      </p>
      <p>
        <FormattedMessage id="about.text.02" />
      </p>
      <p>
        <FormattedMessage id="about.text.03" />
      </p>
      <p>
        <FormattedMessage id="about.text.04" />
      </p>
      <p>
        <FormattedMessage id="about.text.05" />
      </p>
      <p>
        <FormattedMessage id="about.text.06" />
      </p>

      <h3 className="w3-padding-16 w3-text-light-grey">
        <FormattedMessage id="about.skills.title" />
      </h3>
      <p className="w3-wide">
        <FormattedMessage id="about.skills.welding" />
      </p>
      <div className="w3-white">
        <div className="w3-dark-grey" style={{ height: "28px", width: "98%" }}></div>
      </div>
      <p className="w3-wide">
        <FormattedMessage id="about.skills.forge" />
      </p>
      <div className="w3-white">
        <div className="w3-dark-grey" style={{ height: "28px", width: "95%" }}></div>
      </div>
      <p className="w3-wide">
        <FormattedMessage id="about.skills.machining" />
      </p>
      <div className="w3-white">
        <div className="w3-dark-grey" style={{ height: "28px", width: "85%" }}></div>
      </div>
      <p className="w3-wide">
        <FormattedMessage id="about.skills.planes" />
      </p>
      <div className="w3-white">
        <div className="w3-dark-grey" style={{ height: "28px", width: "80%" }}></div>
      </div>
      <br />

      <div className="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
        <div className="w3-quarter w3-section">
          <span className="w3-xlarge">11+</span>
          <br />
          <FormattedMessage id="about.skills.partners" />
        </div>
        <div className="w3-quarter w3-section">
          <span className="w3-xlarge">55+</span>
          <br />
          <FormattedMessage id="about.skills.projects" />
        </div>
        <div className="w3-quarter w3-section">
          <span className="w3-xlarge">89+</span>
          <br />
          <FormattedMessage id="about.skills.clients" />
        </div>
        <div className="w3-quarter w3-section">
          <span className="w3-xlarge">150+</span>
          <br />
          <FormattedMessage id="about.skills.meetings" />
        </div>
      </div>

      {/* DOWNLOAD RESUME */}
      {/* <button className="w3-button w3-light-grey w3-padding-large w3-section">
        <i className="fa fa-download"></i> Download Resume
      </button> */}

      {/* Testimonials */}
      <h3 className="w3-padding-24 w3-text-light-grey">
        <FormattedMessage id="about.reputation.title" />
      </h3>
      <img src="/w3images/bandmember.jpg" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: "80px" }} />
      <p>
        <span className="w3-large w3-margin-right">
          <FormattedMessage id="about.reputation.01.name" />
        </span>{" "}
        <FormattedMessage id="about.reputation.01.position" />
      </p>
      <p>
        <FormattedMessage id="about.reputation.01.comment" />
      </p>
      <br />

      <img src="/w3images/avatar_g2.jpg" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: "80px" }} />
      <p>
        <span className="w3-large w3-margin-right">
          <FormattedMessage id="about.reputation.02.name" />
        </span>{" "}
        <FormattedMessage id="about.reputation.02.position" />
      </p>
      <p>
        <FormattedMessage id="about.reputation.02.comment" />
      </p>
      {/* End About Section */}
    </div>
  );
};

export default About;
