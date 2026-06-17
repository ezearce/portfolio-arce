import * as THREE from 'three';
import { useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Float,
  ContactShadows,
  Environment,
  PresentationControls,
  RoundedBox,
} from '@react-three/drei';

function Mate({ steaming, ...props }) {
  const bombillaRef = useRef();

  const lathePoints = useMemo(() => {
    const pts = [];
    pts.push(new THREE.Vector2(0, 0));
    pts.push(new THREE.Vector2(0.4, 0));
    pts.push(new THREE.Vector2(0.58, 0.08));
    pts.push(new THREE.Vector2(0.62, 0.25));
    pts.push(new THREE.Vector2(0.58, 0.5));
    pts.push(new THREE.Vector2(0.42, 0.7));
    pts.push(new THREE.Vector2(0.34, 0.82));
    pts.push(new THREE.Vector2(0.34, 0.88));
    pts.push(new THREE.Vector2(0.31, 0.88));
    return pts;
  }, []);

  return (
    <group {...props}>
      {/* Calabaza */}
      <mesh castShadow receiveShadow>
        <latheGeometry args={[lathePoints, 64]} />
        <meshStandardMaterial color="#7a3e1a" roughness={0.65} metalness={0.05} />
      </mesh>
      {/* Yerba */}
      <mesh position={[0, 0.86, 0]} castShadow>
        <cylinderGeometry args={[0.3, 0.3, 0.04, 32]} />
        <meshStandardMaterial color="#6b8e4f" roughness={0.95} />
      </mesh>
      {/* Virola (aro dorado) */}
      <mesh position={[0, 0.86, 0]} castShadow>
        <torusGeometry args={[0.33, 0.025, 12, 48]} />
        <meshStandardMaterial color="#c9954d" metalness={0.75} roughness={0.3} />
      </mesh>
      {/* Bombilla */}
      <group position={[0.18, 0.88, 0]} rotation={[0, 0, -0.22]}>
        <mesh ref={bombillaRef} castShadow>
          <cylinderGeometry args={[0.025, 0.025, 0.85, 16]} />
          <meshStandardMaterial color="#d4d4d4" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Boquilla */}
        <mesh position={[0, 0.42, 0]} castShadow>
          <cylinderGeometry args={[0.035, 0.025, 0.08, 16]} />
          <meshStandardMaterial color="#c9954d" metalness={0.7} roughness={0.35} />
        </mesh>
      </group>
    </group>
  );
}

function Termo({ steaming, ...props }) {
  return (
    <group {...props}>
      {/* Cuerpo */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.3, 0.34, 1.5, 48]} />
        <meshStandardMaterial color="#b23a48" roughness={0.35} metalness={0.25} />
      </mesh>
      {/* Banda decorativa */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.305, 0.305, 0.05, 48]} />
        <meshStandardMaterial color="#1f1a15" roughness={0.5} />
      </mesh>
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.315, 0.32, 0.05, 48]} />
        <meshStandardMaterial color="#1f1a15" roughness={0.5} />
      </mesh>
      {/* Tapa */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <cylinderGeometry args={[0.28, 0.3, 0.12, 32]} />
        <meshStandardMaterial color="#1f1a15" roughness={0.45} />
      </mesh>
      {/* Pico */}
      <mesh position={[0, 0.9, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.1, 0.08, 24]} />
        <meshStandardMaterial color="#1f1a15" roughness={0.45} />
      </mesh>
    </group>
  );
}

function Laptop(props) {
  return (
    <group {...props}>
      {/* Base */}
      <RoundedBox
        args={[1.6, 0.06, 1.1]}
        radius={0.03}
        smoothness={4}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#c9bca6" metalness={0.5} roughness={0.35} />
      </RoundedBox>
      {/* Hinge */}
      <mesh position={[0, 0.03, -0.55]}>
        <boxGeometry args={[1.6, 0.06, 0.04]} />
        <meshStandardMaterial color="#9c8f80" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Tapa */}
      <group position={[0, 0.06, -0.55]} rotation={[-Math.PI / 2.8, 0, 0]}>
        <RoundedBox args={[1.6, 0.04, 1.05]} radius={0.03} smoothness={4} castShadow>
          <meshStandardMaterial color="#a89c8a" metalness={0.5} roughness={0.35} />
        </RoundedBox>
        {/* Pantalla */}
        <mesh position={[0, 0.025, 0]}>
          <planeGeometry args={[1.45, 0.92]} />
          <meshStandardMaterial
            color="#1f1a15"
            emissive="#5a7a4f"
            emissiveIntensity={0.35}
            roughness={0.5}
          />
        </mesh>
      </group>
    </group>
  );
}

function Desk(props) {
  return (
    <mesh receiveShadow {...props}>
      <cylinderGeometry args={[3.2, 3.2, 0.08, 64]} />
      <meshStandardMaterial color="#c9bca6" roughness={0.85} />
    </mesh>
  );
}

function Pelota(props) {
  return (
    <mesh castShadow receiveShadow {...props}>
      <icosahedronGeometry args={[0.18, 1]} />
      <meshStandardMaterial color="#faf7f1" roughness={0.55} />
    </mesh>
  );
}

function Scene() {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.08;
  });

  return (
    <PresentationControls
      global={false}
      cursor={false}
      snap
      polar={[-0.1, 0.2]}
      azimuth={[-0.4, 0.4]}
      config={{ mass: 1.2, tension: 220, friction: 24 }}
    >
      <group ref={groupRef} position={[0, -0.6, 0]}>
        <Desk position={[0, -0.05, 0]} />

        <Laptop position={[-1.05, 0.03, -0.05]} rotation={[0, 0.45, 0]} />

        <Float floatIntensity={0.35} rotationIntensity={0.25} speed={1.4}>
          <Mate position={[0.05, 0.05, 0.55]} />
        </Float>

        <Termo position={[1.25, 0.75, -0.1]} rotation={[0, -0.2, 0]} />

        <Pelota position={[1.55, 0.18, 0.85]} />
      </group>

      <ContactShadows
        position={[0, -0.66, 0]}
        opacity={0.45}
        blur={2.4}
        far={4}
        scale={6}
      />
    </PresentationControls>
  );
}

export default function MateScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 1.6, 4.3], fov: 32 }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight
        position={[3, 5, 3]}
        intensity={1.2}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-3, 2, -2]} intensity={0.3} color="#b23a48" />
      <Environment preset="apartment" />
      <Scene />
    </Canvas>
  );
}
