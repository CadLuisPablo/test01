// import { injectIntl } from "react-intl";
import { Html } from "@react-three/drei";
import { LangContext } from "./context/UserContext";
import React, { useContext } from "react";

const Cube = (props) => {
  const modelLabelFrontDoor = props.modelLabelFrontDoor;

  return (
    <>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="orange" />
        <HtmlCode modelLabelFrontDoor={modelLabelFrontDoor} />
      </mesh>
    </>
  );
};

const HtmlCode = (props) => {
  console.log(props.txtHome);
  // const txtAbout = <FormattedMessage id="navbar.about" />;
  // const txtPhotos = <FormattedMessage id="navbar.photos" />;
  // const txtContact = <FormattedMessage id="navbar.contact" />;
  const lang = useContext(LangContext);
  return (
    <>
      <Html transform position={(1, 1, 1)}>
        <nav className="w3-bar-block w3-small w3-hide-small w3-center">
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
            <p>{props.modelLabelFrontDoor}</p>
          </a>
          <a href="#about" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i className="fa fa-user w3-xxlarge"></i>
            {/* <p>{txtAbout}</p> */}
          </a>
          <a href="#photos" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i className="fa fa-eye w3-xxlarge"></i>
            {/* <p>{txtPhotos}</p> */}
          </a>
          <a href="#contact" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i className="fa fa-envelope w3-xxlarge"></i>
            {/* <p>{txtContact}</p> */}
          </a>
        </nav>
      </Html>
    </>
  );
};
export { Cube };
