import * as THREE from "three";

const makeWalls = (wallWidth, wallHeight, wallDepth) => {
  const walls = new THREE.Mesh(
    new THREE.BoxGeometry(wallWidth, wallHeight, wallDepth),
    new THREE.MeshStandardMaterial({ color: 0xac8e82 })
  );

  return walls;
};

const makeRoof = (roofHeight) => {
  const roof = new THREE.Mesh(
    new THREE.ConeGeometry(3.5, roofHeight, 4),
    new THREE.MeshStandardMaterial({ color: 0xb35f45 })
  );

  return roof;
};

const makeDoor = (doorHeight) => {
  const door = new THREE.Mesh(
    new THREE.PlaneGeometry(2, doorHeight),
    new THREE.MeshStandardMaterial({ color: 0xaa7b7b })
  );

  return door;
};

const makeBushes = (numberOfBushes) => {
  const bushGeometry = new THREE.SphereGeometry(1, 16, 16);
  const bushMaterial = new THREE.MeshStandardMaterial({ color: 0x89c854 });

  const bushes = [];
  for (let i = 0; i < numberOfBushes; i++) {
    const bush = new THREE.Mesh(bushGeometry, bushMaterial);
    bushes.push(bush);
  }
  return bushes;
};

export const makeHouse = () => {
  const house = new THREE.Group();

  const wallHeight = 2.5;
  const wallWidth = 4;
  const wallDepth = wallWidth;
  const walls = makeWalls(wallWidth, wallHeight, wallDepth);
  walls.position.y = wallHeight * 0.5;

  const roofHeight = 1;
  const roof = makeRoof(roofHeight);
  roof.position.y = wallHeight + roofHeight * 0.5;
  roof.rotation.y = Math.PI * 0.25;

  const doorHeight = 2;
  const door = makeDoor(doorHeight);
  door.position.y = doorHeight * 0.5;
  door.position.z = wallDepth * 0.5 + 0.01;

  const [bush1, bush2, bush3, bush4] = makeBushes(4);
  bush1.scale.set(0.5, 0.5, 0.5);
  bush1.position.set(0.8, 0.2, 2.2);

  bush2.scale.set(0.25, 0.25, 0.25);
  bush2.position.set(1.4, 0.1, 2.1);

  bush3.scale.set(0.4, 0.4, 0.4);
  bush3.position.set(-0.8, 0.1, 2.2);

  bush4.scale.set(0.15, 0.15, 0.15);
  bush4.position.set(-1, 0.05, 2.6);

  house.add(walls, roof, door, bush1, bush2, bush3, bush4);

  return house;
};
