import { useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Html } from "@react-three/drei";
import { LoopRepeat } from "three";

export default function Model(props) {
  //Model Labels
  const modelLabelFrontDoor = props.modelLabelFrontDoor;
  const modelLabelBackDoor = props.modelLabelBackDoor;

  const { nodes, animations } = useGLTF("/Feeder.glb");
  const { ref, actions } = useAnimations(animations);

  function Primitive({ objectMesh, label, labelPosition, actionName }) {
    const [playingAction, setPlayingAction] = useState(false);
    function handleClick(actionName, playingState, setPlayingState) {
      actions[actionName].setLoop(LoopRepeat, 0); // Without loop
      actions[actionName].clampWhenFinished = true; // Hold the last frame on screen
      if (!playingState) {
        actions[actionName].play().paused = false; // Play
        actions[actionName].timeScale = 0.5; // Direction
        setPlayingState(true); // Change State
      }
      if (playingState) {
        actions[actionName].play().paused = false; // Play
        actions[actionName].timeScale = -0.5; // Direction
        setPlayingState(false); // Change State
      }
    }
    function HtmlCode({ label, actionName }) {
      if (label) {
        return (
          <Html occlude={true} distanceFactor={10} position={labelPosition}>
            <div className="annotation" onClick={() => handleClick(actionName, playingAction, setPlayingAction)}>
              {label}
            </div>
          </Html>
        );
      }
    }
    return (
      <>
        <primitive object={nodes[objectMesh]}>
          <HtmlCode label={label} actionName={actionName} />
        </primitive>
      </>
    );
  }

  return (
    <>
      <group ref={ref}>
        <Primitive
          objectMesh={"Feeder_Front_Door"}
          label={modelLabelFrontDoor}
          labelPosition={[1.7, 0.85, 0]}
          actionName={"Feeder_Front_DoorAction"}
        />

        <Primitive
          objectMesh={"Feeder_Back_Door"}
          label={modelLabelBackDoor}
          labelPosition={[-1.7, 0.85, 0]}
          actionName={"Feeder_Back_DoorAction"}
        />
        <Primitive objectMesh={"Feeder_Stand"} />
        <Primitive objectMesh={"Feeder_Basket"} />
        <Primitive objectMesh={"Feeder_Roof"} />
        <Primitive objectMesh={"Hay_Bale"} />
      </group>
    </>
  );
}
