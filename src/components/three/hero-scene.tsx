"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import type { Group, Mesh } from "three";
import * as THREE from "three";

function CodeCube() {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.25;
    ref.current.rotation.y += delta * 0.35;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={ref} position={[1.4, 0.2, 0]}>
        <boxGeometry args={[1.1, 1.1, 1.1]} />
        <meshStandardMaterial
          color="#0ea5e9"
          emissive="#0891b2"
          emissiveIntensity={0.45}
          metalness={0.7}
          roughness={0.2}
          transparent
          opacity={0.85}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function GlowingOrb({
  position,
  color,
  scale = 1,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
}) {
  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.6}>
      <Sphere args={[0.55 * scale, 48, 48]} position={position}>
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          roughness={0.15}
          metalness={0.4}
          distort={0.35}
          speed={2}
          transparent
          opacity={0.9}
        />
      </Sphere>
    </Float>
  );
}

function NetworkNodes() {
  const group = useRef<Group>(null);
  const points = useMemo(() => {
    const pts: [number, number, number][] = [];
    for (let i = 0; i < 18; i++) {
      const a = (i / 18) * Math.PI * 2;
      pts.push([
        Math.cos(a) * 2.2,
        Math.sin(a * 1.4) * 0.9,
        Math.sin(a) * 1.4,
      ]);
    }
    return pts;
  }, []);

  const lineGeom = useMemo(() => {
    const positions: number[] = [];
    for (let i = 0; i < points.length; i++) {
      const a = points[i];
      const b = points[(i + 3) % points.length];
      positions.push(...a, ...b);
    }
    const geom = new THREE.BufferGeometry();
    geom.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    return geom;
  }, [points]);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.12;
  });

  return (
    <group ref={group} position={[-1.5, -0.2, -0.5]} scale={0.75}>
      <lineSegments geometry={lineGeom}>
        <lineBasicMaterial color="#67e8f9" transparent opacity={0.35} />
      </lineSegments>
      {points.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.05, 12, 12]} />
          <meshStandardMaterial
            color="#2dd4bf"
            emissive="#2dd4bf"
            emissiveIntensity={1.2}
          />
        </mesh>
      ))}
    </group>
  );
}

function PhoneMock() {
  const ref = useRef<Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.5) * 0.25 + 0.35;
    ref.current.rotation.x = -0.15;
  });

  return (
    <Float speed={1.2} floatIntensity={0.9}>
      <group ref={ref} position={[0.1, -0.5, 0.8]} scale={0.85}>
        <mesh>
          <boxGeometry args={[0.7, 1.35, 0.08]} />
          <meshStandardMaterial
            color="#0f172a"
            metalness={0.8}
            roughness={0.25}
          />
        </mesh>
        <mesh position={[0, 0, 0.045]}>
          <planeGeometry args={[0.58, 1.15]} />
          <meshStandardMaterial
            color="#134e4a"
            emissive="#14b8a6"
            emissiveIntensity={0.55}
          />
        </mesh>
      </group>
    </Float>
  );
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[4, 3, 2]} intensity={1.4} color="#67e8f9" />
      <pointLight position={[-3, -1, 2]} intensity={0.9} color="#2dd4bf" />
      <spotLight
        position={[0, 5, 2]}
        angle={0.45}
        penumbra={0.7}
        intensity={1.2}
        color="#e0f2fe"
      />
      <GlowingOrb position={[-0.2, 0.8, -1]} color="#2dd4bf" scale={1.15} />
      <GlowingOrb position={[2.1, -0.8, -0.5]} color="#38bdf8" scale={0.55} />
      <CodeCube />
      <NetworkNodes />
      <PhoneMock />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.8, 0]}>
        <planeGeometry args={[12, 12, 24, 24]} />
        <meshStandardMaterial
          color="#0b1220"
          wireframe
          transparent
          opacity={0.22}
        />
      </mesh>
    </>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-0">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.4, 5.2], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
