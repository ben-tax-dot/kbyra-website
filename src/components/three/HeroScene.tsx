"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function TechOrb() {
  const mesh = useRef<THREE.Mesh>(null);

  const material = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color("#a5b4fc"),
      metalness: 0.45,
      roughness: 0.22,
      emissive: new THREE.Color("#60a5fa"),
      emissiveIntensity: 0.4,
    });
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!mesh.current) return;

    // base animation
    mesh.current.rotation.y = t * 0.25;
    mesh.current.rotation.x = Math.sin(t * 0.35) * 0.12;

    // mouse parallax (subtle)
    const mx = (state.pointer.x ?? 0) * 0.35;
    const my = (state.pointer.y ?? 0) * 0.25;
    mesh.current.rotation.y += mx * 0.06;
    mesh.current.rotation.x += my * 0.06;

    // gentle floating
    mesh.current.position.y = Math.sin(t * 0.6) * 0.06;
  });

  return (
    <mesh ref={mesh} material={material}>
      <icosahedronGeometry args={[1.2, 18]} />
    </mesh>
  );
}

function MovingRimLight() {
  const light = useRef<THREE.DirectionalLight>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!light.current) return;

    light.current.position.x = Math.sin(t * 0.25) * 2.3;
    light.current.position.z = Math.cos(t * 0.25) * 2.3;
  });

  return <directionalLight ref={light} intensity={1.2} position={[2, 2, 2]} />;
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3.2], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.35} />
      <MovingRimLight />
      <pointLight intensity={0.7} position={[-2, 0.8, 2]} />
      <TechOrb />

      <Environment preset="city" />

      <EffectComposer>
        <Bloom
          intensity={0.75}
          luminanceThreshold={0.25}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>
    </Canvas>
  );
}