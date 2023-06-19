import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "../../Model.jsx";
// import { Cube } from "../../Cube.jsx";
import { useIntl, FormattedMessage } from "react-intl";
// import Showroom from "./3d/Showroom.jsx";

const Home = () => {
  //Model Labels
  const intl = useIntl();
  const modelLabelFrontDoor = intl.formatMessage({ id: "model.label.frontDoor" });
  const modelLabelBackDoor = intl.formatMessage({ id: "model.label.backDoor" });

  return (
    <header className="w3-container w3-padding-32 w3-center w3-black" id="home">
      <h1 className="w3-jumbo">
        <span className="w3-hide-small">
          <FormattedMessage id="home.title.01" />
        </span>{" "}
        <FormattedMessage id="home.title.02" />
      </h1>

      <Canvas className="canvasStore" camera={{ position: [0, 2, -4] }}>
        <ambientLight intensity={"0.2"} />
        <pointLight position={[10, 10, 10]} />

        <OrbitControls target={[0, 0, 0]} enableDamping dampingFactor={0.03} position={[0, -1, 0]} />
        {/* <Cube modelLabelFrontDoor={modelLabelFrontDoor} /> */}
        <Model modelLabelFrontDoor={modelLabelFrontDoor} modelLabelBackDoor={modelLabelBackDoor} />
      </Canvas>

      <p>
        <FormattedMessage id="home.description" />
      </p>

      <img src="/w3images/home.main.jpg" alt="boy" className="w3-image" width="992" height="1108" />
    </header>
  );
};

export default Home;
