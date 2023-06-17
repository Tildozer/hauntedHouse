import * as THREE from "three";
import * as dat from "lil-gui";

export const makeGUI = ({ ambientLight, moonLight }) => {
  const gui = new dat.GUI();

  gui
    .add(ambientLight, "intensity")
    .min(0)
    .max(1)
    .step(0.001)
    .name("Ambient light");

  const moonLightFolder = gui.addFolder("moonLight");
  moonLightFolder.close();

  const moonLightPositionFolder = moonLightFolder.addFolder("Position");
  moonLightPositionFolder.close();

  moonLightFolder.add(moonLight, "intensity").min(0).max(1).step(0.001);
  moonLightPositionFolder
    .add(moonLight.position, "x")
    .min(-5)
    .max(5)
    .step(0.001);
  moonLightPositionFolder
    .add(moonLight.position, "y")
    .min(-5)
    .max(5)
    .step(0.001);
  moonLightPositionFolder
    .add(moonLight.position, "z")
    .min(-5)
    .max(5)
    .step(0.001);
};
