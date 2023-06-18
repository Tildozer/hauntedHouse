import * as THREE from "three";

export const makeHouse = ({
  doorAlphaTexture,
  doorAmbientTexture,
  doorColorTexture,
  doorHeightTexture,
  doorMetalnessTexture,
  doorNormalTexture,
  doorRougnessTexture,
  brickAmbientTexture,
  brickColorTexture,
  brickNormalTexture,
  brickRoughnessTexture,
  grassAmbientTexture,
  grassColorTexture,
  grassNormalTexture,
  grassRoughnessTexture,
}) => {
  const house = new THREE.Group();

  const wallHeight = 2.5;
  const wallWidth = 4;
  const wallDepth = wallWidth;
  const WallTextures = {
    brickAmbientTexture,
    brickColorTexture,
    brickNormalTexture,
    brickRoughnessTexture,
  };
  const walls = makeWalls(wallWidth, wallHeight, wallDepth, WallTextures);
  walls.position.y = wallHeight * 0.5;

  const roofHeight = 1;
  const roof = makeRoof(roofHeight);
  roof.position.y = wallHeight + roofHeight * 0.5;
  roof.rotation.y = Math.PI * 0.25;

  const doorHeight = 2.2;
  const doorTextures = {
    doorAlphaTexture,
    doorAmbientTexture,
    doorColorTexture,
    doorHeightTexture,
    doorMetalnessTexture,
    doorNormalTexture,
    doorRougnessTexture,
  };
  const door = makeDoor(doorHeight, doorTextures);
  door.position.y = doorHeight * 0.5 - 0.2;
  door.position.z = wallDepth * 0.5 + 0.01;
  const bushTextures = {
    grassAmbientTexture,
    grassColorTexture,
    grassNormalTexture,
    grassRoughnessTexture,
  };
  const [bush1, bush2, bush3, bush4] = makeBushes(4, bushTextures);
  bush1.scale.set(0.5, 0.5, 0.5);
  bush1.position.set(0.8, 0.2, 2.2);

  bush2.scale.set(0.25, 0.25, 0.25);
  bush2.position.set(1.4, 0.1, 2.1);

  bush3.scale.set(0.4, 0.4, 0.4);
  bush3.position.set(-0.8, 0.1, 2.2);

  bush4.scale.set(0.15, 0.15, 0.15);
  bush4.position.set(-1, 0.05, 2.6);

  house.add(walls, roof, door, bush1, bush2, bush3, bush4);

  return {house, walls, door, bush1, bush2, bush3, bush4};
};

function makeDoor(
  doorHeight,
  {
    doorAlphaTexture,
    doorAmbientTexture,
    doorColorTexture,
    doorHeightTexture,
    doorMetalnessTexture,
    doorNormalTexture,
    doorRougnessTexture,
  }
) {
  const door = new THREE.Mesh(
    new THREE.PlaneGeometry(2.2, doorHeight, 100, 100),
    new THREE.MeshStandardMaterial({
      map: doorColorTexture,
      transparent: true,
      alphaMap: doorAlphaTexture,
      aoMap: doorAmbientTexture,
      aoMapIntensity: 4,
      displacementMap: doorHeightTexture,
      displacementScale: 0.1,
      normalMap: doorNormalTexture,
      metalnessMap: doorMetalnessTexture,
      roughnessMap: doorRougnessTexture,
    })
  );

  door.geometry.setAttribute(
    "uv2",
    new THREE.Float32BufferAttribute(door.geometry.attributes.uv.array, 2)
  );

  return door;
}

function makeWalls(
  wallWidth,
  wallHeight,
  wallDepth,
  { brickAmbientTexture, brickColorTexture, brickNormalTexture, brickRoughnessTexture }
) {
  const walls = new THREE.Mesh(
    new THREE.BoxGeometry(wallWidth, wallHeight, wallDepth),
    new THREE.MeshStandardMaterial({
      map: brickColorTexture,
      aoMap: brickAmbientTexture,
      normalMap: brickNormalTexture,
      roughnessMap: brickRoughnessTexture,
    })
  );

  walls.geometry.setAttribute(
    'uv2',
    new THREE.Float32BufferAttribute(walls.geometry.attributes.uv.array, 2),
  )

  return walls;
}

function makeRoof(roofHeight) {
  const roof = new THREE.Mesh(
    new THREE.ConeGeometry(3.5, roofHeight, 4),
    new THREE.MeshStandardMaterial({ color: 0xb35f45 })
  );

  return roof;
}

function makeBushes(
  numberOfBushes,
  {
    grassAmbientTexture,
    grassColorTexture,
    grassNormalTexture,
    grassRoughnessTexture,
  }
) {
  const bushGeometry = new THREE.SphereGeometry(1, 16, 16);
  const bushMaterial = new THREE.MeshStandardMaterial({ color: 0x89c854 });

  const bushes = [];
  for (let i = 0; i < numberOfBushes; i++) {
    const bush = new THREE.Mesh(bushGeometry, bushMaterial);
    bushes.push(bush);
  }
  return bushes;
}
