import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const BLUE = "#3d8bff";
const CYAN = "#3ee0ff";
const VIOLET = "#8b7cff";
const SHELL = "#16233b";
const SCREEN = "#071018";

function makeChipTexture(label: string) {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Could not draw a skill chip.");
  ctx.clearRect(0, 0, 256, 128);
  ctx.beginPath();
  ctx.roundRect(10, 28, 236, 72, 28);
  ctx.fillStyle = "rgba(16, 24, 42, 0.94)";
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.strokeStyle = "rgba(62, 224, 255, 0.9)";
  ctx.stroke();
  ctx.fillStyle = "#e8eefc";
  ctx.font = "600 40px Manrope, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label, 128, 64);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function Chip({ label, position }: { label: string; position: [number, number, number] }) {
  const texture = useMemo(() => makeChipTexture(label), [label]);
  useEffect(() => () => texture.dispose(), [texture]);
  return (
    <Float speed={1.6} rotationIntensity={0.15} floatIntensity={0.7}>
      <mesh position={position}>
        <planeGeometry args={[0.86, 0.43]} />
        <meshBasicMaterial map={texture} transparent toneMapped={false} />
      </mesh>
    </Float>
  );
}

function Laptop() {
  const bars = [
    { w: 1.15, y: 0.32, color: CYAN },
    { w: 0.78, y: 0.1, color: BLUE },
    { w: 1.32, y: -0.12, color: VIOLET },
    { w: 0.52, y: -0.34, color: CYAN },
  ];
  return (
    <group position={[0.1, -0.25, 0]} rotation={[0.18, -0.55, 0]}>
      <mesh position={[0, 0, 0.42]} castShadow>
        <boxGeometry args={[2.15, 0.08, 1.4]} />
        <meshStandardMaterial color={SHELL} metalness={0.72} roughness={0.28} />
      </mesh>
      <mesh position={[0, 0.046, 0.28]}>
        <boxGeometry args={[0.62, 0.012, 0.4]} />
        <meshStandardMaterial color="#0c1424" metalness={0.4} roughness={0.45} />
      </mesh>
      <group position={[0, 0.75, -0.22]} rotation={[-0.22, 0, 0]}>
        <mesh>
          <boxGeometry args={[2.15, 1.36, 0.06]} />
          <meshStandardMaterial color="#121c31" metalness={0.68} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0, 0.034]}>
          <planeGeometry args={[1.96, 1.18]} />
          <meshStandardMaterial color={SCREEN} emissive={BLUE} emissiveIntensity={0.28} />
        </mesh>
        {bars.map((bar) => (
          <mesh key={bar.y} position={[-0.82 + bar.w / 2, bar.y, 0.04]}>
            <boxGeometry args={[bar.w, 0.045, 0.01]} />
            <meshStandardMaterial color={bar.color} emissive={bar.color} emissiveIntensity={0.85} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const count = 70;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 7;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 4.2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 3.2;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);
  useEffect(() => () => geometry.dispose(), [geometry]);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += Math.min(delta, 0.05) * 0.04;
  });
  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial color={CYAN} size={0.028} transparent opacity={0.75} sizeAttenuation />
    </points>
  );
}

function Rig() {
  const group = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    const capped = Math.min(delta, 0.05);
    const targetY = state.pointer.x * 0.32;
    const targetX = -state.pointer.y * 0.16;
    g.rotation.y += (targetY - g.rotation.y) * 0.06;
    g.rotation.x += (targetX - g.rotation.x) * 0.06;
    if (ring.current) ring.current.rotation.z += capped * 0.15;
  });
  return (
    <group ref={group}>
      <mesh ref={ring} rotation={[1.2, 0.2, 0]}>
        <torusGeometry args={[1.85, 0.008, 12, 80]} />
        <meshStandardMaterial color={CYAN} emissive={CYAN} emissiveIntensity={0.6} />
      </mesh>
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.4}>
        <mesh position={[-1.55, 0.95, -0.2]}>
          <icosahedronGeometry args={[0.18, 0]} />
          <meshStandardMaterial color={VIOLET} emissive={VIOLET} emissiveIntensity={0.35} metalness={0.3} roughness={0.25} />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[1.7, -0.85, 0.3]}>
          <octahedronGeometry args={[0.16, 0]} />
          <meshStandardMaterial color={BLUE} emissive={BLUE} emissiveIntensity={0.4} metalness={0.25} roughness={0.3} />
        </mesh>
      </Float>
      <Laptop />
      <Chip label="React" position={[-1.55, 0.35, 0.7]} />
      <Chip label="Node" position={[1.55, 0.95, 0.35]} />
      <Chip label="TS" position={[1.45, 0.05, 0.85]} />
      <Chip label="Mongo" position={[-1.15, -0.35, 0.85]} />
      <Particles />
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 4, 4]} intensity={1.4} color="#e8eefc" />
      <pointLight position={[-2.5, 1.2, 2]} intensity={8} color={CYAN} distance={8} />
      <pointLight position={[2.2, -1, 1.5]} intensity={6} color={VIOLET} distance={7} />
      <Rig />
    </>
  );
}

export function HeroScene() {
  const wrap = useRef<HTMLDivElement>(null);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setRunning(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrap} className="h-full w-full" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0.15, 0.2, 4.8], fov: 38 }}
        frameloop={running ? "always" : "never"}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
