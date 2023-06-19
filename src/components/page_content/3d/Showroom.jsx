import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "../../../Model.jsx";
import { FormattedMessage } from "react-intl";

const Showroom = () => {
  <Canvas shadows eventSource={document.getElementById("root")} eventPrefix="client">
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Suspense fallback={null}>
      <OrbitControls target={[0, 0, 0]} enableDamping dampingFactor={0.03} position={[0, -1, 0]} />

      <Model texto={<FormattedMessage id="loader.text" />} />
    </Suspense>
  </Canvas>;
};

export default Showroom;
