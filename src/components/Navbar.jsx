import { LangContext } from "../context/UserContext";
import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";

const Navbar = () => {
  const lang = useContext(LangContext);
  return (
    <>
      <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
        <div style={{ zIndex: 10 }}>
          <label id="label-select" htmlFor="language-select" style={{}}>
            <i className="fa fa-flag w3-xxlarge"></i>
          </label>
          <p>
            <select
              value={localStorage.getItem("lang")}
              id="language-select"
              name="language"
              style={{}}
              onChange={(event) => lang.setLang(event.target.value)}
            >
              <option value="de-DE">Deutsch</option>
              <option value="en-US">English</option>
              <option value="es-ES">Español</option>
              <option value="fr-FR">Français</option>
              <option value="it-IT">Italiano</option>
              <option value="ja-JP">日本語</option>
              <option value="ko-KR">한국어</option>
              <option value="pt-PT">Português</option>
              <option value="zh-CN">中文</option>
            </select>
          </p>
        </div>
        {/* Avatar image in top left corner */}
        <img src="/w3images/navbar.avatar.jpg" style={{ width: "100%" }} alt="" />
        <a href="#home" className="w3-bar-item w3-button w3-padding-large w3-black">
          <i className="fa fa-home w3-xxlarge"></i>
          <p>
            <FormattedMessage id="navbar.home" />
          </p>
        </a>
        <a href="#about" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
          <i className="fa fa-user w3-xxlarge"></i>
          <p>
            <FormattedMessage id="navbar.about" />
          </p>
        </a>
        <a href="#products" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
          <i className="fa fa-barcode w3-xxlarge"></i>
          <p>
            <FormattedMessage id="navbar.products" />
          </p>
        </a>
        <a href="#photos" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
          <i className="fa fa-eye w3-xxlarge"></i>
          <p>
            <FormattedMessage id="navbar.photos" />
          </p>
        </a>
        <a href="#contact" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
          <i className="fa fa-envelope w3-xxlarge"></i>
          <p>
            <FormattedMessage id="navbar.contact" />
          </p>
        </a>
      </nav>
      <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
        <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
          <div className="w3-bar-item w3-button" style={{ width: "25% !important" }}>
            <label id="label-select-s" htmlFor="language-select-s" style={{}}>
              <i className="fa fa-flag w3-small"></i>
            </label>

            <select
              value={localStorage.getItem("lang")}
              id="language-select-s"
              name="language"
              style={{ width: "10vw" }}
              onChange={(event) => lang.setLang(event.target.value)}
            >
              <option value="de-DE">DE</option>
              <option value="en-US">EN</option>
              <option value="es-ES">ES</option>
              <option value="fr-FR">FR</option>
              <option value="it-IT">IT</option>
              <option value="ja-JP">JP</option>
              <option value="ko-KR">KR</option>
              <option value="pt-PT">PT</option>
              <option value="zh-CN">CN</option>
            </select>
          </div>
          <a href="#home" className="w3-bar-item w3-button" style={{ width: "25% !important" }}>
            <FormattedMessage id="navbar.home" />
          </a>
          <a href="#about" className="w3-bar-item w3-button" style={{ width: "25% !important" }}>
            <FormattedMessage id="navbar.about" />
          </a>
          <a href="#photos" className="w3-bar-item w3-button" style={{ width: "25% !important" }}>
            <FormattedMessage id="navbar.photos" />
          </a>
          <a href="#contact" className="w3-bar-item w3-button" style={{ width: "25% !important" }}>
            <FormattedMessage id="navbar.contact" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
