import * as THREE from "three";

export const loadTextures = () => {
  const textureLoader = new THREE.TextureLoader();

  const doorAlphaTexture = textureLoader.load("/textures/door/alpha.jpg");
  const doorAmbientTexture = textureLoader.load(
    "/textures/door/ambientOcclusion.jpg"
  );
  const doorColorTexture = textureLoader.load("/textures/door/color.jpg");
  const doorHeightTexture = textureLoader.load("/textures/door/height.jpg");
  const doorMetalnessTexture = textureLoader.load(
    "/textures/door/metalness.jpg"
  );
  const doorNormalTexture = textureLoader.load("/textures/door/normal.jpg");
  const doorRougnessTexture = textureLoader.load(
    "/textures/door/roughness.jpg"
  );

  const brickAmbientTexture = textureLoader.load(
    "/textures/bricks/ambientOcclusion.jpg"
  );
  const brickColorTexture = textureLoader.load("/textures/bricks/color.jpg");
  const brickNormalTexture = textureLoader.load("/textures/bricks/normal.jpg");
  const brickRoughnessTexture = textureLoader.load(
    "/textures/bricks/roughness.jpg"
  );

  const grassAmbientTexture = textureLoader.load(
    "/textures/grass/ambientOcclusion.jpg"
  );
  const grassColorTexture = textureLoader.load("/textures/grass/color.jpg");
  const grassNormalTexture = textureLoader.load("/textures/grass/normal.jpg");
  const grassRoughnessTexture = textureLoader.load(
    "/textures/grass/roughness.jpg"
  );
  grassColorTexture.repeat.set(8, 8);
  grassNormalTexture.repeat.set(8, 8);
  grassAmbientTexture.repeat.set(8, 8);
  grassRoughnessTexture.repeat.set(8, 8);

  grassColorTexture.wrapS = THREE.RepeatWrapping;
  grassNormalTexture.wrapS = THREE.RepeatWrapping;
  grassAmbientTexture.wrapS = THREE.RepeatWrapping;
  grassRoughnessTexture.wrapS = THREE.RepeatWrapping;

  grassColorTexture.wrapT = THREE.RepeatWrapping;
  grassNormalTexture.wrapT = THREE.RepeatWrapping;
  grassAmbientTexture.wrapT = THREE.RepeatWrapping;
  grassRoughnessTexture.wrapT = THREE.RepeatWrapping;

  return {
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
  };
};
