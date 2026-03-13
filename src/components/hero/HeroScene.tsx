"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Environment, MeshDistortMaterial } from "@react-three/drei";
import { Suspense } from "react";

function FloatingShape() {
  return (
    <Float
      speed={1.5}          // Float speed
      rotationIntensity={1} // Rotation intensity
      floatIntensity={2}    // Float range
    >
      <mesh scale={2.5}>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <MeshDistortMaterial
          color="#6C63FF"
          roughness={0.2}
          metalness={0.8}
          distort={0.3}       
          speed={2}            
        />
      </mesh>
    </Float>
  );
}

// A simple loading fallback for Suspense
function Loader() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#6C63FF" wireframe />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      className="!absolute inset-0"  
    >
      <Suspense fallback={<Loader />}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} color="#ff6b6b" intensity={0.5} />

        <FloatingShape />

        {/* HDRI environment for realistic reflections */}
        <Environment preset="city" />

        {/* Optional: let users rotate the object */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Suspense>
    </Canvas>
  );
}