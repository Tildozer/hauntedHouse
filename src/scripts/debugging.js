import * as THREE from "three";
import * as dat from "lil-gui";

export const makeGUI = ({ ambientLight, moonLight, camera, fog }) => {
  const gui = new dat.GUI();

  gui
    .add(ambientLight, "intensity")
    .min(0)
    .max(1)
    .step(0.001)
    .name("Ambient light");

  gui.add(fog, "far").min(2).max(15).step(0.01).name("Visibilty range");

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

  const cameraFolder = gui.addFolder("camera");
  cameraFolder.close();
  const cameraPositionFolder = cameraFolder.addFolder("positions");
  cameraPositionFolder.add(camera.position, "x").min(-10).max(10).step(0.01);
  cameraPositionFolder.add(camera.position, "y").min(-10).max(10).step(0.01);
  cameraPositionFolder.add(camera.position, "z").min(-10).max(10).step(0.01);

  cameraFolder.hide();
};
