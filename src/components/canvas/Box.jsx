import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Box = (props) => {
  return (
    <mesh scale={size * 2}>
      <boxGeometry />
      <meshStandardMaterial />
      <Html occlude distanceFactor={1.5} position={[0, 0, 0.51]} transform>
        <span>HI</span>
      </Html>
    </mesh>
  );
};

const BoxCanvas = ({ icon }) => {
  return (
    <Canvas camera={{ position: [2, 1, 5], fov: 25 }}>
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 5]} />
        <pointLight position={[-10, -10, -10]} />
        <Box imgUrl={icon} />
        <OrbitControls makeDefault />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BoxCanvas;
