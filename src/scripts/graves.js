import * as THREE from "three";
const generateGraves = () => {};

export const makeGraves = () => {
  const graves = new THREE.Group();

  const graveGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.2);
  const graveMaterial = new THREE.MeshStandardMaterial({ color: 0xb2b6b1 });

  for (let i = 0; i < 50; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 3 + Math.random() * 6;
    const x = Math.sin(angle) * radius;
    const y = Math.cos(angle) * radius;
    const grave = new THREE.Mesh(graveGeometry, graveMaterial);
    grave.position.set(x, 0.4, y);
    grave.rotation.y = Math.random() - 0.5 * 0.5;
    grave.rotation.z = Math.random() - 0.5 * 0.4;
    graves.add(grave);
  }

  return graves;
};
